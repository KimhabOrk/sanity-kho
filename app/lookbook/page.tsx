import { Metadata } from 'next'
import { sanityServerClient } from '@/lib/sanity.client'
import { lookbooksQuery } from '@/lib/queries'
import { Card } from '@/components/Card'

export const metadata: Metadata = {
  title: 'Lookbook - Kimhab Ork',
  description: 'Collections lookbooks by Kimhab Ork.',
}

interface LookbookItem {
  _id: string
  title: string
  category: string
  slug: { current: string }
  type: string
  description: string
  publishedAt: string
  image: {
    url: string
    alt: string
  }
  season: {
    name: string
  }
}

export default async function LookbookPage() {
  let lookbooks: LookbookItem[] = []

  try {
    lookbooks = await sanityServerClient.fetch(lookbooksQuery)
  } catch (error) {
    console.error('Error fetching lookbooks:', error)
  }

  return (
    <main className="min-h-screen bg-black py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Lookbook</h1>
          <p className="text-lg text-white/60">
            Lookbooks Collection
          </p>
        </div>

        {/* Lookbook Grid */}
        {lookbooks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lookbooks.map((lookbook) => (
              <Card
                key={lookbook._id}
                title={lookbook.title}
                category={lookbook.category}
                description={lookbook.description}
                image={lookbook.image}
                season={lookbook.season}
                publishedAt={lookbook.publishedAt}
                href={`/lookbook/${lookbook.slug.current}`}
                type="lookbook"
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-red-600 text-lg">No lookbooks available yet.</p>
          </div>
        )}
      </div>
    </main>
  )
}
