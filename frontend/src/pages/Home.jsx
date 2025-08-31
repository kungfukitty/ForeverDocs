import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="grid gap-6">
      <section className="card">
        <h1 className="text-4xl font-bold">Protect What Matters Most</h1>
        <p className="mt-3 text-muted max-w-3xl">
          Across the South, families lose property and wealth because vital documents get lost or never filed.
          ForeverDocs helps you organize and preserve wills, deeds, and insurance—plus a public, tamper-evident
          Crest on the blockchain so your preparedness is timestamped.
        </p>
        <div className="mt-6 flex gap-3">
          <Link to="/waitlist" className="btn btn-primary">Join the Waitlist</Link>
          <Link to="/demo" className="btn border border-white/20">See the Crest Demo</Link>
        </div>
      </section>
      <section className="grid md:grid-cols-3 gap-6">
        <div className="card"><h3 className="text-xl font-semibold">Simple</h3><p className="text-muted mt-2">No apps to learn. Use our forms and checklists to get organized fast.</p></div>
        <div className="card"><h3 className="text-xl font-semibold">Secure</h3><p className="text-muted mt-2">Your private docs stay private. The public Crest never includes sensitive data.</p></div>
        <div className="card"><h3 className="text-xl font-semibold">Community</h3><p className="text-muted mt-2">Partnering with churches, barbershops, and neighborhood hubs for access.</p></div>
      </section>
    </div>
  )
}
