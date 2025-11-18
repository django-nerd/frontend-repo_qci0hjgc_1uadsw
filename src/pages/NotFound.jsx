import React from 'react'
import Layout from '../components/Layout'

export default function NotFound() {
  return (
    <Layout>
      <section className="max-w-3xl mx-auto px-6 py-28 text-center">
        <h1 className="text-6xl font-extrabold">404</h1>
        <p className="mt-3 text-white/70">We couldn’t find that page.</p>
        <a href="/" className="inline-block mt-6 px-6 py-3 rounded-md bg-primary text-secondary font-medium">Back home</a>
      </section>
    </Layout>
  )
}
