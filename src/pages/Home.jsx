import React from 'react'
import { Helmet } from 'react-helmet-async'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import FeatureGrid from '../components/FeatureGrid'
import HowItWorksSection from '../components/HowItWorksSection'
import SolutionsShowcase from '../components/SolutionsShowcase'
import ProductCards from '../components/ProductCards'
import StatsSection from '../components/StatsSection'
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <title>N1 AI – Automation, Chatbots, Web Apps</title>
        <meta name="description" content="N1 AI builds automation systems, AI chatbots, and custom web apps for agencies and growth teams." />
        <meta property="og:title" content="N1 AI" />
        <meta property="og:description" content="Automation, chatbots, and web apps that scale your business." />
      </Helmet>
      <HeroSection />
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-white/70 text-lg mt-10">We combine product thinking with engineering execution to design automation systems that scale.</p>
      </div>
      <FeatureGrid />
      <StatsSection />
      <HowItWorksSection />
      <SolutionsShowcase />
      <ProductCards />
      <Testimonials />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold">Ready to automate?</h3>
          <p className="text-white/70 mt-2">Book a quick discovery call and get a tailored plan.</p>
          <a href="/contact" className="inline-block mt-6 px-6 py-3 rounded-md bg-primary text-secondary font-medium hover:shadow-[0_10px_40px_rgba(31,182,255,0.5)] transition-transform hover:-translate-y-0.5">Get started</a>
        </div>
      </section>
    </Layout>
  )
}
