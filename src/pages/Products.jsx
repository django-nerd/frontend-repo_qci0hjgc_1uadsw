import React from 'react'
import { Helmet } from 'react-helmet-async'
import Layout from '../components/Layout'
import ProductCards from '../components/ProductCards'

export default function Products() {
  return (
    <Layout>
      <Helmet>
        <title>Products – N1 AI</title>
        <meta name="description" content="Meet Talk AI and Dottore AI – SaaS assistants for conversations and clinics." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold">Products</h1>
        <p className="mt-3 text-white/70 max-w-2xl">Purpose-built tools that deploy fast and deliver value.</p>
      </div>
      <ProductCards />
    </Layout>
  )
}
