// src/pages/Sponsor.tsx
import React, { useState } from 'react'
import { FormShell, Field, Input, Select, SubmitBar } from '../components/forms/FormShell'
import { isValidEmail, isValidName, isValidOrganization } from '../utils/validation'

type Budget = 'under5k' | '5to25' | '25to100' | '100plus'

// Shared email validation utility
const isValidEmail = (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

export default function SponsorPage() {
  const [org, setOrg] = useState('')
  const [contact, setContact] = useState('')
  const [email, setEmail] = useState('')
  const [budget, setBudget] = useState<Budget>('under5k')
  const [submitted, setSubmitted] = useState(false)

  const valid = org.trim().length >= 2 && contact.trim().length >= 2 && isValidEmail(email)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!valid) return
    // TODO: Replace with real submit (Formspree/Supabase/Airtable/etc.)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <FormShell title="Sponsor ForeverDocs" subtitle="Support community vaults, legal clinics, and local outreach.">
        <div className="rounded-xl border border-emerald-700 bg-emerald-950/40 p-4">
          <div className="font-semibold">Thanks, {contact.split(' ')[0]}!</div>
          <div className="text-sm text-zinc-300 mt-1">We will contact you at {email} about sponsorship options.</div>
        </div>
      </FormShell>
    )
  }

  return (
    <FormShell title="Sponsor ForeverDocs" subtitle="Support community vaults, legal clinics, and local outreach.">
      <form onSubmit={onSubmit} className="grid gap-4">
        <Field label="Organization *">
          <Input 
            value={org} 
            onChange={e => setOrg(e.target.value)} 
            placeholder="Acme Foundation" 
            required
          />
        </Field>
        <Field label="Primary contact *">
          <Input 
            value={contact} 
            onChange={e => setContact(e.target.value)} 
            placeholder="Jane Doe" 
            required
          />
        </Field>
        <Field label="Email *">
          <Input 
            type="email"
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            placeholder="you@example.org" 
            required
          />
        </Field>
        <Field label="Estimated budget">
          <Select value={budget} onChange={e => setBudget(e.target.value as Budget)}>
            <option value="under5k">Under $5k</option>
            <option value="5to25">$5k–$25k</option>
            <option value="25to100">$25k–$100k</option>
            <option value="100plus">$100k+</option>
          </Select>
        </Field>
        <SubmitBar canSubmit={valid} cta="Submit" />
      </form>
    </FormShell>
  )
}
