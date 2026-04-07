'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { content } from '@/lib/content'
import { Mail, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!formData.name || !formData.email || !formData.message) {
      setError('Kérjük, töltse ki az összes mezőt.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Kérjük, adjon meg érvényes e-mail címet.')
      return
    }

    // Submit form
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })

    // Reset after 5 seconds
    setTimeout(() => {
      setSubmitted(false)
    }, 5000)
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/30 to-background border-b border-border">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{content.contact.title}</h1>
            <p className="text-xl text-muted-foreground">{content.contact.getInTouch}</p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            {submitted ? (
              <div className="p-8 rounded-lg bg-accent/10 border border-accent/20 text-center">
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20">
                    <Mail size={24} className="text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Köszönjük!</h3>
                <p className="text-muted-foreground">
                  {content.contact.thanks} Hamarosan válaszolunk.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 rounded-md bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                    {error}
                  </div>
                )}

                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    {content.contact.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Teljes neved"
                    className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-ring"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {content.contact.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-ring"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {content.contact.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Írd meg az üzeneted..."
                    rows={6}
                    className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-ring resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-md bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  {content.contact.send}
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20 border-t border-border">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Elérhetőség</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-lg bg-card border border-border">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 mb-4">
                  <Mail size={24} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">E-mail kapcsolat</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Bármilyen kérdés esetén töltsd ki az ürlöpot, és 24 órán belül válaszolunk.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Céginformáció</h3>
                <address className="not-italic text-sm text-foreground space-y-1 leading-relaxed">
                  <p className="font-medium">K.C. NTOMATA LIMITED</p>
                  <p>Stylianou Lena,</p>
                  <p>24 Christiana Court,</p>
                  <p>Flat/Office 202,</p>
                  <p>Strovolos,</p>
                  <p>2019 Nicosia, Cyprus</p>
                </address>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-muted-foreground text-sm">
                Szívesen fogadjuk a visszajelzéseket és ötleteket az új túrák tervezéséhez.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
