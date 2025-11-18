import React from 'react'
import { Helmet } from 'react-helmet-async'
import Layout from '../components/Layout'
import SolutionsShowcase from '../components/SolutionsShowcase'

export default function Solutions() {
  return (
    <Layout>
      <Helmet>
        <title>Solutions – N1 AI</title>
        <meta name="description" content="Tailored automation solutions for real estate, businesses, and clinics." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold">Solutions</h1>
        <p className="mt-3 text-white/70 max-w-2xl">Three verticals with clear outcomes and measurable ROI.</p>
      </div>
      <SolutionsShowcase />
    </Layout>
  )
}
