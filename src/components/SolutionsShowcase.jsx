import React, { useEffect, useRef } from 'react'
import { Building2, Factory, Stethoscope } from 'lucide-react'
import { gsap } from '../lib/gsap'

const items = [
  { icon: Building2, title: 'Real Estate Automation (Domus)', text: 'Lead capture, qualification, and appointment setting across portals and WhatsApp.' },
  { icon: Factory, title: 'Business Automation', text: 'CRM, billing, support, and analytics connected with AI-driven workflows.' },
  { icon: Stethoscope, title: 'Clinic Automation', text: 'Patient intake, reminders, and post-visit follow-ups with secure messaging.' },
]

export default function SolutionsShowcase() {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    const blocks = ref.current.querySelectorAll('[data-sol]')
    gsap.fromTo(blocks, { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: ref.current, start: 'top 80%' } })
  }, [])

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold">Solutions</h2>
        <div ref={ref} className="mt-10 space-y-6">
          {items.map((it, i) => (
            <div key={i} data-sol className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 md:p-8 flex items-start gap-4">
              <it.icon className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold">{it.title}</h3>
                <p className="text-white/70 mt-2">{it.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
