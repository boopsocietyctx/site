import { defineCollection, z } from "astro:content";

const eventCollection = defineCollection({
  type: "content",
  schema: z.object({
    summary: z.string().max(254),
    description: z.string(),
    url: z.string().url().optional(),
    start: z.coerce.date(),
    end: z.coerce.date(),
    location: z.string(),
  }),
});

export const collections = {
  events: eventCollection,
};
