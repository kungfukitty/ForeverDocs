// src/pages/Impact.tsx
import React from 'react'
import { Link } from 'react-router-dom'

export default function ImpactPage() {
  return (
    <main className="bg-gradient-to-b from-black via-zinc-950 to-black text-zinc-100">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold">Impact & Vision</h1>
          <p className="mt-3 text-zinc-300 text-lg">
            Measuring real change in community document security and generational wealth preservation.
          </p>
        </div>

        {/* Our Mission */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-zinc-300 mb-4">
                ForeverDocs exists to stop the systematic erosion of Black family wealth through lost or 
                misplaced essential documents. We're building a community-rooted digital infrastructure 
                that families can trust and own.
              </p>
              <p className="text-zinc-300">
                Every family that secures their documents with us represents a potential generational 
                wealth transfer preserved, a legacy protected, and a community strengthened.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
              <h3 className="font-semibold mb-3">By the Numbers</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Heirs' Property at Risk</span>
                  <span className="font-mono">1.6M+ acres</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Estimated Value</span>
                  <span className="font-mono">$28B+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Families Affected</span>
                  <span className="font-mono">500K+</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Current Impact */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Current Impact (Pre-Launch)</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 text-center">
              <div className="text-3xl font-bold text-amber-400">0</div>
              <div className="text-sm text-zinc-400 mt-1">Families Protected</div>
              <div className="text-xs text-zinc-500 mt-2">Demo phase active</div>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 text-center">
              <div className="text-3xl font-bold text-amber-400">12</div>
              <div className="text-sm text-zinc-400 mt-1">Community Partners</div>
              <div className="text-xs text-zinc-500 mt-2">Churches & legal aid</div>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 text-center">
              <div className="text-3xl font-bold text-amber-400">3</div>
              <div className="text-sm text-zinc-400 mt-1">Cities Ready</div>
              <div className="text-xs text-zinc-500 mt-2">Atlanta, Nashville, Chattanooga</div>
            </div>
          </div>
        </section>

        {/* Goals */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">2025-2027 Goals</h2>
          <div className="space-y-6">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
              <h3 className="font-semibold mb-2">Year 1: Foundation</h3>
              <ul className="text-zinc-300 space-y-1 text-sm">
                <li>• Launch in 3 pilot cities with 50 community partners</li>
                <li>• Protect 1,000 families with secure document vaults</li>
                <li>• Establish 501(c)(3) status and governance structure</li>
                <li>• Deploy blockchain-based verification system</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
              <h3 className="font-semibold mb-2">Year 2-3: Scale</h3>
              <ul className="text-zinc-300 space-y-1 text-sm">
                <li>• Expand to 15 cities across the American South</li>
                <li>• Protect 10,000+ families annually</li>
                <li>• Launch legal clinic partnerships for will preparation</li>
                <li>• Implement heir designation and succession planning tools</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Success Stories</h2>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
            <p className="text-zinc-300 text-center text-lg italic">
              "When we launch, this section will feature real stories from families who've 
              used ForeverDocs to protect their legacy and navigate difficult times with 
              confidence."
            </p>
          </div>
        </section>

        {/* Get Involved */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">Get Involved</h2>
          <p className="text-zinc-300 mb-6">
            Ready to help us protect generational wealth in your community?
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link 
              to="/waiting-list" 
              className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-zinc-200 transition-colors"
            >
              Join the Waitlist
            </Link>
            <Link 
              to="/sponsor" 
              className="px-6 py-3 rounded-xl border border-zinc-700 text-zinc-200 hover:bg-zinc-900 transition-colors"
            >
              Become a Sponsor
            </Link>
            <Link 
              to="/ambassador" 
              className="px-6 py-3 rounded-xl border border-zinc-700 text-zinc-200 hover:bg-zinc-900 transition-colors"
            >
              Apply as Ambassador
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
