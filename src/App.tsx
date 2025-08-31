import React from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import ForeverDocsDemo from './components/ForeverDocsDemo'

export default function App() {
  const location = useLocation()
  
  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <header className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600" />
          <span className="font-semibold">ForeverDocs</span>
        </div>
        <nav className="text-sm text-zinc-300 flex gap-4">
          <Link 
            to="/" 
            className={`hover:text-white transition-colors ${
              location.pathname === '/' ? 'text-amber-400' : ''
            }`}
          >
            Home
          </Link>
          <Link 
            to="/demo" 
            className={`hover:text-white transition-colors ${
              location.pathname === '/demo' ? 'text-amber-400' : ''
            }`}
          >
            Demo
          </Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<ForeverDocsDemo />} />
        <Route path="*" element={
          <main className="max-w-5xl mx-auto px-6 py-12">
            <div className="rounded-2xl border border-zinc-800 p-8 bg-zinc-950/40">
              <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
              <p className="text-zinc-400 mt-2">
                The page you're looking for doesn't exist.
              </p>
              <div className="mt-6">
                <Link to="/" className="inline-block px-4 py-2 rounded-xl bg-white text-black font-medium">
                  Go Home
                </Link>
              </div>
            </div>
          </main>
        } />
      </Routes>
    </div>
  )
}
