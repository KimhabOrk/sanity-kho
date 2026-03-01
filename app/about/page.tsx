import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About - Kimhab Ork',
  description: 'Learn about Kimhab Ork, a visionary fashion designer blending artistry with commercial excellence.',
}

const timeline = [
  {
    year: "2022",
    title: "Foundation Lecturer",
    description: "Employed as a foundation of art & design professor at Limkokwing University.",
  },
  {
    year: "2021",
    title: "Fashion Lecturer",
    description: "Get appointed as a fashion professor at Phnom Penh University of The Arts.",
  },
  {
    year: "2018",
    title: "Fashion Coach",
    description: "Get assigned to be a fashion coach at Pedro.",
  },
  {
    year: "2017",
    title: "Lead Fashion Designer",
    description:
      "Directly employed as a lead designer at a manufacturer that produces products for Adidas, Gap and Joe Fresh.",
  },
  {
    year: "2017",
    title: "Bachelor in Fashion Design",
    description:
      "Completed European Bachelor of Science in Design, Fashion from Accademia Italiana Florence, Italy",
  },
  {
    year: "2014",
    title: "Foundation of Business and Marketing",
    description:
      "Completed a foundation course in Business and Marketing at SSTC Institute, Singapore.",
  },
  {
    year: "2013",
    title: "General English Certificate",
    description: "General English at SSTC Institute, Singapore.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase">Kimhab Ork</h1>
          <p className="text-lg text-white/60">
            Fashion designer. Visionary. Creator.
          </p>
        </div>

        <section className="container relative max-w-4xl mb-10 md:mb-16">
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
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-6">Biography</h2>
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
        
        { /* Timeline */ }
      <section className="mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-16">Journey</h2>
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-4 md:gap-6 group">
                <div className="flex-shrink-0 w-20 md:w-24">
                  <p className="text-2xl md:text-3xl font-medium text-primary">{item.year}</p>
                </div>
                <div className="flex-grow border-l-2 border-border group-hover:border-primary transition-colors pl-6 pb-8">
                  <h3 className="text-xl md:text-3xl font-medium mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
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
            <ul className="list-disc list-inside list-primary space-y-3 ml-3 marker:text-primary">
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
