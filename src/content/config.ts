import { defineCollection, z } from 'astro:content';

// Impact case studies — one Markdown file per engagement.
const impact = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    metric: z.string(),
    metricLabel: z.string(),
    context: z.string(),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

// Capability groups — one Markdown file per theme.
const capabilities = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    items: z.array(z.string()),
    order: z.number().default(0),
  }),
});

export const collections = { impact, capabilities };
