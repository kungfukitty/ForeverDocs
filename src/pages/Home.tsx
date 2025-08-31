import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-black via-zinc-950 to-black text-zinc-100">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-10">
       // Replace the placeholder with this mini crest card
<div className="rounded-2xl border border-zinc-800 p-4">
  <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
    {/* crest header */}
    <div className="flex items-center gap-4">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600" />
      <div>
        <div className="text-xl font-bold">Johnson Family Digital Crest</div>
        <div className="text-zinc-400 text-sm">DEED • TN/Hamilton</div>
      </div>
    </div>

    {/* crest body */}
    <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
      <div>
        <div className="text-zinc-400">Verification Code</div>
        <div className="font-mono">JF-2025-7XK</div>
      </div>
      <div>
        <div className="text-zinc-400">Registered</div>
        <div>Aug 31, 2025, 2:15 PM</div>
      </div>
      <div className="col-span-2">
        <div className="text-zinc-400 mb-1">Public Notes</div>
        <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-zinc-300">
          Prepared with ForeverDocs pilot, 2025
        </div>
      </div>
    </div>

    {/* tiny QR stub + explain */}
    <div className="mt-4 grid grid-cols-2 gap-4">
      <div className="flex items-center justify-center aspect-square rounded-xl border border-zinc-800 bg-zinc-950">
        <div className="text-[10px] text-zinc-500 text-center px-3">
          QR (demo)
          <div className="mt-1 font-mono break-all">
            {"{" + "\"v\":1,\"vc\":\"JF-2025-7XK\",\"t\":\"DEED\",\"j\":\"TN/Hamilton\"" + "}"}
          </div>
        </div>
      </div>
      <div className="text-xs text-zinc-400">
        Scan to resolve <span className="font-mono">/verify/JF-2025-7XK</span>. In production, the QR payload is minimal; the server renders details.
      </div>
    </div>
  </div>
</div>
         
      </section>

      {/* PROBLEM */}
      <section className="max-w-5xl mx-auto px-6 pb-8">
        <h2 className="text-2xl font-bold">The Problem: The Paper Cut That Bleeds for Generations</h2>
        <p className="mt-3 text-zinc-300">
          In the American South, there are over 1.6 million acres of land known as heirs' property. It is land
          owned by Black families, often passed down since Reconstruction, but without a clear, legal title.
          When the owner dies, if just one of the dozens of descendants cannot be found or is pressured to sell,
          the entire property can be forcibly sold at a fraction of its value.
        </p>
        <p className="mt-3 text-zinc-300">
          This is not a rare loophole; it is a primary driver of involuntary Black land loss, costing families billions
          in generational wealth. The root cause? A missing will. A misplaced deed. A system that preys on
          disorganized paper records. This is how wealth is systematically erased&mdash;not with a bang, but with a
          lost document.
        </p>
      </section>

      {/* SOLUTION */}
      <section className="max-w-5xl mx-auto px-6 pb-8">
        <h2 className="text-2xl font-bold">The Solution: A Digital Safe Deposit Box, Built on Community Trust</h2>
        <p className="mt-3 text-zinc-300">
          ForeverDocs is a free digital vault designed to stop this bleeding. We give families a simple, secure
          place to store their most important documents&mdash;the will, the deed, the insurance policy.
        </p>
        <p className="mt-3 text-zinc-300">
          But technology alone is not enough. Trust is everything. That is why our distribution is not an app store
          link; it is a QR code in the hands of a pastor, a barber, or a funeral home director. We go where our
          community already is, providing a tool that is as easy to use as taking a picture. You can designate
          your heirs with a tap, ensuring the right people get the right information at the right time.
        </p>
        <p className="mt-3 text-zinc-300">
          This is not just about storing files; it is about creating a clear, simple plan to protect a family's legacy.
        </p>
      </section>

      {/* WHY BLOCKCHAIN */}
      <section className="max-w-5xl mx-auto px-6 pb-8">
        <h2 className="text-2xl font-bold">Why Blockchain? The Unbreakable Promise.</h2>
        <p className="mt-3 text-zinc-300">
          So, how do we make this promise permanent and trustworthy? How do we build a system that our
          community can own, and that no corporation or entity can ever take away? That is the only reason
          we use the blockchain.
        </p>
      </section>

      {/* DIGITAL FAMILY CREST */}
      <section className="max-w-5xl mx-auto px-6 pb-8">
        <h2 className="text-2xl font-bold">The Digital Family Crest: A Permanent, Public Proof.</h2>
        <p className="mt-3 text-zinc-300">
          When a family secures their vault, they can mint a Digital Family Crest on the blockchain. Think of it
          as a digital flag planted on a specific date, creating a public, tamper-proof timestamp. It says to the
          world, "On this day, the Carter family secured their legacy." It contains no private data, but it serves
          as an unforgettable, un-erasable proof of preparedness that can be a powerful tool against any
          future claim or dispute.
        </p>
      </section>

      {/* TRANSPARENT FUNDING */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold">Transparent Funding: An "Each One, Fund One" Model.</h2>
        <p className="mt-3 text-zinc-300">
          Our nonprofit runs on a revolutionary funding model. A sponsor&mdash;be it a foundation, a church, or a
          Web3 protocol&mdash;does not just donate to us. They can publicly "Sponsor 1,000 Family Crests in
          Atlanta." Because it happens on a public blockchain, everyone can see the funds were used to help
          1,000 specific families get protected. It is radical transparency. It keeps us accountable to the
          community we serve, not just to our donors.
        </p>

        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <Link to="/press" className="px-4 py-2 rounded-xl border border-zinc-700 text-zinc-200 hover:bg-zinc-900">Press</Link>
          <Link to="/impact" className="px-4 py-2 rounded-xl border border-zinc-700 text-zinc-200 hover:bg-zinc-900">Impact</Link>
          <Link to="/sponsor" className="px-4 py-2 rounded-xl border border-zinc-700 text-zinc-200 hover:bg-zinc-900">Sponsor</Link>
          <Link to="/ambassador" className="px-4 py-2 rounded-xl border border-zinc-700 text-zinc-200 hover:bg-zinc-900">Ambassador</Link>
          <Link to="/waiting-list" className="px-4 py-2 rounded-xl bg-white text-black font-medium hover:bg-zinc-200">
            Waitlist <span className="ml-1 text-xs text-zinc-700">(For Parents / Students / Educators / Other)</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
