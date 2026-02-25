import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects - Kimhab Ork',
  description: 'Explore artistic fashion collections and design projects by Kimhab Ork.',
};

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Navbar />
          <main className="pt-8 md:pt-12">
            {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
