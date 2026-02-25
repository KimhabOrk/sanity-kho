'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

interface CardProps {
  title: string
  category: string
  description: string
  image: {
    url: string
    alt: string
  }
  season ? : {
    name: string
  }
  publishedAt ? : string
  href: string
  type ? : 'project' | 'lookbook'
}

export function Card({
  title,
  category,
  description,
  image,
  season,
  publishedAt,
  href,
  type = 'project',
}: CardProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  const formattedDate = publishedAt ?
    new Date(publishedAt).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
    }) :
    null
  
  return (
    <Link href={href}>
      <div
        className="group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="relative w-full aspect-[4/5] overflow-hidden bg-white/5 mb-4">
          <Image
            src={image.url}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`object-cover transition-transform duration-500 ${
              isHovered ? 'scale-105' : 'scale-100'
            }`}
          />
          <div
            className={`absolute inset-0 bg-black/0 transition-all duration-300 ${
              isHovered ? 'bg-black/40' : 'bg-black/0'
            }`}
          />
        </div>

        {/* Content */}
        <div className="space-y-3">
          {/* Season */}
          <div className="flex items-center mb-6 gap-4 md:gap-6">
          {season && (
            <div className="text-xs font-medium text-white/60 uppercase tracking-widest">
              {season.name}
            </div>
          )}
          
          {/* Category */}
          {category && (
            <div className="text-xs font-medium text-white/60 uppercase tracking-widest">
              {category}
            </div>
          )}
          </div>
          {/* Title */}
          <h3
            className={`text-xl md:text-2xl font-bold text-white transition-all duration-300 ${
              isHovered ? 'text-white' : 'text-white/90'
            }`}
          >
            {title}
          </h3>
          
          {formattedDate && (
            <div className="text-xs font-medium text-white/60 uppercase tracking-widest">
              {formattedDate}
            </div>
          )}
          
          {/* Description Preview */}
          {isHovered && (
            <p className="text-sm text-white/70 line-clamp-2 animate-in fade-in duration-300">
              {description}
            </p>
          )}

          {/* Date */}
          {formattedDate && (
            <div className="text-xs text-white/50 pt-2 border-t border-white/10">
              {formattedDate}
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}