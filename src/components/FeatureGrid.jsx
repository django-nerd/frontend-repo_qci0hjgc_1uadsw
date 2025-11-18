import React, { useEffect, useRef } from 'react'
import { Bot, Workflow, Database, MessageSquare, Rocket, Shield } from 'lucide-react'
import { gsap } from '../lib/gsap'

const features = [
  { icon: Bot, title: 'AI Chatbots', desc: 'Smart assistants that qualify leads, support customers, and automate workflows.' },
  { icon: Workflow, title: 'Automations', desc: 'From CRMs to billing, connect tools and eliminate manual tasks.' },
  { icon: Database, title: 'Data Pipelines', desc: 'ETL, enrichment, and analytics tailored to your business.' },
  { icon: MessageSquare, title: 'Omnichannel', desc: 'WhatsApp, email, web — consistent experiences everywhere.' },
  { icon: Shield, title: 'Security First', desc: 'Best practices for auth, data handling, and compliance.' },
  { icon: Rocket, title: 'Rapid Delivery', desc: 'Sprint-based delivery with measurable outcomes.' },
]

export default function FeatureGrid() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const cards = ref.current.querySelectorAll('[data-card]')
    gsap.fromTo(cards, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: ref.current, start: 'top 80%' } })
  }, [])

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold">What we do</h2>
        <p className="mt-3 text-white/70 max-w-2xl">We design and deploy automation systems that reduce costs and improve customer experiences.</p>

        <div ref={ref} className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} data-card className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:shadow-[0_12px_60px_rgba(31,182,255,0.12)] transition transform hover:-translate-y-1">
              <f.icon className="w-6 h-6 text-primary mb-4" />
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="text-white/70 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
