import { defineCollection, z } from "astro:content";
import { file, glob } from "astro/loaders";

const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.string().default("お知らせ"),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

const events = defineCollection({
  loader: file("src/data/events.json"),
  schema: z.object({
    name: z.string(),
    datetime: z.coerce.date(),
    url: z.string().url(),
  }),
});

export const collections = { news, pages, events };
