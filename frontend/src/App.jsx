import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-ink">
      <Header />
      <main className="flex-1">
        <div className="container py-10">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}
