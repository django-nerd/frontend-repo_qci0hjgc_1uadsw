import React, { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Layout from '../components/Layout'
import { gsap } from '../lib/gsap'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    const fields = ref.current.querySelectorAll('input, textarea, button')
    gsap.fromTo(fields, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.05, ease: 'power2.out' })
  }, [])

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <Layout>
      <Helmet>
        <title>Contact – N1 AI</title>
        <meta name="description" content="Book a discovery call or message us on WhatsApp to get started." />
      </Helmet>
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="mt-3 text-white/70">Tell us about your goals and systems — we'll reply within 24 hours.</p>
        <form onSubmit={submit} ref={ref} className="mt-8 space-y-4">
          <input required placeholder="Your name" className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 focus:outline-none focus:border-primary" />
          <input required type="email" placeholder="Email" className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 focus:outline-none focus:border-primary" />
          <textarea required rows="5" placeholder="What would you like to build or automate?" className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 focus:outline-none focus:border-primary" />
          <div className="flex items-center gap-3">
            <button type="submit" className="px-6 py-3 rounded-md bg-primary text-secondary font-medium hover:shadow-[0_10px_40px_rgba(31,182,255,0.5)] transition-transform hover:-translate-y-0.5">Send</button>
            <a href="https://wa.me/15551234567" target="_blank" className="px-6 py-3 rounded-md border border-white/20 hover:border-white/40">WhatsApp</a>
          </div>
          {sent && <p className="text-green-400">Thanks! We'll get back to you shortly.</p>}
        </form>
      </section>
    </Layout>
  )
}
