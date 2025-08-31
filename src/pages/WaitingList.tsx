import React, { useEffect, useState } from 'react';

const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSc0lPlU53FRQi5URf_PZbRzwYhPkv2UIgJNH2AAxS27xRX2aw/viewform?embedded=true';

export default function WaitingListPage() {
  const [loaded, setLoaded] = useState(false);
  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setTimedOut(true), 5000);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="min-h-[70vh] bg-black text-zinc-100">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Join the Waiting List</h1>
          <p className="text-zinc-400 mt-2">We will notify you when ForeverDocs launches in your area.</p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6">
          <div className="relative w-full overflow-hidden rounded-xl border border-zinc-700 bg-zinc-950">
            {/* IMPORTANT: pointer-events-none so the overlay never blocks the iframe */}
            {!loaded && (
              <div
                className="absolute inset-0 grid place-items-center text-sm text-zinc-400"
                style={{ pointerEvents: 'none' }}
              >
                <div className="animate-pulse">Loading form…</div>
              </div>
            )}

            <iframe
              src={FORM_URL}
              title="Waiting List Signup Form"
              className="w-full"
              style={{ height: 1400, border: 0, display: 'block', pointerEvents: 'auto' }}
              loading="lazy"
              sandbox="allow-forms allow-scripts allow-same-origin"
              allow="clipboard-read; clipboard-write"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => setLoaded(true)}
            />
          </div>

          {timedOut && !loaded && (
            <div className="mt-4 text-sm text-zinc-400 text-center">
              Having trouble loading the embedded form?{' '}
              <a
                href={FORM_URL.replace('?embedded=true', '')}
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-white"
              >
                Open it in a new tab
              </a>
              .
            </div>
          )}

          <div className="mt-4 text-sm text-zinc-500 text-center">
            Questions? Contact us at <span className="text-zinc-300">hello@foreverdocs.example</span>
          </div>
        </div>
      </div>
    </main>
  );
}
