import {
  endOfDay,
  endOfMonth,
  format,
  formatDistance,
  isWithinInterval,
  startOfMonth,
} from "date-fns";
import { Parser, ProcessNodeDefinitions } from "html-to-react";
import type { InferGetStaticPropsType, NextPage } from "next";
import React, { PropsWithChildren, useCallback, useMemo, useRef } from "react";
import { useButton } from "react-aria";
import z from "zod";

const parser = new Parser();
const nodeDefs = new ProcessNodeDefinitions(React);
const dateTimeFormat = new Intl.DateTimeFormat("en", {
  dateStyle: "medium",
  timeStyle: "short",
});

function isValidNode(node: JSX.Element) {
  switch (node.type) {
    case "tag":
      const tagName = (node as any).name as string;
      if (
        ["h1", "h2", "h3", "h4", "h5", "p", "div", "strong", "br"].includes(
          tagName
        )
      ) {
        return true;
      }
      console.log(`Rejecting tag: ${tagName}`);
      return false;
    case "text":
    default:
      return true;
  }
}

const instructions = [
  {
    shouldProcessNode: () => true,
    processNode: (node: JSX.Element, children: JSX.Element[]) => {
      if (node.type === "tag") {
        const tagName = (node as any).name as string;
        switch (tagName) {
        }
      }
      return nodeDefs.processDefaultNode(node, children);
    },
  },
];

function Description({
  description,
}: PropsWithChildren<{ description: string | null }>) {
  const parsed = description
    ? parser.parseWithInstructions(description, isValidNode, instructions)
    : null;
  return <div>{parsed}</div>;
}

function Event({ event }: { event: typeof eventSchema["_type"]["data"][0] }) {
  const start = useMemo(() => new Date(event.start.iso), [event]);
  const end = useMemo(() => new Date(event.end.iso), [event]);

  const addToCalendar = useCallback(() => {
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
  }, [end, event, start]);

  const addToCalendarButton = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(
    {
      onPress: addToCalendar,
    },
    addToCalendarButton
  );

  return (
    <div className="flex flex-col gap-2 mb-10" key={event.name}>
      <h3 className="font-serif font-bold text-2xl text-red-400">
        {event.name}
      </h3>
      <div className="flex flex-row item-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-1 inline"
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
      <div className="flex flex-row item-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-1 inline"
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
        {event.venue.name}, {event.venue.postal_code}
      </div>
      <Description description={event.description} />
      <button
        className="w-40 rounded bg-slate-800 px-4 py-2 hover:bg-slate-700 focus-within:bg-slate-700"
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
    <main className="container max-w-long-prose">
      <h2 className="mx-10 text-center">Events for This Month</h2>
      <div className="mb-4">
        {events.map((event: any) => (
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

const eventSchema = z.object({
  data: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      description: z.string().nullable(),
      private: z.string(),
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

  const res = await fetch(`https://api.tickettailor.com/v1/events`, {
    headers: {
      authorization: `Basic ${btoa(`${token}:`)}`,
      accept: "application/json",
    },
  });

  const json = await res.json();
  const result = eventSchema.safeParse(json);
  if (!result.success) {
    throw new Error("Failed to parse response from Ticket Tailor API.");
  }

  const { data } = (result as any).data as typeof result["parsed"];

  const firstDay = startOfMonth(new Date());
  const lastDay = endOfDay(endOfMonth(new Date()));

  const liveEvents = data.filter(
    (event) =>
      event.private === "false" &&
      event.status === "published" &&
      isWithinInterval(new Date(event.start.iso), {
        start: firstDay,
        end: lastDay,
      })
  );

  return {
    props: {
      events: liveEvents,
    },
  };
}

export default Home;
