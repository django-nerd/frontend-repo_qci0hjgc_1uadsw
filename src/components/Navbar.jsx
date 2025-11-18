import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { gsap } from '../lib/gsap'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar({ scrolled }) {
  const [open, setOpen] = useState(false)
  const barRef = useRef(null)

  useEffect(() => {
    if (!barRef.current) return
    gsap.to(barRef.current, {
      duration: 0.3,
      paddingTop: scrolled ? 8 : 18,
      paddingBottom: scrolled ? 8 : 18,
      backgroundColor: scrolled ? 'rgba(10,15,26,0.7)' : 'transparent',
      backdropFilter: scrolled ? 'blur(8px)' : 'blur(0px)',
      ease: 'power2.out'
    })
  }, [scrolled])

  return (
    <header ref={barRef} className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between border-b border-white/10 rounded-b-2xl bg-secondary/40">
          <Link to="/" className="flex items-center gap-2 py-4">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-primary to-accent" />
            <span className="font-semibold tracking-tight">N1 AI</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((n) => (
              <NavLink key={n.to} to={n.to} className={({ isActive }) => `text-sm hover:text-primary transition ${isActive ? 'text-primary' : 'text-white/80'}`}>
                {n.label}
              </NavLink>
            ))}
            <Link to="/contact" className="px-4 py-2 rounded-md bg-primary text-secondary font-medium hover:shadow-[0_8px_30px_rgba(31,182,255,0.45)] transition-transform hover:-translate-y-0.5">Get Started</Link>
          </nav>

          <button className="md:hidden p-2" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mx-4 mt-2 rounded-xl border border-white/10 bg-secondary/90 backdrop-blur px-4 py-4 space-y-2">
          {navItems.map((n) => (
            <NavLink key={n.to} to={n.to} onClick={() => setOpen(false)} className={({ isActive }) => `block px-2 py-2 rounded-md ${isActive ? 'bg-white/10 text-primary' : 'text-white/80 hover:bg-white/5'}`}>
              {n.label}
            </NavLink>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="block text-center px-4 py-2 rounded-md bg-primary text-secondary font-medium">Get Started</Link>
        </div>
      )}
    </header>
  )
}
