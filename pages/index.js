import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>ForeverDocs - Safeguarding Family Legacies with Digital Security</title>
        <meta name="description" content="ForeverDocs helps Black families in the South protect vital documents like wills, deeds, and insurance policies to prevent heirs' property loss and preserve generational wealth." />
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
            <h1>Safeguarding Family Legacies with Digital Security</h1>
            <p>Protect your family's most vital documents—wills, deeds, insurance policies—and prevent the loss of generational wealth. Free digital safe deposit box for families in the South.</p>
            <Link href="/contact" className="btn">Protect Your Legacy</Link>
            <Link href="/services" className="btn">Learn More</Link>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>The Crisis We're Fighting</h2>
            <div className="grid">
              <div className="card">
                <h3>1.6 Million Acres at Risk</h3>
                <p>Black-owned land in the South is vulnerable to heirs' property loss—a legal loophole that strips away generational wealth.</p>
              </div>
              <div className="card">
                <h3>Missing Documents = Lost Property</h3>
                <p>Families lose homes and land because a will was never written, a deed was misplaced, or paperwork wasn't filed correctly.</p>
              </div>
              <div className="card">
                <h3>Billions in Wealth Lost</h3>
                <p>This isn't just about paperwork—it's about heritage, stability, and dignity. The system preys on disorganization.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{background: '#f8f9fa'}}>
          <div className="container">
            <h2>Our Solution: Digital Safe Deposit Box</h2>
            <div className="grid">
              <div className="card">
                <h3>🔒 Secure Storage</h3>
                <p>Upload and protect essential documents—wills, deeds, insurance policies—in your private digital vault.</p>
              </div>
              <div className="card">
                <h3>🏆 Blockchain Family Crest</h3>
                <p>Receive a tamper-proof digital family crest on blockchain as public proof of your family's preparedness.</p>
              </div>
              <div className="card">
                <h3>📚 Community Workshops</h3>
                <p>Access workshops on estate planning, document literacy, and financial empowerment in your community.</p>
              </div>
              <div className="card">
                <h3>💰 Completely Free</h3>
                <p>No cost barrier—this service is free to families. Community trust + modern technology working together.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Why Black Families Need ForeverDocs</h2>
            <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'left'}}>
              <div className="card">
                <ul style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
                  <li><strong>Black families are twice as likely</strong> to pass property without a will</li>
                  <li><strong>Historical discrimination</strong> has left deep gaps in access to estate planning</li>
                  <li><strong>Land and home ownership</strong> are key to closing the wealth gap—but only if protected</li>
                  <li><strong>ForeverDocs gives families tools</strong> to take control of their legacy</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{background: '#2c3e50', color: 'white'}}>
          <div className="container">
            <h2 style={{color: 'white'}}>Community Impact</h2>
            <div className="grid">
              <div className="card" style={{background: 'rgba(255,255,255,0.1)', color: 'white'}}>
                <h3>For Families</h3>
                <p>✓ Prevents heirs' property disputes<br/>
                ✓ Protects homes, farms, insurance claims<br/>
                ✓ Smoother legal processes during crisis</p>
              </div>
              <div className="card" style={{background: 'rgba(255,255,255,0.1)', color: 'white'}}>
                <h3>For Cities & Counties</h3>
                <p>✓ Reduces costly probate disputes<br/>
                ✓ Stabilizes neighborhoods<br/>
                ✓ Strengthens local economies</p>
              </div>
            </div>
            <div style={{textAlign: 'center', marginTop: '2rem'}}>
              <Link href="/contact" className="btn">Get Started Today</Link>
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
