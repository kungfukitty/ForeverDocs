// src/pages/Ambassador.tsx
import React, { useState } from 'react'
import { FormShell, Field, Input, Textarea, SubmitBar } from '../components/forms/FormShell'
import { isValidEmail, isValidName } from '../utils/validation'


// Shared email validation utility
const isValidEmail = (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

export default function AmbassadorPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [org, setOrg] = useState('')
  const [why, setWhy] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const valid = name.trim().length >= 2 && isValidEmail(email) && city.trim().length >= 2

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!valid) return
    // TODO: Replace with real submit (Formspree/Supabase/Airtable/etc.)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <FormShell title="Ambassador Program" subtitle="Help families in your community safeguard essential documents.">
        <div className="rounded-xl border border-emerald-700 bg-emerald-950/40 p-4">
          <div className="font-semibold">Thanks, {name.split(' ')[0]}!</div>
          <div className="text-sm text-zinc-300 mt-1">We will contact you at {email} with next steps.</div>
        </div>
      </FormShell>
    )
  }

  return (
    <FormShell title="Ambassador Program" subtitle="Help families in your community safeguard essential documents.">
      <form onSubmit={onSubmit} className="grid gap-4">
        <Field label="Full name *">
          <Input 
            value={name} 
            onChange={e => setName(e.target.value)} 
            placeholder="John Henry" 
            required
          />
        </Field>
        <Field label="Email *">
          <Input 
            type="email"
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            placeholder="you@example.com" 
            required
          />
        </Field>
        <Field label="City/Region *">
          <Input 
            value={city} 
            onChange={e => setCity(e.target.value)} 
            placeholder="Nashville, TN" 
            required
          />
        </Field>
        <Field label="Organization (optional)">
          <Input 
            value={org} 
            onChange={e => setOrg(e.target.value)} 
            placeholder="Neighborhood Coalition" 
          />
        </Field>
        <Field label="Why do you want to help?">
          <Textarea 
            value={why} 
            onChange={e => setWhy(e.target.value)} 
            rows={4} 
            placeholder="Share 1–3 sentences" 
          />
        </Field>
        <SubmitBar canSubmit={valid} cta="Apply" />
      </form>
    </FormShell>
  )
}
