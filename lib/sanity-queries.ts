import { defineQuery } from "next-sanity";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "gvp68dtj",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2026-03-01",
  useCdn: true,
});

export const projectsQuery =
  defineQuery(`*[_type == "project"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  category,
  description,
  publishedAt,
  image {
    url,
    alt,
    caption
  },
  season->{
    name,
    slug
  }
}`);


export const projectBySlugQuery =
  defineQuery(`*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  category,
  description,
  publishedAt,
  image {
    url,
    alt,
    caption
  },
  gallery[] {
    url,
    alt,
    caption
  },
  season->{
    _id,
    name,
    slug
  }
}`);

export const lookbooksQuery =
  defineQuery(`*[_type == "lookbook"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  category,
  description,
  publishedAt,
  image {
    url,
    alt,
    caption
  },
  season->{
    name,
    slug
  }
}`);

export const lookbookBySlugQuery =
  defineQuery(`*[_type == "lookbook" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  category,
  description,
  publishedAt,
  image {
    url,
    alt,
    caption
  },
  gallery[] {
    url,
    alt,
    caption
  },
  season->{
    _id,
    name,
    slug
  }
}`);

export const seasonsQuery = defineQuery(`*[_type == "season"] | order(name) {
  _id,
  name,
  slug
}`);

export const projectSlugsQuery = defineQuery(`*[_type == "project"] {
  "params": {
    "slug": slug.current
  }
}`);

export const lookbookSlugsQuery = defineQuery(`*[_type == "lookbook"] {
  "params": {
    "slug": slug.current
  }
}`);
