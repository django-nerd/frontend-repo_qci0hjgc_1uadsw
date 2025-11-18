import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-secondary text-white">
      <Navbar scrolled={scrolled} />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  )
}
