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
  }),
});

// Professional case studies that do not belong in the academic `projects`
// collection. Entries render at /engineering/<slug>/ only when `draft` is false.
const engineering = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/engineering' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    organization: z.string(),
    type: z.string(),
    summary: z.string(),
    featured: z.boolean().default(false),
    // Scope note for work whose internal results cannot be disclosed.
    disclosure: z.string().optional(),
    // Defaults to true so an incomplete case study cannot be routed publicly.
    draft: z.boolean().default(true),
  }),
});

export const collections = { research, projects, engineering };
