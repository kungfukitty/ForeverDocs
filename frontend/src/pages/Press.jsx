import React from 'react'

export default function Press() {
  return (
    <div className="grid gap-6">
      <div className="card">
        <h2 className="text-2xl font-bold">ForeverDocs Tennessee Pilot + Crest Demo</h2>
        <p className="text-muted mt-2">
          We’re launching a pilot to help families safeguard wills, deeds, and insurance—and mint a public
          <strong> Digital Family Crest</strong> (no private data) as a tamper-evident proof of preparedness.
        </p>
        <ul className="list-disc pl-5 mt-3 text-muted">
          <li><a className="link" href="/demo">See the testnet Crest demo</a></li>
          <li><a className="link" href="/waitlist">Join the waitlist</a></li>
        </ul>
      </div>
    </div>
  )
}
