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
  description: "Directly employed as a lead designer at a manufacturer that produces products for Adidas, Gap and Joe Fresh.",
},
{
  year: "2017",
  title: "Bachelor in Fashion Design",
  description: "Completed European Bachelor of Science in Design, Fashion from Accademia Italiana Florence, Italy",
},
{
  year: "2014",
  title: "Foundation of Business and Marketing",
  description: "Completed a foundation course in Business and Marketing at SSTC Institute, Singapore.",
},
{
  year: "2013",
  title: "General English Certificate",
  description: "General English at SSTC Institute, Singapore.",
}, ];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase">Kimhab Ork</h1>
          <p className="text-lg text-white/80">
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
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-5 uppercase">Biography</h2>
          <div className="space-y-6 text-white/80 leading-relaxed">
            <p>
              Kimhab Ork is a visionary fashion designer, university lecturer, and the founder of the eponymous luxury fashion brand KIMHAB ORK, where he masterfully bridges the artistic innovation and educational mentorship in the dynamic world of fashion. Hailing from Cambodia and armed with a prestigious degree from one of Italy's premier fashion institutions, Kimhab Ork has amassed over a decade of expertise in both the industry and academia, channeling his passion into designs that celebrate cultural heritage while propelling contemporary style forward.
            </p>
            <p>
              His journey began with a deep-rooted fascination for the transformative power of textiles and form, leading him to pursue advanced studies in Italy—a global epicenter of sartorial excellence. There, he honed his skills in blending traditional craftsmanship with avant-garde concepts, drawing inspiration from diverse sources—ranging from architectural silhouettes and global cultural evolution to the resilience found in artistic traditions.
            </p>
            <p>
              Upon returning to Cambodia, Kimhab worked in multiple private fashion companies for over a decade before launching KIMHAB ORK, a luxury label that combines impeccable technical precision with an artistic vision that redefines elegance and provocation. Through meticulous attention to detail, intricate embroidery, high-quality materials, experimental fabric manipulations—each design under his label becomes a testament to his philosophy.
            </p>
            <p>
              For Kimhab, fashion is a storytelling medium that disrupts norms, challenges perceptions, and empowers individuals to embody their authentic selves.
            </p>
          </div>
        </section>
        
        {/* Vision Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-5 uppercase">Vision & Mission</h2>
          <div className="space-y-6 text-white/80 leading-relaxed">
            <p>
              As a dedicated educator at leading institutions, including his involvement in high-profile events like the Phnom Penh Design Festival, Ork inspires emerging talents to think globally while rooting their creativity in local identity. His workshops, such as "The Alchemist’s Atelier: From Spark to Fashion Story," emphasize experiential learning, guiding participants through the alchemical process of transforming ideas into wearable art. Ork's teaching ethos revolves around hands-on mastery of essential techniques—from conceptual illustration and precise pattern-making to advanced sewing, draping, and innovative textile manipulation—while encouraging students to cultivate their distinctive voices in an industry ripe for reinvention.
            </p>
            <p>
              Beyond the atelier and classroom, Kimhab is an independent researcher and thought leader, contributing to publications on fashion marketing, creative design in fashion and consumer trends. Furthermore his influence extends to fostering a vibrant creative ecosystem in Cambodia, where he advocates for ethical production. 
            </p>
            <p>
              His holistic vision extends to community initiatives, where he promotes accessible design education, bridging local students with international standards. With an eye toward the future, Kimhab continues to expand KIMHAB ORK's global footprint, envisioning a world where fashion serves as a key element in promoting cultural dialogue and personal identity.
            </p>
            <p>
              He is proving that fashion can be both a disruptive force and a nurturing bridge between generations, ultimately redefining luxury as an inclusive, story-rich experience that honors the past while envisioning the future.
            </p>
          </div>
        </section>
        
        {/* Philosophy Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Design Philosophy</h2>
          <div className="space-y-6 text-white/80 leading-relaxed">
            <p>
              Kimhab's design philosophy is rooted in the belief that fashion should be both intellectually stimulating and commercially relevant. She views each collection as a dialogue between artistic vision and practical wearability, creating pieces that resonate with both critics and consumers.
            </p>
            <p>
              Her approach emphasizes:
            </p>
            <ul className="list-disc list-inside space-y-3 ml-1 md:ml-4 list-primary">
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
        
        { /* Timeline */ }
      <section className="mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-16">Journey</h2>
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-4 md:gap-6 group">
                <div className="flex-shrink-0 w-20 md:w-24">
                  <p className="text-xl md:text-2xl font-medium text-primary">{item.year}</p>
                </div>
                <div className="flex-grow border-l-2 border-white/30 group-hover:border-primary transition-colors pl-6 pb-8">
                  <h3 className="text-lg md:text-xl font-medium mb-2">{item.title}</h3>
                  <p className="text-foreground/80 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      

        <section className="mb-16 bg-background">
          <div className="mx-auto max-w-4xl">
            <div className="relative bg-muted border border-border p-6 md:p-10 rounded-lg">
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-foreground mb-5">
                A Word from KIMHAB
              </h2>

              <blockquote className="space-y-6">
                <p className="text-lg text-foreground/80 leading-relaxed italic">
                  "Fashion has the power to transform how people feel about themselves. But too often, that transformation comes at a price—not just in dollars, but in ethics and the environment. When I founded Kimhab ORK, I wanted to prove a different way was possible."
                </p>

                <p className="text-lg text-foreground/80 leading-relaxed italic">
                  "Every woman deserves to feel bold, confident, beautiful, and proud of what she's wearing. We create pieces that don't require compromise—beautiful design, premium quality, ethical production, and prices that make luxury accessible. This is our promise."
                </p>

                <p className="text-lg text-foreground/80 leading-relaxed italic">
                  "Join us in redefining what luxury means. Together, we're building a fashion community that celebrates individuality, respects our planet, and proves that affordability and excellence can coexist."
                </p>
              </blockquote>

              <div className="mt-4 pt-4 border-t border-border">
                <p className="font-semibold text-foreground">KIMHAB ORK</p>
                <p className="text-foreground/70">Creative Director & Founder, Kimhab ORK Co., Ltd</p>
              </div>
              <div className="absolute bottom-2 right-2">
                <Image 
                  src="/signature.png" 
                  width={32} 
                  height={8.5} 
                  alt="Signature" 
                  className="w-full object-cover" 
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact CTA */}
        <section className="border-t border-white/10 pt-12">
          <h2 className="text-2xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-white/80 mb-5">
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