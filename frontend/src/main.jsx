import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Press from './pages/Press.jsx'
import Impact from './pages/Impact.jsx'
import Sponsor from './pages/Sponsor.jsx'
import Ambassador from './pages/Ambassador.jsx'
import Waitlist from './pages/Waitlist.jsx'
import Demo from './pages/Demo.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
import NotFound from './pages/NotFound.jsx'

const router = createBrowserRouter([
  { path: '/', element: <App />, children: [
    { index: true, element: <Home /> },
    { path: 'press', element: <Press /> },
    { path: 'impact', element: <Impact /> },
    { path: 'sponsor', element: <Sponsor /> },
    { path: 'ambassador', element: <Ambassador /> },
    { path: 'waitlist', element: <Waitlist /> },
    { path: 'demo', element: <Demo /> },
    { path: 'privacy', element: <Privacy /> },
    { path: 'terms', element: <Terms /> },
    { path: '*', element: <NotFound /> },
  ]}
])

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
