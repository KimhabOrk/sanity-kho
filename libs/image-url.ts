import type { ImageReference, GalleryImage } from '@/sanity.types'

/**
 * Gets image URL from ImageReference or GalleryImage object
 * The new schema stores images as {id, url} objects directly
 * @param image - The image object with id and url properties
 * @returns Image URL string
 */
export function getImageUrl(
  image: ImageReference | GalleryImage | null | undefined
): string {
  if (!image || !image.url) {
    return '/placeholder.png'
  }
  return image.url
}

/**
 * Gets image URL with optional dimensions as query parameters
 * @param image - The image object with id and url
 * @param width - Optional image width for optimization
 * @param height - Optional image height for optimization
 * @returns Image URL with optimization parameters
 */
export function getSanityImageUrlWithDimensions(
  image: ImageReference | GalleryImage | null | undefined,
  width?: number,
  height?: number
): string {
  const baseUrl = getImageUrl(image)
  
  if (baseUrl === '/placeholder.png') {
    return baseUrl
  }
  
  // Add dimensions as query parameters if provided
  if (width || height) {
    const params = new URLSearchParams()
    if (width) params.append('w', width.toString())
    if (height) params.append('h', height.toString())
    params.append('auto', 'format')
    
    const separator = baseUrl.includes('?') ? '&' : '?'
    return params.toString() ? `${baseUrl}${separator}${params.toString()}` : baseUrl
  }
  
  return baseUrl
}

/**
 * Gets simple image URL without parameters
 * @param image - The image object with id and url
 * @returns Image URL
 */
export function getSanityImageUrl(
  image: ImageReference | GalleryImage | null | undefined
): string {
  return getImageUrl(image)
}

/**
 * Gets image ID from ImageReference object
 * @param image - The image object
 * @returns Image ID string
 */
export function getImageId(
  image: ImageReference | GalleryImage | null | undefined
): string {
  return image?.id || ''
}
