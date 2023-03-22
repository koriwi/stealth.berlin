import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val.toString())),
    version: z
      .string()
      .refine((data) => data.replace(" ", "-"))
      .default("Unbekannt"),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    gallery: z.array(z.string()).min(1).default([]),
  }),
});

export const collections = { posts };
