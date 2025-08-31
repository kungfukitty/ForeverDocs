import React, { useMemo, useState } from 'react'
import { FormShell, Field, Input, Select, SubmitBar, Textarea } from '../components/forms/FormShell'

type Role = 'Parent' | 'Student' | 'Educator' | 'Other'

export default function WaitingListPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState<Role>('Parent')
  const [heard, setHeard] = useState('')
  const [referral, setReferral] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const validEmail = useMemo(() => /.+@.+\..+/.test(email), [email])
  const canSubmit = name.trim().length >= 2 && validEmail

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!canSubmit) return
    // TODO: Replace with real submit (Formspree/Supabase/Airtable/etc.)
    // Example: fetch('/api/waitlist', { method:'POST', body: JSON.stringify({ name, email, role, heard, referral }) })
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <FormShell title="Join the Waiting List" subtitle="We will notify you when ForeverDocs launches in your area.">
        <div className="rounded-xl border border-emerald-700 bg-emerald-950/40 p-4">
          <div className="font-semibold">Thanks, {name.split(' ')[0]}!</div>
          <div className="text-sm text-zinc-300 mt-1">We sent a confirmation to {email}. You are on the list.</div>
        </div>
        <p className="text-xs text-zinc-500 mt-4">(For Parents / Students / Educators / Other)</p>
      </FormShell>
    )
  }

  return (
    <FormShell title="Join the Waiting List" subtitle="We will notify you when ForeverDocs launches in your area.">
      <form onSubmit={onSubmit} className="grid gap-4">
        <Field label="Full name">
          <Input value={name} onChange={e => setName(e.target.value)} placeholder="Ada Lovelace" />
        </Field>
        <Field label="Email *">
          <Input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="contact@foreverdocs.org" required />
        </Field>
        <div className="grid md:grid-cols-2 gap-4">
          <Field label="Role">
            <Select value={role} onChange={e => setRole(e.target.value as Role)}>
              <option>Parent</option>
              <option>Student</option>
              <option>Educator</option>
              <option>Other</option>
            </Select>
          </Field>
          <Field label="Referral Code (optional)">
            <Input value={referral} onChange={e => setReferral(e.target.value)} placeholder="e.g., CREST100" />
          </Field>
        </div>
        <Field label="How did you hear about us?">
          <Textarea rows={3} value={heard} onChange={e => setHeard(e.target.value)} placeholder="Pastor, school counselor, clinic, social media…" />
        </Field>
        <SubmitBar canSubmit={canSubmit} cta="Join List" />
      </form>
      <p className="text-xs text-zinc-500 mt-4">(For Parents / Students / Educators / Other)</p>
    </FormShell>
  )
}
