import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-12">
      <div className="container py-10 grid gap-6 md:grid-cols-3">
        <div>
          <div className="font-semibold mb-2">ForeverDocs</div>
          <p className="text-sm text-muted">Safeguarding family legacies with simple, secure tools.</p>
        </div>
        <div className="grid gap-2">
          <Link to="/waitlist" className="link">Waitlist</Link>
          <Link to="/ambassador" className="link">Ambassador</Link>
          <Link to="/sponsor" className="link">Sponsor</Link>
        </div>
        <div className="grid gap-2">
          <Link to="/privacy" className="link">Privacy</Link>
          <Link to="/terms" className="link">Terms</Link>
          <Link to="/press" className="link">Press</Link>
        </div>
      </div>
      <div className="text-center text-xs text-muted pb-8">© {new Date().getFullYear()} ForeverDocs</div>
    </footer>
  )
}
