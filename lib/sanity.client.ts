import {createClient} from '@sanity/client'

if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
  throw new Error('NEXT_PUBLIC_SANITY_PROJECT_ID is required')
}

if (!process.env.NEXT_PUBLIC_SANITY_DATASET) {
  throw new Error('NEXT_PUBLIC_SANITY_DATASET is required')
}

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'gvp68dtj',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2026-01-01',
  useCdn: true,
})

export const sanityServerClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'gvp68dtj',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN || 'sktcBdAJnXQgbM7BRNZNdOggdgDwZHkeeaWhJuPZp1gOSd6VfQIAS4IBKhiBX9cH7LmuB4PZwsHyNJOXRdo6kk15LFlgTnreEK0Djc9mvuC64X9nXF9LN7XHFFi97FFFfkxOAzOFGif4yIJKfkrAVklZlovkvncYyqdWAinxdYs4r5AJhRrj',
})
