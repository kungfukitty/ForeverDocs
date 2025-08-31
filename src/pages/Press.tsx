// src/pages/Press.tsx
import React from 'react'
import { Link } from 'react-router-dom'

export default function PressPage() {
  return (
    <main className="bg-gradient-to-b from-black via-zinc-950 to-black text-zinc-100">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold">Press & Media</h1>
          <p className="mt-3 text-zinc-300 text-lg">
            Media resources, press releases, and coverage of ForeverDocs.
          </p>
        </div>

        {/* Press Kit */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Press Kit</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
              <h3 className="font-semibold mb-3">Quick Facts</h3>
              <ul className="text-sm text-zinc-300 space-y-2">
                <li><strong>Founded:</strong> 2025</li>
                <li><strong>Mission:</strong> Protecting Black family legacies through secure digital document vaults</li>
                <li><strong>Technology:</strong> Blockchain-based verification, community-first distribution</li>
                <li><strong>Status:</strong> Pre-501(c)(3), seeking founding sponsors</li>
                <li><strong>Launch Markets:</strong> Atlanta, Nashville, Memphis</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
              <h3 className="font-semibold mb-3">Media Resources</h3>
              <ul className="text-sm text-zinc-300 space-y-2">
                <li>• <a href="#" className="text-amber-400 hover:text-amber-300">Logo Pack (SVG, PNG)</a></li>
                <li>• <a href="#" className="text-amber-400 hover:text-amber-300">Brand Guidelines (PDF)</a></li>
                <li>• <a href="#" className="text-amber-400 hover:text-amber-300">Executive Bios</a></li>
                <li>• <a href="#" className="text-amber-400 hover:text-amber-300">Demo Screenshots</a></li>
                <li>• <a href="#" className="text-amber-400 hover:text-amber-300">One-Page Fact Sheet</a></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Press Releases</h2>
          <div className="space-y-6">
            <article className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold mb-1">ForeverDocs Announces Public Demo Launch</h3>
                  <p className="text-sm text-zinc-400 mb-3">August 2025</p>
                  <p className="text-zinc-300 text-sm">
                    New nonprofit introduces blockchain-based digital vault system to help Black families 
                    protect essential documents and preserve generational wealth...
                  </p>
                </div>
                <span className="px-2 py-1 rounded bg-emerald-900/40 text-emerald-300 text-xs">NEW</span>
              </div>
            </article>
            
            <article className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 opacity-60">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold mb-1">ForeverDocs Secures Founding Community Partners</h3>
                  <p className="text-sm text-zinc-400 mb-3">September 2025 (Planned)</p>
                  <p className="text-zinc-300 text-sm">
                    Partnership announcements with churches, legal aid organizations, and community 
                    centers in pilot cities...
                  </p>
                </div>
                <span className="px-2 py-1 rounded bg-zinc-700 text-zinc-400 text-xs">PLANNED</span>
              </div>
            </article>
          </div>
        </section>

        {/* Media Coverage */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Media Coverage</h2>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-zinc-800 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-zinc-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Coming Soon</h3>
              <p className="text-zinc-400 text-sm">
                Media coverage will be featured here as ForeverDocs gains visibility and launches in pilot communities.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Media Contact</h2>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Press Inquiries</h3>
                <p className="text-zinc-300 text-sm mb-2">
                  <strong>Email:</strong> <a href="mailto:press@foreverdocs.org" className="text-amber-400 hover:text-amber-300">press@foreverdocs.org</a>
                </p>
                <p className="text-zinc-300 text-sm mb-2">
                  <strong>General:</strong> <a href="mailto:contact@foreverdocs.org" className="text-amber-400 hover:text-amber-300">contact@foreverdocs.org</a>
                </p>
                <p className="text-zinc-400 text-xs">
                  Response time: 24-48 hours for media inquiries
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Interview Availability</h3>
                <ul className="text-zinc-300 text-sm space-y-1">
                  <li>• Founder interviews available</li>
                  <li>• Community partner introductions</li>
                  <li>• Demo walkthroughs</li>
                  <li>• Technical deep-dives</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">Learn More</h2>
          <p className="text-zinc-300 mb-6">
            Interested in covering ForeverDocs or learning more about our mission?
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link 
              to="/demo" 
              className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-zinc-200 transition-colors"
            >
              Try the Demo
            </Link>
            <Link 
              to="/impact" 
              className="px-6 py-3 rounded-xl border border-zinc-700 text-zinc-200 hover:bg-zinc-900 transition-colors"
            >
              View Impact
            </Link>
            <a 
              href="mailto:press@foreverdocs.org" 
              className="px-6 py-3 rounded-xl border border-zinc-700 text-zinc-200 hover:bg-zinc-900 transition-colors"
            >
              Contact Press Team
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
