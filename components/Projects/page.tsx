import Link from 'next/link';
import Image from 'next/image';
import { getAllProjects } from '@/lib/sanity.queries';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { getSanityImageUrlWithDimensions } from '@/lib/image-url';
import type { Project } from '@/sanity.types';

export default async function ProjectsPage() {
  let projects: Project[] = [];
  let error: string | null = null;

  try {
    projects = await getAllProjects();
  } catch (err) {
    error = 'Failed to fetch projects. Please try again later.';
    console.error('Failed to fetch projects:', err);
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar transparent={false} />
      
      <main className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h1 className="font-serif text-4xl md:text-6xl text-balance mb-4">Projects</h1>
            <p className="text-gray-400 text-lg">Artistic collections showcasing contemporary design</p>
          </div>

          {error ? (
            <div className="text-center py-16">
              <p className="text-gray-400">{error}</p>
            </div>
          ) : projects.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-400">No projects found. Start creating content in Sanity Studio.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Link key={project._id} href={`/projects/${project.slug?.current}`}>
                  <div className="group cursor-pointer">
                    <div className="relative h-96 mb-4 overflow-hidden bg-gray-900 rounded-lg">
                      {project.image?.url && (
                        <Image
                          src={getSanityImageUrlWithDimensions(project.image, 500, 400)}
                          alt={project.title || 'Project image'}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          priority={false}
                        />
                      )}
                    </div>
                    <h2 className="font-serif text-2xl mb-2 group-hover:text-[#d4af37] transition-colors">
                      {project.title}
                    </h2>
                    {project.season && (
                      <p className="text-gray-500 text-sm mb-2">{project.season.name}</p>
                    )}
                    {project.category && (
                      <p className="text-accent text-xs uppercase tracking-wide mb-2">{project.category}</p>
                    )}
                    <p className="text-gray-400 line-clamp-2">{project.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
