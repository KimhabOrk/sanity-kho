import { client } from './sanity.client'
import type { Project, Lookbook, Season, ImageReference, GalleryImage } from '@/sanity.types'

// Re-export types for use in components
export type { Project, Lookbook, Season, ImageReference, GalleryImage }

// Queries with proper GROQ syntax for new schema

export async function getAllSeasons(): Promise<Season[]> {
  return client.fetch(
    `*[_type == "season"] | order(name asc) {
      _id,
      _type,
      name,
      slug
    }`
  )
}

export async function getAllProjects(): Promise<Project[]> {
  return client.fetch(
    `*[_type == "project" && defined(publishedAt)] | order(publishedAt desc) {
      _id,
      _type,
      title,
      slug,
      season-> {
        _id,
        _type,
        name,
        slug
      },
      category,
      description,
      image {
        id,
        url
      },
      gallery[] {
        id,
        url
      },
      publishedAt
    }`
  )
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return client.fetch(
    `*[_type == "project" && slug.current == $slug][0] {
      _id,
      _type,
      title,
      slug,
      season-> {
        _id,
        _type,
        name,
        slug
      },
      category,
      description,
      image {
        id,
        url
      },
      gallery[] {
        id,
        url
      },
      publishedAt
    }`,
    { slug }
  )
}

export async function getAllLookbooks(): Promise<Lookbook[]> {
  return client.fetch(
    `*[_type == "lookbook" && defined(publishedAt)] | order(publishedAt desc) {
      _id,
      _type,
      title,
      slug,
      season-> {
        _id,
        _type,
        name,
        slug
      },
      category,
      description,
      image {
        id,
        url
      },
      gallery[] {
        id,
        url
      },
      publishedAt
    }`
  )
}

export async function getLookbookBySlug(slug: string): Promise<Lookbook | null> {
  return client.fetch(
    `*[_type == "lookbook" && slug.current == $slug][0] {
      _id,
      _type,
      title,
      slug,
      season-> {
        _id,
        _type,
        name,
        slug
      },
      category,
      description,
      image {
        id,
        url
      },
      gallery[] {
        id,
        url
      },
      publishedAt
    }`,
    { slug }
  )
}
