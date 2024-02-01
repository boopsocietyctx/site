import * as z from "zod";

export const LinksSchema = z.object({
  next: z.string().nullable(),
  previous: z.string().nullable(),
});
export type Links = z.infer<typeof LinksSchema>;

export const VenueSchema = z.object({
  name: z.string().nullable(),
  postal_code: z.string().nullable(),
});
export type Venue = z.infer<typeof VenueSchema>;

export const PaymentMethodSchema = z.object({
  external_id: z.string().nullable(),
  id: z.string(),
  instructions: z.string().nullable(),
  name: z.string().nullable(),
  type: z.string(),
});
export type PaymentMethod = z.infer<typeof PaymentMethodSchema>;

export const DateSchema = z.object({
  date: z.string(),
  formatted: z.string(),
  iso: z.string(),
  time: z.string(),
  timezone: z.string(),
  unix: z.number(),
});
export type NextOccurrenceDate = z.infer<typeof DateSchema>;

export const ImagesSchema = z.object({
  header: z.string().nullable(),
  thumbnail: z.string().nullable(),
});
export type Images = z.infer<typeof ImagesSchema>;

export const TicketTypeSchema = z.object({
  object: z.string(),
  id: z.string(),
  access_code: z.string().nullable(),
  booking_fee: z.number(),
  description: z.string().nullable(),
  group_id: z.string().nullable(),
  max_per_order: z.number(),
  min_per_order: z.number(),
  name: z.string(),
  price: z.number(),
  status: z.string(),
  sort_order: z.number(),
  type: z.string(),
  quantity: z.number(),
  quantity_held: z.number(),
  quantity_issued: z.number(),
  quantity_total: z.number(),
});
export type DefaultTicketType = z.infer<typeof TicketTypeSchema>;

export const TicketGroupSchema = z.object({
  id: z.string(),
  max_per_order: z.number().nullable(),
  name: z.string(),
  sort_order: z.number(),
  ticket_ids: z.array(z.string()),
});
export type DefaultTicketGroup = z.infer<typeof TicketGroupSchema>;

export const EventSeries = z.object({
  object: z.string(),
  id: z.string(),
  access_code: z.string().nullable(),
  call_to_action: z.string(),
  currency: z.string(),
  default_max_tickets_sold_per_occurrence: z.number().nullable(),
  default_ticket_groups: z.array(TicketGroupSchema),
  default_ticket_types: z.array(TicketTypeSchema),
  description: z.string().nullable(),
  images: ImagesSchema,
  name: z.string(),
  next_occurrence_date: DateSchema.nullable(),
  online_event: z.string(),
  payment_methods: z.array(PaymentMethodSchema),
  private: z.string(),
  revenue: z.number(),
  status: z.string(),
  timezone: z.string(),
  total_issued_tickets: z.number(),
  total_occurrences: z.number(),
  upcoming_occurrences: z.number(),
  url: z.string(),
  venue: VenueSchema,
  voucher_ids: z.array(z.string()),
});
export type EventSeries = z.infer<typeof EventSeries>;

export const EventSeriesResponseSchema = z.object({
  data: z.array(EventSeries),
  links: LinksSchema,
});
export type EventSeriesResponse = z.infer<typeof EventSeriesResponseSchema>;

export const EventOccurrenceSchema = z.object({
  object: z.string(),
  id: z.string(),
  chk: z.string(),
  currency: z.string(),
  end: DateSchema,
  event_series_id: z.string(),
  hidden: z.coerce.boolean(),
  override_id: z.string().nullable(),
  revenue: z.number(),
  start: DateSchema,
  max_tickets_sold_per_occurrence: z.number().nullable(),
  tickets_available: z.string().nullable(),
  ticket_groups: z.array(TicketGroupSchema),
  ticket_types: z.array(TicketTypeSchema),
  total_issued_tickets: z.number(),
  unavailable: z.string(),
  unavailable_status: z.string().nullable(),
});
export type EventOccurrence = z.infer<typeof EventOccurrenceSchema>;

export const EventOccurrenceResponseSchema = z.object({
  data: z.array(EventOccurrenceSchema),
  links: LinksSchema,
});
export type EventOccurrenceResponse = z.infer<
  typeof EventOccurrenceResponseSchema
>;
