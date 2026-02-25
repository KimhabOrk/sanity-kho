import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { sanityServerClient } from '@/lib/sanity.client'
import { lookbookBySlugQuery, lookbookSlugsQuery } from '@/lib/queries'
import { Gallery } from '@/components/Gallery'
import { ArrowLeft } from 'lucide-react'

export async function generateStaticParams() {
  try {
    const params = await sanityServerClient.fetch(lookbookSlugsQuery)
    return params
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  try {
    const lookbook = await sanityServerClient.fetch(lookbookBySlugQuery, {
      slug: params.slug,
    })

    if (!lookbook) {
      return {
        title: 'Lookbook Not Found',
      }
    }

    return {
      title: `${lookbook.title} - Kimhab Ork`,
      description: lookbook.description,
    }
  } catch {
    return {
      title: 'Lookbook',
    }
  }
}

interface LookbookDetailProps {
  params: {
    slug: string
  }
}

interface GalleryImage {
  url: string
  alt: string
  caption?: string
}

interface LookbookData {
  title: string
  description: string
  publishedAt: string
  season: {
    name: string
  }
  gallery: GalleryImage[]
}

export default async function LookbookDetailPage({ params }: LookbookDetailProps) {
  let lookbook: LookbookData | null = null

  try {
    lookbook = await sanityServerClient.fetch(lookbookBySlugQuery, {
      slug: params.slug,
    })
  } catch (error) {
    console.error('Error fetching lookbook:', error)
  }

  if (!lookbook) {
    notFound()
  }

  const formattedDate = new Date(lookbook.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <main className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link
          href="/lookbook"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft size={20} />
          Go Back
        </Link>

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm md:text-md font-medium text-white/60 uppercase tracking-widest">
              {lookbook.season.name}
            </span>
            <span className="text-sm md:text-md font-medium text-white/60">
              {lookbook.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {lookbook.title}
          </h1>
          <span className="text-sm md:text-md font-medium text-white/60">
            {formattedDate}
          </span>
          <p className="text-md md:text-lg text-white/70 max-w-3xl leading-relaxed">
            {lookbook.description}
          </p>
        </div>

        {/* Gallery */}
        {lookbook.gallery && lookbook.gallery.length > 0 && (
          <div className="mt-20">
            <Gallery images={lookbook.gallery} columns={3} />
          </div>
        )}
      </div>
    </main>
  )
}
