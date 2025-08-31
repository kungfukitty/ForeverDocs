import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <div className="rounded-2xl border border-zinc-800 p-8 bg-zinc-950/40">
        <h1 className="text-3xl font-bold">ForeverDocs MVP</h1>
        <p className="text-zinc-400 mt-2">
          A lightweight simulator showing the upload → code → crest → verify flow. No backend; all demo data.
        </p>
        <div className="mt-6">
          <Link to="/demo" className="inline-block px-4 py-2 rounded-xl bg-white text-black font-medium">
            Open the Demo
          </Link>
        </div>
      </div>
    </main>
  )
}
