import React, { useState } from 'react'

export default function WaitingListPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [zip, setZip] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const valid = name.trim().length >= 2 && /.+@.+\..+/.test(email) && /^\d{5}(-\d{4})?$/.test(zip || '00000') || (name.trim().length >= 2 && /.+@.+\..+/.test(email) && zip.trim() === '')

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!valid) return
    setSubmitted(true)
  }

  return (
    <main className="min-h-[70vh] bg-black text-zinc-100">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold">Join the Waiting List</h1>
        <p className="text-zinc-400 mt-2">We will notify you when ForeverDocs launches in your area.</p>

        {submitted ? (
          <div className="mt-6 rounded-xl border border-emerald-700 bg-emerald-950/40 p-4">
            <div className="font-semibold">Thanks, {name.split(' ')[0]}!</div>
            <div className="text-sm text-zinc-300 mt-1">We sent a confirmation to {email}. You are on the list.</div>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-6 grid gap-4">
            <label className="block">
              <span className="text-sm text-zinc-400">Full name</span>
              <input value={name} onChange={e=>setName(e.target.value)} className="mt-1 w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 outline-none focus:border-zinc-500" placeholder="Ada Lovelace" />
            </label>
            <label className="block">
              <span className="text-sm text-zinc-400">Email</span>
              <input value={email} onChange={e=>setEmail(e.target.value)} className="mt-1 w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 outline-none focus:border-zinc-500" placeholder="you@example.com" />
            </label>
            <label className="block">
              <span className="text-sm text-zinc-400">ZIP (optional)</span>
              <input value={zip} onChange={e=>setZip(e.target.value)} className="mt-1 w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 outline-none focus:border-zinc-500" placeholder="37208" />
            </label>
            <div>
              <button disabled={!valid} className={"px-4 py-2 rounded-xl font-medium " + (valid ? "bg-white text-black hover:bg-zinc-200" : "bg-zinc-800 text-zinc-500 cursor-not-allowed")}>Join List</button>
            </div>
          </form>
        )}
      </div>
    </main>
  )
}
