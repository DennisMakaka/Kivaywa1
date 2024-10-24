import { z } from 'zod';

export const eventSchema = z.object({
  id: z.string(),
  title: z.string().min(3, 'Title must be at least 3 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  date: z.string(),
  time: z.string(),
  location: z.string(),
  type: z.enum(['networking', 'workshop', 'seminar', 'social', 'fundraising']),
  capacity: z.number().min(1),
  registeredCount: z.number(),
  imageUrl: z.string().url().optional(),
  organizer: z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
  }),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const eventCreateSchema = eventSchema.omit({
  id: true,
  registeredCount: true,
  organizer: true,
  createdAt: true,
  updatedAt: true,
});

export type Event = z.infer<typeof eventSchema>;
export type EventCreate = z.infer<typeof eventCreateSchema>;