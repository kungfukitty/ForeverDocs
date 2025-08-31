import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import ForeverDocsDemo from './components/ForeverDocsDemo'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <header className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600" />
          <span className="font-semibold">ForeverDocs</span>
        </div>
        <nav className="text-sm text-zinc-300 flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/demo">Demo</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<ForeverDocsDemo />} />
      </Routes>
    </div>
  )
}
