import React, { useState } from 'react'

export default function AmbassadorPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [org, setOrg] = useState('')
  const [why, setWhy] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const valid = name.trim().length >= 2 && /.+@.+\..+/.test(email) && city.trim().length >= 2

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!valid) return
    setSubmitted(true)
  }

  return (
    <main className="min-h-[70vh] bg-black text-zinc-100">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold">Ambassador Program</h1>
        <p className="text-zinc-400 mt-2">Help families in your community safeguard essential documents.</p>

        {submitted ? (
          <div className="mt-6 rounded-xl border border-emerald-700 bg-emerald-950/40 p-4">
            <div className="font-semibold">Thanks, {name.split(' ')[0]}!</div>
            <div className="text-sm text-zinc-300 mt-1">We will contact you at {email} with next steps.</div>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-6 grid gap-4">
            <label className="block">
              <span className="text-sm text-zinc-400">Full name</span>
              <input value={name} onChange={e=>setName(e.target.value)} className="mt-1 w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 outline-none focus:border-zinc-500" placeholder="John Henry" />
            </label>
            <label className="block">
              <span className="text-sm text-zinc-400">Email</span>
              <input value={email} onChange={e=>setEmail(e.target.value)} className="mt-1 w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 outline-none focus:border-zinc-500" placeholder="you@example.com" />
            </label>
            <label className="block">
              <span className="text-sm text-zinc-400">City/Region</span>
              <input value={city} onChange={e=>setCity(e.target.value)} className="mt-1 w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 outline-none focus:border-zinc-500" placeholder="Nashville, TN" />
            </label>
            <label className="block">
              <span className="text-sm text-zinc-400">Organization (optional)</span>
              <input value={org} onChange={e=>setOrg(e.target.value)} className="mt-1 w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 outline-none focus:border-zinc-500" placeholder="Neighborhood Coalition" />
            </label>
            <label className="block">
              <span className="text-sm text-zinc-400">Why do you want to help?</span>
              <textarea value={why} onChange={e=>setWhy(e.target.value)} rows={4} className="mt-1 w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 outline-none focus:border-zinc-500" placeholder="Share 1–3 sentences" />
            </label>
            <div>
              <button disabled={!valid} className={"px-4 py-2 rounded-xl font-medium " + (valid ? "bg-white text-black hover:bg-zinc-200" : "bg-zinc-800 text-zinc-500 cursor-not-allowed")}>Apply</button>
            </div>
          </form>
        )}
      </div>
    </main>
  )
}
