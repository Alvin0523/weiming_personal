import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    period: z.string(),
    start: z.coerce.date(),
    context: z.string().optional(),
    award: z.string().optional(),
    tags: z.array(z.string()).default([]),
    github: z.url().optional(),
    // YouTube video id, or a path under public/ for a short MP4/WebM loop
    youtube: z.string().optional(),
    video: z.string().optional(),
    featured: z.boolean().default(false),
    ongoing: z.boolean().default(false),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    org: z.string(),
    role: z.string(),
    period: z.string(),
    start: z.coerce.date(),
    location: z.string().optional(),
    note: z.string().optional(),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    date: z.coerce.date(),
  }),
});

export const collections = { projects, experience, news };
