import type { PressEvent } from "@react-types/shared";
import {
  addMonths,
  compareAsc,
  endOfDay,
  format,
  formatDistance,
  getUnixTime,
  startOfDay,
} from "date-fns";
import { Parser, ProcessNodeDefinitions } from "html-to-react";
import sortBy from "lodash/sortBy";
import type { InferGetStaticPropsType, NextPage } from "next";
import { PropsWithChildren, useCallback, useId, useMemo, useRef } from "react";
import { useButton } from "react-aria";
import xss from "xss";
import z from "zod";

const parser = new Parser();
const nodeDefs = new ProcessNodeDefinitions();
const dateTimeFormat = new Intl.DateTimeFormat("en", {
  dateStyle: "medium",
  timeStyle: "short",
});

function isValidNode() {
  return true;
}

const instructions = [
  {
    shouldProcessNode: () => true,
    processNode: (node: JSX.Element, children: JSX.Element[]) => {
      if (node.type === "tag") {
        const tagName = (node as any).name as string;
        // Kept around for if/when we want to customize the styling of embeded content
        switch (tagName) {
        }
      }
      const processedNode = nodeDefs.processDefaultNode(
        node,
        children,
        // We only call this in the context of a node
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useId()
      );
      return processedNode;
    },
  },
];

function Description({
  description,
}: PropsWithChildren<{ description: string | null }>) {
  const parsed = description
    ? parser.parseWithInstructions(xss(description), isValidNode, instructions)
    : null;
  return (
    <div className="prose prose-slate my-2 border-l-2 border-slate-500 bg-slate-700 py-4 pl-4 dark:prose-invert">
      {parsed}
    </div>
  );
}

function Event({ event }: { event: typeof eventSchema["_type"]["data"][0] }) {
  const start = useMemo(() => new Date(event.start.iso), [event]);
  const end = useMemo(() => new Date(event.end.iso), [event]);

  const addToCalendar = useCallback(
    (e: PressEvent) => {
      import("add-to-calendar-button").then((m) => {
        m.atcb_action({
          name: event.name,
          startDate: format(start, "yyyy-MM-dd"),
          startTime: format(start, "HH:mm"),
          endDate: format(end, "yyyy-MM-dd"),
          endTime: format(end, "HH:mm"),
          description: event.description ?? "",
          timeZone: event.timezone,
          options: ["Apple", "Google", "Outlook.com", "iCal"],
          location: `${event.venue.name}, ${event.venue.postal_code}`,
          style: "none",
        });
      });
    },
    [end, event, start]
  );

  const addToCalendarButton = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(
    {
      onPress: addToCalendar,
    },
    addToCalendarButton
  );

  const mapsSearch = new URL(`https://www.google.com/maps/search/?api=1`);
  mapsSearch.searchParams.append(
    "query",
    `${event.venue.name} ${event.venue.postal_code}`
  );

  return (
    <div className="mb-10 flex flex-col gap-2 rounded bg-slate-800 px-6 py-4">
      <h3 className="mb-2 text-2xl font-bold text-red-400">{event.name}</h3>
      <div className="flex flex-row">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-1 inline h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        {formatDistance(start, new Date(), { addSuffix: true })} on{" "}
        {dateTimeFormat.formatRange(start, end)}
      </div>
      <div className="flex flex-row">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-1 inline h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
          />
        </svg>
        <a className="link" href={mapsSearch.toString()}>
          {event.venue.name}, {event.venue.postal_code}
        </a>
      </div>
      <Description description={event.description} />
      <button
        className="mt-2 w-40 rounded bg-slate-700 px-4 py-2 focus-within:bg-slate-600 hover:bg-slate-600"
        {...buttonProps}
        ref={addToCalendarButton}
      >
        Add to Calendar
      </button>
    </div>
  );
}

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  events,
}) => {
  return (
    <main className="container max-w-long-prose py-[5vh]">
      <h2 className="mx-10 text-center">Upcoming Events</h2>
      <div className="mb-4">
        {events.map((event) => (
          <Event key={event.name} event={event} />
        ))}
      </div>
    </main>
  );
};

const eventDateSchema = z.object({
  date: z.string(),
  formatted: z.string(),
  iso: z.string(),
  unix: z.number(),
});

const stringyBool = z.preprocess(
  (arg) => (arg === "true" ? true : false),
  z.boolean()
);

const eventSchema = z.object({
  data: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      description: z.string().nullable(),
      hidden: stringyBool,
      private: stringyBool,
      status: z.string(),
      start: eventDateSchema,
      end: eventDateSchema,
      timezone: z.string(),
      venue: z.object({
        name: z.string(),
        postal_code: z.string().optional().nullable(),
      }),
    })
  ),
});

export async function getStaticProps() {
  const token = process.env.TICKET_TAILOR_API_TOKEN;
  if (!token) {
    return { props: { events: [] } };
  }

  const query = new URL(`https://api.tickettailor.com/v1/events`);
  query.searchParams.append(
    "start_at.gte",
    `${getUnixTime(startOfDay(new Date()))}`
  );
  query.searchParams.append(
    "end_at.lte",
    `${getUnixTime(endOfDay(addMonths(new Date(), 2)))}`
  );
  query.searchParams.append("limit", "10");

  const res = await fetch(query, {
    headers: {
      authorization: `Basic ${Buffer.from(`${token}:`).toString("base64")}`,
      accept: "application/json",
    },
  });

  const json = await res.json();
  const result = eventSchema.safeParse(json);
  if (!result.success) {
    throw new Error("Failed to parse response from Ticket Tailor API.");
  }

  const { data } = result.data;
  const liveEvents = data.filter(
    (event) => !event.hidden && event.status === "published"
  );
  liveEvents.sort((e1, e2) =>
    compareAsc(new Date(e1.start.iso), new Date(e2.end.iso))
  );

  return {
    props: {
      events: liveEvents,
    },
    /* Regenerate everyday */
    revalidate: 24 * 60 * 60,
  };
}

export default Home;
