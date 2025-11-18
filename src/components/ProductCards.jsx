import React, { useEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'

const products = [
  { name: 'Talk AI', text: 'Conversational AI for lead capture, support, and internal automations.', href: '#' },
  { name: 'Dottore AI', text: 'Healthcare-focused assistant for patient triage and follow-ups.', href: '#' },
]

export default function ProductCards() {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    const cards = ref.current.querySelectorAll('[data-prod]')
    gsap.fromTo(cards, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: ref.current, start: 'top 80%' } })
  }, [])

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold">Products</h2>
        <div ref={ref} className="mt-10 grid md:grid-cols-2 gap-6">
          {products.map((p) => (
            <a key={p.name} href={p.href} data-prod className="group rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 transition transform hover:-translate-y-1 hover:shadow-[0_12px_60px_rgba(255,73,219,0.15)]">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <div className="px-3 py-1 rounded-full text-xs bg-accent/20 text-accent">SaaS</div>
              </div>
              <p className="mt-3 text-white/70">{p.text}</p>
              <div className="mt-6 inline-block px-4 py-2 rounded-md bg-primary text-secondary font-medium group-hover:-translate-y-0.5 transition">Learn more</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
