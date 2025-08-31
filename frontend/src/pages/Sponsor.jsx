import React from 'react'

export default function Sponsor() {
  return (
    <div className="grid gap-6">
      <div className="card">
        <h1 className="text-3xl font-bold">Sponsor</h1>
        <p className="text-muted mt-2">Use the form below.</p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black">
          <div className="w-full max-w-full">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc0lPlU53FRQi5URf_PZbRzwYhPkv2UIgJNH2AAxS27xRX2aw/viewform?embedded=true" width="640" height="1271" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
