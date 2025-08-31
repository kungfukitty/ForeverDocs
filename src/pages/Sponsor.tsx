import React, { useState } from 'react'

export default function SponsorPage() {
  const [org, setOrg] = useState('')
  const [contact, setContact] = useState('')
  const [email, setEmail] = useState('')
  const [budget, setBudget] = useState<'under5k'|'5to25'|'25to100'|'100plus'>('under5k')
  const [submitted, setSubmitted] = useState(false)

  const valid = org.trim().length >= 2 && contact.trim().length >= 2 && /.+@.+\..+/.test(email)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!valid) return
    setSubmitted(true)
  }

  return (
    <main className="min-h-[70vh] bg-black text-zinc-100">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold">Sponsor ForeverDocs</h1>
        <p className="text-zinc-400 mt-2">Support community vaults, legal clinics, and local outreach.</p>

        {submitted ? (
          <div className="mt-6 rounded-xl border border-emerald-700 bg-emerald-950/40 p-4">
            <div className="font-semibold">Thanks, {contact.split(' ')[0]}!</div>
            <div className="text-sm text-zinc-300 mt-1">We will contact you at {email} about sponsorship options.</div>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-6 grid gap-4">
            <label className="block">
              <span className="text-sm text-zinc-400">Organization</span>
              <input value={org} onChange={e=>setOrg(e.target.value)} className="mt-1 w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 outline-none focus:border-zinc-500" placeholder="Acme Foundation" />
            </label>
            <label className="block">
              <span className="text-sm text-zinc-400">Primary contact</span>
              <input value={contact} onChange={e=>setContact(e.target.value)} className="mt-1 w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 outline-none focus:border-zinc-500" placeholder="Jane Doe" />
            </label>
            <label className="block">
              <span className="text-sm text-zinc-400">Email</span>
              <input value={email} onChange={e=>setEmail(e.target.value)} className="mt-1 w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 outline-none focus:border-zinc-500" placeholder="you@example.org" />
            </label>
            <label className="block">
              <span className="text-sm text-zinc-400">Estimated budget</span>
              <select value={budget} onChange={e=>setBudget(e.target.value as any)} className="mt-1 w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 outline-none focus:border-zinc-500">
                <option value="under5k">Under $5k</option>
                <option value="5to25">$5k–$25k</option>
                <option value="25to100">$25k–$100k</option>
                <option value="100plus">$100k+</option>
              </select>
            </label>
            <div>
              <button disabled={!valid} className={"px-4 py-2 rounded-xl font-medium " + (valid ? "bg-white text-black hover:bg-zinc-200" : "bg-zinc-800 text-zinc-500 cursor-not-allowed")}>Submit</button>
            </div>
          </form>
        )}
      </div>
    </main>
  )
}
