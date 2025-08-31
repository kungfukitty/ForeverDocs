import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({isActive}) =>
        `px-3 py-2 rounded-xl hover:bg-panel ${isActive ? 'text-gold' : ''}`
      }>
      {children}
    </NavLink>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="border-b border-white/10 bg-bg sticky top-0 z-50">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2 text-xl font-semibold">
          <span className="w-3 h-3 rounded-full bg-gold inline-block" />
          ForeverDocs
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          <NavItem to="/press">Press</NavItem>
          <NavItem to="/impact">Impact</NavItem>
          <NavItem to="/demo">Demo</NavItem>
          <NavItem to="/waitlist">Waitlist</NavItem>
          <NavItem to="/ambassador">Ambassador</NavItem>
          <NavItem to="/sponsor">Sponsor</NavItem>
        </nav>
        <button className="md:hidden px-3 py-2 rounded-xl border border-white/10" onClick={()=>setOpen(!open)} aria-label="Menu">
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="container py-3 flex flex-col gap-2">
            <NavItem to="/press">Press</NavItem>
            <NavItem to="/impact">Impact</NavItem>
            <NavItem to="/demo">Demo</NavItem>
            <NavItem to="/waitlist">Waitlist</NavItem>
            <NavItem to="/ambassador">Ambassador</NavItem>
            <NavItem to="/sponsor">Sponsor</NavItem>
          </div>
        </div>
      )}
    </header>
  )
}
