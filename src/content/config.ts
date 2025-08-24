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
    date: z.union([z.string(), z.date()]).transform((val) => new Date(val)),
  }),
});

export const collections = {
  blog,
  journal,
};
