import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    venue: z.string(),
    excerpt: z.string().optional(),
    paperUrl: z.string().url().optional(),
    citation: z.string().optional(),
    // Publication status is three orthogonal facts, not one overloaded label.
    // What the artifact is:
    artifactType: z.enum(['paper', 'preprint', 'presentation', 'poster']),
    // Whether it went through peer review:
    reviewStatus: z.enum(['peer-reviewed', 'not-peer-reviewed', 'not-applicable']),
    // Where it stands in the publication pipeline:
    publicationStatus: z.enum(['published', 'accepted', 'unpublished', 'not-applicable']),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    type: z.string(),
    venue: z.string(),
    location: z.string().optional(),
    // 'flagship' entries render at /projects/; 'coursework' at /academics/.
    category: z.enum(['flagship', 'coursework']).default('coursework'),
    summary: z.string().optional(),
    repoUrl: z.string().url().optional(),
    // Scope note for work whose internal results cannot be disclosed.
    disclosure: z.string().optional(),
    // Defaults to false; an incomplete entry (e.g. an unfinished case study)
    // sets this to true so it gets no public route and is excluded from
    // homepage selection until its content is ready.
    draft: z.boolean().default(false),
  }),
});

export const collections = { research, projects };
