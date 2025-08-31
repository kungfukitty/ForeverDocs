import React from 'react'

export default function WaitingListPage() {
  return (
    <main className="min-h-[70vh] bg-black text-zinc-100">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Join the Waiting List</h1>
          <p className="text-zinc-400 mt-2">We will notify you when ForeverDocs launches in your area.</p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6">
          <div className="w-full overflow-hidden rounded-xl border border-zinc-700 bg-zinc-950">
            <div className="w-full aspect-[4/8] relative">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSc0lPlU53FRQi5URf_PZbRzwYhPkv2UIgJNH2AAxS27xRX2aw/viewform?embedded=true"
                className="absolute inset-0 w-full h-full border-0"
                title="Waiting List Signup Form"
                loading="lazy"
              >
                Loading waiting list form...
              </iframe>
            </div>
          </div>
          
          <div className="mt-4 text-sm text-zinc-500 text-center">
            Having trouble with the form? Contact us directly at hello@foreverdocs.example
          </div>
        </div>
      </div>
    </main>
  )
}
