import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// "Iz terena" — guides and articles. One Markdown file per article in
// src/content/iz-terena/; the file name becomes the URL slug.
const articles = defineCollection({
  loader: glob({ base: './src/content/iz-terena', pattern: '**/*.md' }),
  schema: z.object({
    /** H1 on the page */
    title: z.string(),
    /** <title> tag; defaults to "{title} | BTON" */
    metaTitle: z.string().optional(),
    /** meta description + listing card text */
    description: z.string(),
    /** short, answer-first intro under the H1 */
    lead: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    /** shown at the end of the article + FAQPage JSON-LD */
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  }),
});

export const collections = { articles };
