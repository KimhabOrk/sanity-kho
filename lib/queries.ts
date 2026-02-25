export const projectsQuery = `*[_type == "project"] | order(publishedAt desc) {
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

export const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0] {
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

export const lookbooksQuery = `*[_type == "lookbook"] | order(publishedAt desc) {
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

export const lookbookBySlugQuery = `*[_type == "lookbook" && slug.current == $slug][0] {
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

export const seasonsQuery = `*[_type == "season"] | order(name) {
  _id,
  name,
  slug
}`

export const projectSlugsQuery = `*[_type == "project"] {
  "params": {
    "slug": slug.current
  }
}`

export const lookbookSlugsQuery = `*[_type == "lookbook"] {
  "params": {
    "slug": slug.current
  }
}`
