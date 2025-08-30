import Head from 'next/head';
import Link from 'next/link';

export default function Contact() {
  const signupFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfbY2KWdqfIN_QowhT5lK4IWxGuysHbDF1wJBiqyRIwN-9QuA/viewform';
  const workshopFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSc0lPlU53FRQi5URf_PZbRzwYhPkv2UIgJNH2AAxS27xRX2aw/viewform';
  const partnerFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSe39Qi4wSf1wsGYmPsw_ewWGX6aYGORt7Wp8QQPTVNV4X317Q/viewform';

  return (
    <>
      <Head>
        <title>Get Started - ForeverDocs</title>
        <meta name="description" content="Sign up for your free digital safe deposit box, join community workshops, or partner with ForeverDocs." />
      </Head>

      <header>
        <nav className="container">
          <h1>ForeverDocs</h1>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <h1>Protect Your Family's Legacy</h1>
            <p>Get started with your free digital safe deposit box today</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Get Started</h2>
            <div className="grid">
              <div className="card">
                <h3>🔒 Get Your Digital Vault</h3>
                <p>Sign up for your free, secure digital safe deposit box. Upload your wills, deeds, insurance policies, and get your blockchain family crest.</p>
                <div style={{margin: '20px 0', maxWidth: '100%', overflow: 'auto'}}>
                  <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfbY2KWdqfIN_QowhT5lK4IWxGuysHbDF1wJBiqyRIwN-9QuA/viewform?embedded=true" 
                    width="100%" 
                    height="600" 
                    frameBorder="0" 
                    marginHeight="0" 
                    marginWidth="0"
                    style={{maxWidth: '640px'}}
                  >
                    Loading…
                  </iframe>
                </div>
                <a href={signupFormUrl} target="_blank" rel="noopener noreferrer" className="btn">
                  Open Form in New Tab
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{background: '#f8f9fa'}}>
          <div className="container">
            <h2>Join a Workshop</h2>
            <div className="card">
              <h3>📚 Community Workshops</h3>
              <p>Attend a free community workshop on estate planning, document organization, and preventing heirs' property loss. Open to all families.</p>
              <div style={{margin: '20px 0', maxWidth: '100%', overflow: 'auto'}}>
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSc0lPlU53FRQi5URf_PZbRzwYhPkv2UIgJNH2AAxS27xRX2aw/viewform?embedded=true" 
                  width="100%" 
                  height="600" 
                  frameBorder="0" 
                  marginHeight="0" 
                  marginWidth="0"
                  style={{maxWidth: '640px'}}
                >
                  Loading…
                </iframe>
              </div>
              <a href={workshopFormUrl} target="_blank" rel="noopener noreferrer" className="btn">
                Open Form in New Tab
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Become a Partner</h2>
            <div className="card">
              <h3>🤝 Community Partnership</h3>
              <p>Cities, churches, and organizations can sponsor workshops and help more families protect their documents. Join our community partnership program.</p>
              <div style={{margin: '20px 0', maxWidth: '100%', overflow: 'auto'}}>
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSe39Qi4wSf1wsGYmPsw_ewWGX6aYGORt7Wp8QQPTVNV4X317Q/viewform?embedded=true" 
                  width="100%" 
                  height="600" 
                  frameBorder="0" 
                  marginHeight="0" 
                  marginWidth="0"
                  style={{maxWidth: '640px'}}
                >
                  Loading…
                </iframe>
              </div>
              <a href={partnerFormUrl} target="_blank" rel="noopener noreferrer" className="btn">
                Open Form in New Tab
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Contact Information</h2>
            <div className="grid">
              <div className="card">
                <h3>📧 Email</h3>
                <p>Have questions about ForeverDocs or need help getting started?</p>
                <strong>info@foreverdocs.org</strong>
              </div>
              <div className="card">
                <h3>🌐 Website</h3>
                <p>Visit our main website for resources and updates.</p>
                <strong>www.foreverdocs.org</strong>
              </div>
              <div className="card">
                <h3>📍 Serving the South</h3>
                <p>Proudly serving Black families and communities across the American South.</p>
                <strong>Community-based locations</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{background: '#f8f9fa'}}>
          <div className="container">
            <h2>Frequently Asked Questions</h2>
            <div style={{maxWidth: '800px', margin: '0 auto'}}>
              <div className="card">
                <h3>Is ForeverDocs really free?</h3>
                <p>Yes, completely free. No hidden fees, no subscriptions, no catch. We're funded by grants and community support to serve families who need document protection most.</p>
              </div>
              <div className="card">
                <h3>How secure are my documents?</h3>
                <p>Your documents are stored in an encrypted digital vault that only you can access. We use bank-level security and never share your private information.</p>
              </div>
              <div className="card">
                <h3>What's a blockchain family crest?</h3>
                <p>It's a unique digital symbol on blockchain that shows your family has protected their documents—like a public badge of preparedness that doesn't reveal your private information.</p>
              </div>
              <div className="card">
                <h3>Who can use ForeverDocs?</h3>
                <p>Any family can use ForeverDocs, but we're specifically designed to serve Black families in the South who face the highest risk of heirs' property loss.</p>
              </div>
              <div className="card">
                <h3>How do I access my documents?</h3>
                <p>Log in to your secure account anytime, anywhere. You can view, download, or share your documents with family members or legal professionals as needed.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{background: '#2c3e50', color: 'white'}}>
          <div className="container">
            <h2 style={{color: 'white'}}>Take Action Today</h2>
            <div className="card" style={{background: 'rgba(255,255,255,0.1)', color: 'white'}}>
              <p style={{fontSize: '1.3rem', marginBottom: '2rem'}}>
                <strong>Don't let your family become another statistic.</strong><br/>
                1.6 million acres are at risk. Billions in wealth have been lost.<br/>
                But you can protect your legacy starting today.
              </p>
              <a href={signupFormUrl} target="_blank" rel="noopener noreferrer" className="btn" style={{fontSize: '1.2rem', padding: '15px 30px'}}>
                Get Your Free Digital Vault Now
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2025 ForeverDocs. Protecting family legacies and preventing generational wealth loss.</p>
        </div>
      </footer>
    </>
  );
}
