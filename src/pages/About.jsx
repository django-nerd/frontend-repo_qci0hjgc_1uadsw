import React from 'react'
import { Helmet } from 'react-helmet-async'
import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout>
      <Helmet>
        <title>About – N1 AI</title>
        <meta name="description" content="We are builders at the intersection of product and AI engineering." />
      </Helmet>
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold">About N1 AI</h1>
        <div className="mt-6 grid md:grid-cols-2 gap-10 text-white/80">
          <div>
            <h3 className="text-xl font-semibold text-white">Brand story</h3>
            <p className="mt-2">Founded to bridge the gap between strategy and execution, N1 AI brings automation to ambitious teams.</p>
            <h3 className="mt-8 text-xl font-semibold text-white">Mission</h3>
            <p className="mt-2">Ship reliable systems that save time, reduce cost, and elevate customer experience.</p>
            <h3 className="mt-8 text-xl font-semibold text-white">Approach</h3>
            <p className="mt-2">Discovery-led, sprint-executed, ROI-measured. We build what matters and iterate.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">Founder</h3>
            <p className="mt-2">Veteran full-stack engineer and product lead with a track record of automation wins across SMBs and agencies.</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
