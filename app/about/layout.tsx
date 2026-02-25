import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: 'About - Kimhab Ork',
  description: 'Learn about Kimhab Ork, a visionary fashion designer blending artistry with commercial excellence.',
};

export default function AboutLayout({
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
