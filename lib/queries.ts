import { groq } from 'next-sanity'

export const projectsQuery = groq`*[_type == "project"] | order(publishedAt desc) {
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
}`

export const projectBySlugQuery = groq`*[_type == "project" && slug.current == $slug][0] {
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
}`

export const lookbooksQuery = groq`*[_type == "lookbook"] | order(publishedAt desc) {
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
}`

export const lookbookBySlugQuery = groq`*[_type == "lookbook" && slug.current == $slug][0] {
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
}`

export const seasonsQuery = groq`*[_type == "season"] | order(name) {
  _id,
  name,
  slug
}`

export const projectSlugsQuery = groq`*[_type == "project"] {
  "params": {
    "slug": slug.current
  }
}`

export const lookbookSlugsQuery = groq`*[_type == "lookbook"] {
  "params": {
    "slug": slug.current
  }
}`
