import { useState, useEffect } from 'react';

export default function Home() {
  const [apiStatus, setApiStatus] = useState('Checking...');

  useEffect(() => {
    fetch('/api/health')
      .then(res => res.json())
      .then(data => setApiStatus('Connected'))
      .catch(() => setApiStatus('Disconnected'));
  }, []);

  return (
    <div className=\"container\">
      <header className=\"header\">
        <h1>ForeverDocs</h1>
        <p className=\"subtitle\">Your Forever Document Management Solution</p>
        <div className=\"api-status\">
          API Status: <span className={apiStatus === 'Connected' ? 'connected' : 'disconnected'}>
            {apiStatus}
          </span>
        </div>
      </header>

      <main className=\"main\">
        <section className=\"hero\">
          <h2>Secure, Reliable, Forever</h2>
          <p>
            Manage your documents with confidence. ForeverDocs provides a secure,
            reliable platform for all your document management needs.
          </p>
        </section>

        <section className=\"features\">
          <div className=\"feature-grid\">
            <div className=\"feature-card\">
              <h3>🔒 Secure Storage</h3>
              <p>Enterprise-grade security for your sensitive documents</p>
            </div>
            <div className=\"feature-card\">
              <h3>☁️ Cloud Access</h3>
              <p>Access your documents anywhere, anytime</p>
            </div>
            <div className=\"feature-card\">
              <h3>🔍 Smart Search</h3>
              <p>Find documents quickly with advanced search capabilities</p>
            </div>
            <div className=\"feature-card\">
              <h3>👥 Collaboration</h3>
              <p>Share and collaborate on documents with your team</p>
            </div>
          </div>
        </section>
      </main>

      <nav className=\"navigation\">
        <a href=\"/about\">About</a>
        <a href=\"/services\">Services</a>
        <a href=\"/contact\">Contact</a>
      </nav>
    </div>
  );
}
