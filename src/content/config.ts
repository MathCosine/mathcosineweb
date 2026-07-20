import { defineCollection, z } from 'astro:content';

const notes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    course: z.string(),
    semester: z.string(),
    date: z.coerce.date(),
    pdf: z.string(),
    tags: z.array(z.string()).default([]),
    description: z.string().optional(),
  }),
});

const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { notes, writing };
