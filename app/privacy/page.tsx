import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Kimhab Ork',
  description: 'Privacy policy for Kimhab Ork website.',
}

export default function PrivacyPage() {
  const currentYear = new Date().getFullYear()

  return (
    <main className="min-h-screen bg-black py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
        <p className="text-white/60 mb-12">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="space-y-8 text-white/80 leading-relaxed">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p>
              Kimhab Ork ("we," "us," "our," or "Company") operates the kimhabork.com website (the "Site"). This Privacy Policy explains how we collect, use, disclose, and otherwise handle your information when you visit our Site.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Personal Information</h3>
                <p>
                  We collect information you voluntarily provide when you contact us through our contact form, including your name, email address, subject, and message.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Automatically Collected Information</h3>
                <p>
                  When you visit our Site, we automatically collect certain information about your device and browsing behavior, including IP address, browser type, operating system, and pages visited.
                </p>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Information</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>To respond to your inquiries and communications</li>
              <li>To improve and optimize our Site</li>
              <li>To understand how visitors use our Site</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and the rights of visitors</li>
            </ul>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures designed to protect the personal information we collect against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your data. Contact us to exercise these rights.
            </p>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Third-Party Services</h2>
            <p>
              Our Site may contain links to third-party websites and services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our privacy practices, please contact us through our{' '}
              <a href="/contact" className="text-white hover:text-white/80 underline">
                contact page
              </a>
              .
            </p>
          </section>

          {/* Changes to Policy */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last updated" date, and the updated version will be effective as soon as it is accessible.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
