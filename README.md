# ForeverDocs

A modern document management platform built with Next.js and Express.

## Structure
- `frontend/` - Next.js React application
- `backend/` - Express.js API server

## Development

### Frontend (Next.js)
```bash
cd frontend
npm install
npm run dev
```

### Backend (Express)
```bash
cd backend
npm install
npm run dev
```

## Deployment

### Vercel (Frontend)
Deploy from root directory. Vercel will use the configuration in `vercel.json`.

### Render (Backend)
- Build Command: `cd backend && npm install`
- Start Command: `cd backend && npm start`

---

# FRONTEND FILES

## frontend/pages/index.js
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
    <div className="container">
      <header className="header">
        <h1>ForeverDocs</h1>
        <p className="subtitle">Your Forever Document Management Solution</p>
        <div className="api-status">
          API Status: <span className={apiStatus === 'Connected' ? 'connected' : 'disconnected'}>
            {apiStatus}
          </span>
        </div>
      </header>

      <main className="main">
        <section className="hero">
          <h2>Secure, Reliable, Forever</h2>
          <p>
            Manage your documents with confidence. ForeverDocs provides a secure,
            reliable platform for all your document management needs.
          </p>
        </section>

        <section className="features">
          <div className="feature-grid">
            <div className="feature-card">
              <h3>🔒 Secure Storage</h3>
              <p>Enterprise-grade security for your sensitive documents</p>
            </div>
            <div className="feature-card">
              <h3>☁️ Cloud Access</h3>
              <p>Access your documents anywhere, anytime</p>
            </div>
            <div className="feature-card">
              <h3>🔍 Smart Search</h3>
              <p>Find documents quickly with advanced search capabilities</p>
            </div>
            <div className="feature-card">
              <h3>👥 Collaboration</h3>
              <p>Share and collaborate on documents with your team</p>
            </div>
          </div>
        </section>
      </main>

      <nav className="navigation">
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
  );
}

## frontend/pages/about.js
export default function About() {
  return (
    <div className="container">
      <header className="header">
        <h1>About ForeverDocs</h1>
      </header>

      <main className="main">
        <section className="content">
          <h2>Our Mission</h2>
          <p>
            ForeverDocs was created to solve the growing challenge of document management
            in the digital age. We believe that your important documents should be accessible,
            secure, and preserved for the long term.
          </p>

          <h2>Our Story</h2>
          <p>
            Founded in 2024, ForeverDocs combines cutting-edge technology with user-friendly
            design to create the ultimate document management platform. Our team of experts
            has years of experience in cloud storage, security, and user experience design.
          </p>

          <h2>Why Choose ForeverDocs?</h2>
          <ul>
            <li><strong>Reliability:</strong> 99.9% uptime guarantee</li>
            <li><strong>Security:</strong> End-to-end encryption</li>
            <li><strong>Scalability:</strong> Grows with your needs</li>
            <li><strong>Support:</strong> 24/7 customer assistance</li>
          </ul>
        </section>
      </main>

      <nav className="navigation">
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
  );
}

## frontend/pages/services.js
export default function Services() {
  const services = [
    {
      title: "Document Storage",
      description: "Secure cloud storage for all your documents",
      features: ["Unlimited storage", "Version control", "Auto-backup"]
    },
    {
      title: "Team Collaboration",
      description: "Work together on documents in real-time",
      features: ["Real-time editing", "Comments & reviews", "Permission management"]
    },
    {
      title: "Advanced Search",
      description: "Find any document instantly with AI-powered search",
      features: ["Full-text search", "Smart filters", "OCR capability"]
    },
    {
      title: "API Integration",
      description: "Integrate with your existing workflows",
      features: ["RESTful API", "Webhooks", "Third-party integrations"]
    }
  ];

  return (
    <div className="container">
      <header className="header">
        <h1>Our Services</h1>
        <p className="subtitle">Comprehensive document management solutions</p>
      </header>

      <main className="main">
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="feature-list">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>

      <nav className="navigation">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
  );
}

## frontend/pages/contact.js
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Contact Us</h1>
        <p className="subtitle">Get in touch with the ForeverDocs team</p>
      </header>

      <main className="main">
        <div className="contact-content">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>
              Have questions about ForeverDocs? We'd love to hear from you.
              Send us a message and we'll respond as soon as possible.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email:</strong> hello@foreverdocs.com
              </div>
              <div className="contact-item">
                <strong>Phone:</strong> +1 (555) 123-4567
              </div>
              <div className="contact-item">
                <strong>Address:</strong> 123 Document Street, Cloud City, CC 12345
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </main>

      <nav className="navigation">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
      </nav>
    </div>
  );
}

## frontend/styles/globals.css
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f8fafc;
}

a {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;
}

a:hover {
  color: #0070f3;
}

* {
  box-sizing: border-box;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  min-height: 100vh;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
}

.header h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 1rem;
}

.api-status {
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background: #f0f0f0;
  display: inline-block;
  font-size: 0.9rem;
}

.connected {
  color: #22c55e;
  font-weight: bold;
}

.disconnected {
  color: #ef4444;
  font-weight: bold;
}

.main {
  margin-bottom: 3rem;
}

.hero {
  text-align: center;
  padding: 2rem 0;
  margin-bottom: 3rem;
}

.hero h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #2d3748;
}

.hero p {
  font-size: 1.1rem;
  color: #4a5568;
  max-width: 600px;
  margin: 0 auto;
}

.features {
  margin-bottom: 3rem;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.feature-card h3 {
  margin-bottom: 1rem;
  font-size: 1.3rem;
  color: #2d3748;
}

.feature-card p {
  color: #4a5568;
  margin: 0;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.service-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
}

.service-card h3 {
  color: #2d3748;
  margin-bottom: 1rem;
  font-size: 1.4rem;
}

.service-card p {
  color: #4a5568;
  margin-bottom: 1.5rem;
}

.feature-list {
  list-style: none;
  padding: 0;
}

.feature-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #e2e8f0;
  color: #4a5568;
}

.feature-list li:before {
  content: "✓ ";
  color: #22c55e;
  font-weight: bold;
  margin-right: 0.5rem;
}

.contact-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 3rem;
  margin-top: 2rem;
}

.contact-info h2,
.contact-form h2 {
  color: #2d3748;
  margin-bottom: 1rem;
}

.contact-details {
  margin-top: 2rem;
}

.contact-item {
  margin-bottom: 1rem;
  color: #4a5568;
}

.contact-form {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #2d3748;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #667eea;
}

.submit-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.submit-btn:hover {
  opacity: 0.9;
}

.navigation {
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 2rem 0;
  border-top: 1px solid #e2e8f0;
  margin-top: 3rem;
}

.navigation a {
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  transition: all 0.2s ease;
}

.navigation a:hover {
  background: #667eea;
  color: white;
  transform: translateY(-2px);
}

.content {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  line-height: 1.8;
}

.content h2 {
  color: #2d3748;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.content h2:first-child {
  margin-top: 0;
}

.content ul {
  margin: 1rem 0;
}

.content li {
  margin-bottom: 0.5rem;
  color: #4a5568;
}

@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }
  
  .header h1 {
    font-size: 2rem;
  }
  
  .hero h2 {
    font-size: 1.8rem;
  }
  
  .feature-grid,
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-content {
    grid-template-columns: 1fr;
  }
  
  .navigation {
    flex-wrap: wrap;
    gap: 1rem;
  }
}
