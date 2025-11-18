import React, { useEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'

const stats = [
  { k: 'Automation ROI', v: '5-10x' },
  { k: 'Avg. Response Time', v: '< 1m' },
  { k: 'Reduction in Manual Ops', v: '40-70%' },
]

export default function StatsSection() {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    const items = ref.current.querySelectorAll('[data-stat]')
    gsap.fromTo(items, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: ref.current, start: 'top 80%' } })
  }, [])
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((s) => (
            <div key={s.k} data-stat className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
              <div className="text-3xl font-bold text-primary">{s.v}</div>
              <div className="text-white/70 mt-2">{s.k}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
