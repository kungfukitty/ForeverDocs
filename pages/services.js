import Head from 'next/head';
import Link from 'next/link';

export default function Services() {
  return (
    <>
      <Head>
        <title>Services - ForeverDocs Digital Safe Deposit Box</title>
        <meta name="description" content="Free digital safe deposit box, blockchain family crest, and community workshops to protect your family's vital documents." />
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
            <h1>Digital Safe Deposit Box</h1>
            <p>Free, secure protection for your family's most important documents</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>What ForeverDocs Provides</h2>
            <div className="grid">
              <div className="card">
                <h3>🔒 Secure Document Vault</h3>
                <p>Upload and protect your essential documents in a private, encrypted digital vault:</p>
                <ul style={{textAlign: 'left', margin: '1rem 0'}}>
                  <li>Wills and estate documents</li>
                  <li>Property deeds and titles</li>
                  <li>Insurance policies</li>
                  <li>Family records and certificates</li>
                </ul>
                <strong style={{color: '#27ae60'}}>FREE for all families</strong>
              </div>
              <div className="card">
                <h3>🏆 Blockchain Family Crest</h3>
                <p>Receive a tamper-proof digital family crest on blockchain as public proof of your family's document preparedness—without exposing sensitive data.</p>
                <strong style={{color: '#27ae60'}}>FREE for all families</strong>
              </div>
              <div className="card">
                <h3>📚 Community Workshops</h3>
                <p>Access educational workshops in your community:</p>
                <ul style={{textAlign: 'left', margin: '1rem 0'}}>
                  <li>Estate planning basics</li>
                  <li>Document literacy and organization</li>
                  <li>Financial empowerment</li>
                  <li>Preventing heirs' property loss</li>
                </ul>
                <strong style={{color: '#27ae60'}}>FREE for all families</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{background: '#f8f9fa'}}>
          <div className="container">
            <h2>How It Works</h2>
            <div className="grid">
              <div className="card">
                <h3>1. Sign Up</h3>
                <p>Create your free ForeverDocs account and set up your family's secure digital vault.</p>
              </div>
              <div className="card">
                <h3>2. Upload Documents</h3>
                <p>Securely upload your wills, deeds, insurance policies, and other vital family documents.</p>
              </div>
              <div className="card">
                <h3>3. Get Your Crest</h3>
                <p>Receive your unique blockchain family crest showing your family is prepared and protected.</p>
              </div>
              <div className="card">
                <h3>4. Stay Protected</h3>
                <p>Access your documents anytime, update as needed, and join community workshops for ongoing support.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>What Makes ForeverDocs Different</h2>
            <div className="grid">
              <div className="card">
                <h3>Community Trust</h3>
                <p>Unlike tech companies, we work with local churches, community centers, and organizations you already trust.</p>
              </div>
              <div className="card">
                <h3>Privacy First</h3>
                <p>Your documents stay private in your vault. Only the blockchain crest is public—showing preparedness without exposing data.</p>
              </div>
              <div className="card">
                <h3>No Cost Barriers</h3>
                <p>Completely free service funded by grants and community support—never any hidden fees or subscriptions.</p>
              </div>
              <div className="card">
                <h3>Built for Families</h3>
                <p>Specifically designed to prevent heirs' property loss and protect Black family wealth in the South.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{background: '#e8f5e8'}}>
          <div className="container">
            <h2>Benefits of Protection</h2>
            <div className="card" style={{maxWidth: '800px', margin: '0 auto'}}>
              <h3>For Your Family:</h3>
              <ul style={{textAlign: 'left', fontSize: '1.1rem', lineHeight: '1.6'}}>
                <li>✅ Prevents heirs' property disputes and forced sales</li>
                <li>✅ Protects homes, farms, and insurance claims</li>
                <li>✅ Makes legal processes smoother during times of crisis</li>
                <li>✅ Preserves generational wealth for your children</li>
                <li>✅ Gives you control over your family's legacy</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Documents We Protect</h2>
            <div className="grid">
              <div className="card">
                <h3>Estate Documents</h3>
                <ul style={{textAlign: 'left'}}>
                  <li>Wills and testaments</li>
                  <li>Power of attorney</li>
                  <li>Living wills</li>
                  <li>Trust documents</li>
                </ul>
              </div>
              <div className="card">
                <h3>Property Records</h3>
                <ul style={{textAlign: 'left'}}>
                  <li>Property deeds</li>
                  <li>Land titles</li>
                  <li>Mortgage documents</li>
                  <li>Property tax records</li>
                </ul>
              </div>
              <div className="card">
                <h3>Insurance & Financial</h3>
                <ul style={{textAlign: 'left'}}>
                  <li>Life insurance policies</li>
                  <li>Home/auto insurance</li>
                  <li>Bank account information</li>
                  <li>Investment records</li>
                </ul>
              </div>
              <div className="card">
                <h3>Family Records</h3>
                <ul style={{textAlign: 'left'}}>
                  <li>Birth certificates</li>
                  <li>Marriage certificates</li>
                  <li>Social Security cards</li>
                  <li>Family genealogy</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{background: '#2c3e50', color: 'white'}}>
          <div className="container">
            <h2 style={{color: 'white'}}>Ready to Protect Your Family's Legacy?</h2>
            <div className="card" style={{background: 'rgba(255,255,255,0.1)', color: 'white'}}>
              <p style={{fontSize: '1.2rem', marginBottom: '2rem'}}>
                Don't let your family become another statistic. Protect your documents, secure your legacy, and build generational wealth.
              </p>
              <Link href="/contact" className="btn" style={{marginRight: '1rem'}}>Get Started Free</Link>
              <Link href="/contact" className="btn" style={{background: 'transparent', border: '2px solid white'}}>Join Workshop</Link>
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
