// src/App.tsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ForeverDocsDemo from './components/ForeverDocsDemo'
import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'
import WaitingListPage from './pages/WaitingList'
import SponsorPage from './pages/Sponsor'
import AmbassadorPage from './pages/Ambassador'
import ImpactPage from './pages/Impact'
import PressPage from './pages/Press'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col">
      <SiteHeader />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<ForeverDocsDemo />} />
          <Route path="/waiting-list" element={<WaitingListPage />} />
          <Route path="/sponsor" element={<SponsorPage />} />
          <Route path="/ambassador" element={<AmbassadorPage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/press" element={<PressPage />} />
        </Routes>
      </div>
      <SiteFooter />
    </div>
  )
}
