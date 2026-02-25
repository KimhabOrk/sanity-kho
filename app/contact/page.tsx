'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setMessage({
          type: 'success',
          text: 'Thank you for your message! We\'ll get back to you soon.',
        })
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setMessage({
          type: 'error',
          text: result.error || 'Something went wrong. Please try again.',
        })
      }
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'An error occurred. Please try again later.',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact</h1>
          <p className="text-lg text-white/60">
            Have a question or collaboration opportunity? Let's connect.
          </p>
        </div>

        {/* Form */}
        <div className="bg-gray-800/80 px-4 md:px-6 py-6 md:px-8 rounded-xl">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Send us a message
          </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/40 text-white placeholder-white/40 focus:border-white/30 focus:outline-none transition-colors"
              placeholder="Your name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/40 text-white placeholder-white/40 focus:border-white/30 focus:outline-none transition-colors"
              placeholder="your@email.com"
            />
          </div>

          {/* Subject Field */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/40 text-white placeholder-white/40 focus:border-white/30 focus:outline-none transition-colors"
              placeholder="What's this about?"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-white/5 border border-white/40 text-white placeholder-white/40 focus:border-white/30 focus:outline-none transition-colors resize-none"
              placeholder="Your message here..."
            />
          </div>

          {/* Message Alert */}
          {message && (
            <div
              className={`p-4 text-sm ${
                message.type === 'success'
                  ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                  : 'bg-red-500/10 text-red-400 border border-red-500/20'
              }`}
            >
              {message.text}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        </div>

        {/* Contact Info */}
        <div className="mt-16 pt-12 border-t border-white/40">
          <h3 className="text-lg font-semibold text-white mb-6">Other ways to connect</h3>
          <div className="space-y-4 text-white/70">
            <p>We typically respond to messages within 24-48 hours.</p>
            <p>For press inquiries and collaboration opportunities, please reach out through the form above.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
