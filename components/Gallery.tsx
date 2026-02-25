'use client'

import Image from 'next/image'

interface GalleryImage {
  url: string
  alt: string
  caption?: string
}

interface GalleryProps {
  images: GalleryImage[]
  columns?: 2 | 3 | 4
}

export function Gallery({ images, columns = 3 }: GalleryProps) {
  if (!images || images.length === 0) {
    return null
  }

  const gridColsClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  }[columns]

  return (
    <div className={`grid grid-cols-1 ${gridColsClass} gap-4 md:gap-6`}>
      {images.map((image, index) => (
        <div key={index} className="group overflow-hidden bg-white/5">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={image.url}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          {image.caption && (
            <div className="p-3 bg-white/5">
              <p className="text-sm text-white/70">{image.caption}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
