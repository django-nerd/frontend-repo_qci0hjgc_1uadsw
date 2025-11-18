import React, { useEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'

const steps = [
  { n: '01', title: 'Discovery', text: 'We map objectives, systems, and constraints to define success.' },
  { n: '02', title: 'Blueprint', text: 'We design the architecture, integrations, and datasets.' },
  { n: '03', title: 'Build', text: 'We implement automations, chatbots, and apps in sprints.' },
  { n: '04', title: 'Launch', text: 'We ship, measure, and iterate with clear metrics.' },
]

export default function HowItWorksSection() {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    const items = ref.current.querySelectorAll('[data-step]')
    gsap.fromTo(items, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.07, ease: 'power3.out', scrollTrigger: { trigger: ref.current, start: 'top 80%' } })
  }, [])

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold">How it works</h2>
        <div ref={ref} className="mt-10 grid md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.n} data-step className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="text-primary font-semibold">{s.n}</div>
              <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-white/70">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
