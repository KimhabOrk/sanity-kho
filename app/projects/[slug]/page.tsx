import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { sanityServerClient } from '@/lib/sanity.client'
import { projectBySlugQuery, projectSlugsQuery } from '@/lib/queries'
import { Gallery } from '@/components/Gallery'
import { ArrowLeft } from 'lucide-react'

export async function generateStaticParams() {
  try {
    const params = await sanityServerClient.fetch(projectSlugsQuery)
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
    const project = await sanityServerClient.fetch(projectBySlugQuery, {
      slug: params.slug,
    })

    if (!project) {
      return {
        title: 'Project Not Found',
      }
    }

    return {
      title: `${project.title} - Kimhab Ork`,
      description: project.description,
    }
  } catch {
    return {
      title: 'Project',
    }
  }
}

interface ProjectDetailProps {
  params: {
    slug: string
  }
}

interface GalleryImage {
  url: string
  alt: string
  caption?: string
}

interface ProjectData {
  title: string
  category: string
  description: string
  publishedAt: string
  season: {
    name: string
  }
  gallery: GalleryImage[]
}

export default async function ProjectDetailPage({ params }: ProjectDetailProps) {
  let project: ProjectData | null = null

  try {
    project = await sanityServerClient.fetch(projectBySlugQuery, {
      slug: params.slug,
    })
  } catch (error) {
    console.error('Error fetching project:', error)
  }

  if (!project) {
    notFound()
  }

  const formattedDate = new Date(project.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <main className="min-h-screen bg-black py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft size={20} />
          Go Back
        </Link>

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm md:text-md font-medium text-white/60 uppercase tracking-widest">
              {project.season.name}
            </span>
            <span className="text-sm md:text-md font-medium text-white/60">
              {project.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {project.title}
          </h1>
          <span className="text-sm md:text-md font-medium text-white/60">
            {formattedDate}
          </span>
          <p className="text-md md:text-lg text-white/70 max-w-3xl leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-20">
            <Gallery images={project.gallery} columns={3} />
          </div>
        )}
      </div>
    </main>
  )
}
