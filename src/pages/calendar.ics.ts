import { getVtimezoneComponent } from "@touch4it/ical-timezones";
import type { APIRoute } from "astro";
import { compile } from "html-to-text";
import ical, { ICalCalendarMethod, ICalEventStatus } from "ical-generator";
import ky from "ky";
import { DateTime, Duration } from "luxon";
import {
  EventOccurrenceResponseSchema,
  EventSeriesResponseSchema,
} from "../schemas/ticketTailorSchema";

export const GET: APIRoute = async ({ locals, request }) => {
  const cachedIcs = await locals.runtime.env.CACHE.get("calendar.ics");
  if (cachedIcs && !new URL(request.url).searchParams.has("preview")) {
    return new Response(cachedIcs, {
      headers: {
        "Content-Type": "text/calendar; charset=utf-8",
        "Content-Disposition": 'attachment; filename="boopsocietyctx.ics"',
      },
    });
  }

  const apiToken = locals.runtime.env.TICKET_TAILOR_API_TOKEN;

  const tt = ky.extend({
    prefixUrl: "https://api.tickettailor.com/",
    headers: {
      Authorization: `Basic ${btoa(`${apiToken}:`)}`,
    },
  });

  const seriesRes = EventSeriesResponseSchema.parse(
    await tt.get("v1/event_series").json(),
  );

  const upcoming = seriesRes.data.filter(
    (series) => series.upcoming_occurrences > 0,
  );

  const canonicalUrl = new URL(request.url);

  const calendar = ical({
    name: "Boop Society of Central Texas",
    description:
      "The official calendar of events for the Boop Society of Central Texas. Generated from TicketTailor.",
    source: canonicalUrl.toString(),
    url: canonicalUrl.toString(),
    method: ICalCalendarMethod.PUBLISH,
    timezone: {
      name: "America/Chicago",
      generator: getVtimezoneComponent,
    },
    x: {
      "X-WR-RELCALID": "bsctx-65c2bb03-0559-4e7d-be0b-cba529ef8f50",
    },
  }).ttl(60 * 60 * 24);

  const now = DateTime.now();
  const searchStart = now
    .startOf("month")
    .minus(Duration.fromDurationLike({ days: 15 }));
  const searchEnd = now
    .endOf("month", {})
    .plus(Duration.fromDurationLike({ days: 31 }));

  const htmlStrip = compile({ wordwrap: 120 });

  for (const series of upcoming) {
    const occurrenceRes = EventOccurrenceResponseSchema.parse(
      await tt
        .get(`v1/event_series/${series.id}/events`, {
          searchParams: {
            "start_at.gte": searchStart.toUnixInteger(),
            "end_at.lte": searchEnd.toUnixInteger(),
            status: "published,sales_closed",
          },
        })
        .json(),
    );

    for (const occurrence of occurrenceRes.data) {
      const start = DateTime.fromISO(occurrence.start.iso);
      const occurrenceUrl = new URL(
        `select-event/${start.toFormat("yyyy-MM-dd")}`,
        series.url.endsWith("/") ? series.url : `${series.url}/`,
      ).toString();
      calendar.createEvent({
        id: occurrence.id,
        summary: series.name.slice(0, 254),
        description: series.description
          ? {
              plain: `RSVP here: ${occurrenceUrl} | \n${htmlStrip(series.description)}`,
              html: `<p>RSVP here: <a href="${occurrenceUrl}">${occurrenceUrl}</a></p>${series.description}`,
            }
          : undefined,
        start,
        end: DateTime.fromISO(occurrence.end.iso),
        timezone: series.timezone,
        status:
          occurrence.unavailable === "true" ? ICalEventStatus.CANCELLED : null,
        location: series.venue.name,
        organizer: "Boop Society CTX <webmaster@boopsocietyctx.com>",
        url: occurrenceUrl,
      });
    }
  }

  const ics = calendar.toString();
  await locals.runtime.env.CACHE.put("calendar.ics", ics, {
    expirationTtl: 60 * 60 * 4,
  });

  return new Response(calendar.toString(), {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": 'attachment; filename="boopsocietyctx.ics"',
    },
  });
};
