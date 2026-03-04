import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

const minutes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/minutes' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    meetingType: z.enum(['regular', 'special']).default('regular'),
    committee: z.enum(['full', 'planning', 'advocacy']).default('full'),
    agendaUrl: z.string().optional(),
    minutesUrl: z.string().optional(),
    supplementaryUrls: z.array(z.object({
      label: z.string(),
      url: z.string(),
    })).optional(),
    draft: z.boolean().default(false),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    location: z.string(),
    eventType: z.enum(['community-ride', 'open-streets', 'public-comment', 'workshop', 'other']).default('other'),
    externalUrl: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

const members = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/members' }),
  schema: z.object({
    name: z.string(),
    district: z.number().int().min(1).max(15),
    role: z.string().optional(),
    appointedBy: z.string().optional(),
    term: z.string().optional(),
    bio: z.string().optional(),
  }),
});

export const collections = { news, minutes, events, members };
