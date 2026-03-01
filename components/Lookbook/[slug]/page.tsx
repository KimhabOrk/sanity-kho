import Image from 'next/image';
import { getLookbookBySlug } from '@/lib/sanity.queries';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { getSanityImageUrlWithDimensions } from '@/lib/image-url';
import type { Lookbook } from '@/sanity.types';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function LookbookDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const lookbook: Lookbook | null = await getLookbookBySlug(resolvedParams.slug).catch(() => null);

  if (!lookbook) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navbar transparent={false} />
        <div className="pt-32 pb-20 px-4 md:px-8 flex items-center justify-center">
          <p className="text-gray-400">Lookbook not found</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar transparent={false} />
      
      <main className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h1 className="font-serif text-4xl md:text-6xl text-balance mb-4">{lookbook.title}</h1>
            <div className="flex flex-col md:flex-row gap-8 text-gray-400">
              {lookbook.season && (
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Season</p>
                  <p className="text-lg">{lookbook.season.name}</p>
                </div>
              )}
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Published</p>
                <p className="text-lg">
                  {lookbook.publishedAt ? new Date(lookbook.publishedAt).toLocaleDateString() : 'N/A'}
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-16 max-w-2xl">
            <p className="text-lg text-gray-300 leading-relaxed">{lookbook.description}</p>
          </div>

          {/* Main Image */}
          {lookbook.image?.url && (
            <div className="relative w-full h-96 md:h-[600px] mb-16 rounded-lg overflow-hidden">
              <Image
                src={getSanityImageUrlWithDimensions(lookbook.image, 1200, 600)}
                alt={lookbook.title || 'Lookbook image'}
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Gallery */}
          {lookbook.gallery && lookbook.gallery.length > 0 && (
            <div>
              <h2 className="font-serif text-2xl md:text-3xl mb-8">Collection Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {lookbook.gallery.map((item, index) => (
                  <div key={item.id || index} className="relative h-96 rounded-lg overflow-hidden bg-muted">
                    {item.url && (
                      <Image
                        src={getSanityImageUrlWithDimensions(item, 500, 400)}
                        alt={`${lookbook.title} gallery ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover hover:scale-105 transition-transform duration-300 rounded-lg"
                        priority={false}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
