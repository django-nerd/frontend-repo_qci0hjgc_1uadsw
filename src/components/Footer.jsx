import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-6 md:grid-cols-3 items-center text-sm text-white/60">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-primary to-accent" />
            <span className="font-semibold text-white">N1 AI</span>
          </div>
          <p>Automation, chatbots, and AI integrations for growth-focused teams.</p>
        </div>
        <div className="md:text-center">
          <p>© {new Date().getFullYear()} N1 AI. All rights reserved.</p>
        </div>
        <div className="md:text-right space-x-4">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  )
}
