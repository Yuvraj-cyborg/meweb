import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
  }),
});

const journal = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string().transform((str) => new Date(str)),
  }),
});

export const collections = {
  blog,
  journal,
};
