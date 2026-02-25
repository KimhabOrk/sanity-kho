import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About - Kimhab Ork',
  description: 'Learn about Kimhab Ork, a visionary fashion designer blending artistry with commercial excellence.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Kimhab Ork</h1>
          <p className="text-lg text-white/60">
            Fashion designer. Visionary. Creator.
          </p>
        </div>

        <section className="container relative px-4 md:px-6 max-w-4xl mb-10 md:mb-16">
          <div className="flex mx-auto justify-center items-center aspect-square shandow-2xl">
            <Image 
              src="https://ik.imagekit.io/kimhabork/assets/lv_0_20260205133647.jpg" 
              width={800}
              height={800}
              alt="Creative Director photo"
              priority
              className="object-cover rounded-xl"
            />
          </div>
        </section>
        {/* Biography Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Biography</h2>
          <div className="space-y-6 text-white/80 leading-relaxed">
            <p>
              Kimhab Ork is a visionary fashion designer who seamlessly blends artistic expression with commercial viability. With a passion for pushing creative boundaries and a deep understanding of market dynamics, Kimhab has established herself as a prominent figure in contemporary fashion.
            </p>
            <p>
              Her work spans from experimental artistic collections to commercially successful lookbooks, each piece reflecting a meticulous attention to detail and a commitment to excellence. Drawing inspiration from diverse cultural influences and innovative design philosophies, Kimhab's creations challenge conventional fashion narratives.
            </p>
            <p>
              Based on a foundation of technical mastery and conceptual depth, her design practice explores the intersection of form, function, and artistic vision. Each season brings new perspectives and refined techniques, solidifying her position as a leading voice in contemporary fashion design.
            </p>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Design Philosophy</h2>
          <div className="space-y-6 text-white/80 leading-relaxed">
            <p>
              Kimhab's design philosophy is rooted in the belief that fashion should be both intellectually stimulating and commercially relevant. She views each collection as a dialogue between artistic vision and practical wearability, creating pieces that resonate with both critics and consumers.
            </p>
            <p>
              Her approach emphasizes:
            </p>
            <ul className="list-disc list-inside list-primary space-y-3 ml-3">
              <li><span className="text-white">Precision Craftsmanship:</span> Meticulous attention to construction and material quality</li>
              <li><span className="text-white">Conceptual Depth:</span> Collections grounded in meaningful narratives and artistic concepts</li>
              <li><span className="text-white">Innovation:</span> Continuous exploration of new techniques and materials</li>
              <li><span className="text-white">Accessibility:</span> Creating designs that are both artistic and commercially viable</li>
              <li><span className="text-white">Sustainability:</span> Responsible design practices that respect both people and planet</li>
            </ul>
            <p>
              Through this philosophy, Kimhab has built a body of work that stands as a testament to the possibilities of contemporary fashion design.
            </p>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="border-t border-white/10 pt-12">
          <h2 className="text-2xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-white/80 mb-6">
            Interested in learning more about KIMHAB ORK? We'd love to hear from you.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold hover:bg-white hover:text-primary transition-colors rounded-xl"
          >
            Contact Kimhab
          </a>
        </section>
      </div>
    </main>
  )
}
