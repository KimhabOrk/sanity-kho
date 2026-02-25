const IMAGEKIT_BASE = process.env.NEXT_PUBLIC_IMAGEKIT_URL_BASE || 'https://ik.imagekit.io/kimhabork'

export interface ImageKitTransformOptions {
  width?: number
  height?: number
  quality?: number
  fit?: 'contain' | 'cover' | 'fill' | 'inside' | 'outside'
  gravity?: string
  format?: string
}

/**
 * Build an ImageKit URL with optional transformations
 * @param imagePath - The path of the image (without base URL)
 * @param options - Optional transformation parameters
 * @returns Full ImageKit URL with transformations
 */
export function getImageKitUrl(
  imagePath: string,
  options: ImageKitTransformOptions = {}
): string {
  // If imagePath already includes the full URL, use it as-is
  if (imagePath.startsWith('http')) {
    return imagePath
  }

  // Build transformation string
  const transforms: string[] = []

  if (options.width || options.height) {
    const w = options.width || 'auto'
    const h = options.height || 'auto'
    transforms.push(`w-${w},h-${h}`)
  }

  if (options.quality) {
    transforms.push(`q-${options.quality}`)
  }

  if (options.fit) {
    transforms.push(`c-${options.fit}`)
  }

  if (options.format) {
    transforms.push(`f-${options.format}`)
  }

  const transformString = transforms.length > 0 ? `/tr:${transforms.join(',')}` : ''

  return `${IMAGEKIT_BASE}${transformString}/${imagePath}`
}

/**
 * Get responsive image srcset for different screen sizes
 * @param imagePath - The path of the image
 * @returns Object with src and srcSet
 */
export function getResponsiveImageSrcSet(imagePath: string) {
  return {
    src: getImageKitUrl(imagePath, { width: 800, quality: 90 }),
    srcSet: `
      ${getImageKitUrl(imagePath, { width: 400, quality: 80 })} 400w,
      ${getImageKitUrl(imagePath, { width: 800, quality: 90 })} 800w,
      ${getImageKitUrl(imagePath, { width: 1200, quality: 90 })} 1200w,
      ${getImageKitUrl(imagePath, { width: 1600, quality: 90 })} 1600w
    `.trim(),
  }
}
