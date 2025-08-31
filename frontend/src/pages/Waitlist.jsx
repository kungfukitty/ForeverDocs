import React from 'react'

export default function Waitlist() {
  return (
    <div className="grid gap-6">
      <div className="card">
        <h1 className="text-3xl font-bold">Waitlist</h1>
        <p className="text-muted mt-2">Use the form below.</p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black">
          <div className="w-full max-w-full">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe39Qi4wSf1wsGYmPsw_ewWGX6aYGORt7Wp8QQPTVNV4X317Q/viewform?embedded=true" width="640" height="1120" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
