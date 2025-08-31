import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function SiteHeader() {
  const base = 'px-3 py-2 rounded-lg text-sm text-zinc-300 hover:bg-zinc-900'
  const active = ({ isActive }: { isActive: boolean }) =>
    isActive ? base + ' bg-zinc-900 text-white' : base

  return (
    <header className="bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60 border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600" />
          <span className="font-semibold text-zinc-100">ForeverDocs</span>
        </Link>
        <nav className="flex items-center gap-1" aria-label="Primary">
          <NavLink to="/" className={active} end>Home</NavLink>
          <NavLink to="/demo" className={active}>Demo</NavLink>
          <NavLink to="/waiting-list" className={active}>Waiting List</NavLink>
          <NavLink to="/sponsor" className={active}>Sponsor</NavLink>
          <NavLink to="/ambassador" className={active}>Ambassador</NavLink>
        </nav>
      </div>
    </header>
  )
}
