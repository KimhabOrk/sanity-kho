import { Metadata } from 'next'
import { sanityServerClient } from '@/lib/sanity.client'
import { projectsQuery } from '@/lib/queries'
import { Card } from '@/components/Card'

export const metadata: Metadata = {
  title: 'Projects - Kimhab Ork',
  description: 'Explore artistic fashion collections and design projects by Kimhab Ork.',
}

interface ProjectItem {
  _id: string
  title: string
  slug: { current: string }
  category: string
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

export default async function ProjectsPage() {
  let projects: ProjectItem[] = []

  try {
    projects = await sanityServerClient.fetch(projectsQuery)
  } catch (error) {
    console.error('Error fetching projects:', error)
  }

  return (
    <main className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h1>
          <p className="text-lg text-white/60">
            Collections projects and experimental designs
          </p>
        </div>

        {/* Projects Grid */}
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project._id}
                title={project.title}
                category={project.category}
                description={project.description}
                image={project.image}
                season={project.season}
                publishedAt={project.publishedAt}
                href={`/projects/${project.slug.current}`}
                type="project"
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-red-600 text-lg">No projects available yet.</p>
          </div>
        )}
      </div>
    </main>
  )
}
