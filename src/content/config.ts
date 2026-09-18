import { defineCollection, z } from "astro:content";

const formsCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    category: z.string(),
    endDate: z.string(),
  }),
});

const vacanciesCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    category: z.string(),
    endDate: z.string(),
  }),
});

const servicesCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    category: z.string(),
  }),
});

const websitesCollection = defineCollection({
  type: "data",
  schema: z.object({
    label: z.string(),
    url: z.string(),
    category: z.string(),
  }),
});

const noticesCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    date: z.string(),
  }),
});

export const collections = {
  forms: formsCollection,
  vacancies: vacanciesCollection,
  services: servicesCollection,
  websites: websitesCollection,
  notices: noticesCollection,
};