import React from 'react'
import { Link } from 'react-router-dom'

export default function SiteFooter() {
  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 text-sm text-zinc-400 grid md:grid-cols-3 gap-6">
        <div>
          <div className="flex items-center gap-2 text-zinc-200 font-semibold">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-amber-400 to-amber-600" />
            ForeverDocs
          </div>
          <p className="mt-2">Community-rooted digital vault + public proof.</p>
        </div>
        <div>
          <div className="text-zinc-300 font-medium">Navigate</div>
          <ul className="mt-2 space-y-1">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/demo" className="hover:text-white">Demo</Link></li>
            <li><Link to="/waiting-list" className="hover:text-white">Waiting List</Link></li>
            <li><Link to="/sponsor" className="hover:text-white">Sponsor</Link></li>
            <li><Link to="/ambassador" className="hover:text-white">Ambassador</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-zinc-300 font-medium">Contact</div>
          <p className="mt-2">contact@foreverdocs.org</p>
        </div>
      </div>
      <div className="text-xs text-zinc-500 text-center pb-6">© {new Date().getFullYear()} ForeverDocs</div>
    </footer>
  )
}
