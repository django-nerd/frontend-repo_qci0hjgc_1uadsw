import React, { useEffect, useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { gsap, ScrollTrigger } from '../lib/gsap'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  const titleRef = useRef(null)
  const subRef = useRef(null)
  const ctaRef = useRef(null)
  const heroRef = useRef(null)

  useEffect(() => {
    if (!titleRef.current) return
    gsap.fromTo(
      titleRef.current.querySelectorAll('span'),
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.06, ease: 'power3.out' }
    )
    gsap.fromTo(subRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 0.4, ease: 'power3.out' })
    gsap.fromTo(ctaRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 0.6, ease: 'power3.out' })

    // subtle parallax on scroll
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: 'top top',
      end: 'bottom top',
      scrub: 0.8,
      onUpdate: (self) => {
        const y = self.progress * -60
        gsap.to('#spline-wrap', { y, ease: 'none' })
      }
    })
  }, [])

  const words = 'Automate. Integrate. Scale with AI.'.split(' ')

  return (
    <section ref={heroRef} className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div id="spline-wrap" className="h-[80vh] pointer-events-auto">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-secondary/60 to-secondary pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-40 pb-28">
        <div ref={titleRef} className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
          {words.map((w, i) => (
            <span key={i} className="inline-block mr-3 bg-clip-text text-transparent bg-gradient-to-br from-white to-white/70">
              {w}
            </span>
          ))}
        </div>
        <p ref={subRef} className="mt-6 max-w-2xl text-lg md:text-xl text-white/80">
          N1 AI builds automation systems, AI chatbots, and custom web apps that streamline operations and unlock growth.
        </p>
        <div ref={ctaRef} className="mt-10 flex items-center gap-4">
          <Link to="/contact" className="px-6 py-3 rounded-md bg-primary text-secondary font-medium hover:shadow-[0_10px_40px_rgba(31,182,255,0.5)] transition-transform hover:-translate-y-0.5">
            Book a discovery call
          </Link>
          <Link to="/solutions" className="px-6 py-3 rounded-md border border-white/20 hover:border-white/40 transition">
            Explore solutions
          </Link>
        </div>
      </div>
    </section>
  )
}
