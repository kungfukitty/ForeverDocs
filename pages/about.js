import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <title>About ForeverDocs - Fighting Heirs' Property Loss</title>
        <meta name="description" content="ForeverDocs is a community-rooted initiative helping Black families in the South protect vital documents and prevent generational wealth loss." />
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
            <h1>Our Mission</h1>
            <p>Fighting generational wealth loss through secure document protection</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Who We Are</h2>
            <div className="card" style={{maxWidth: '800px', margin: '0 auto', textAlign: 'left'}}>
              <p style={{fontSize: '1.2rem', lineHeight: '1.8'}}>
                <strong>ForeverDocs</strong> is a community-rooted initiative designed to help families—particularly Black families in the South—protect and preserve their most vital documents: wills, deeds, insurance policies, and family records.
              </p>
              <p style={{fontSize: '1.1rem', marginTop: '1rem'}}>
                By combining secure digital storage with blockchain-backed public proof, ForeverDocs ensures that families can safeguard their legacy, reduce the risk of land loss, and build a foundation of generational wealth.
              </p>
            </div>
          </div>
        </section>

        <section className="section" style={{background: '#f8f9fa'}}>
          <div className="container">
            <h2>The Problem We're Solving</h2>
            <div className="card" style={{maxWidth: '900px', margin: '0 auto', textAlign: 'left'}}>
              <p style={{fontSize: '1.1rem', marginBottom: '1rem'}}>
                Across the American South, millions of families—especially Black families—face <strong>heirs' property loss</strong>, a legal loophole that has stripped away billions of dollars in generational wealth.
              </p>
              <ul style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
                <li><strong>1.6 million acres</strong> of Black-owned land in the South are heirs' property, vulnerable to forced sales</li>
                <li>Families often lose property because a will was never written, a deed was misplaced, or paperwork was never filed correctly</li>
                <li>The system preys on disorganization, leaving families without legal protection at critical times</li>
              </ul>
              <p style={{fontSize: '1.2rem', fontWeight: 'bold', marginTop: '1rem', color: '#e74c3c'}}>
                This isn't just about paperwork—it's about heritage, stability, and dignity.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Why This Matters for Black Families</h2>
            <div className="grid">
              <div className="card">
                <h3>Historical Discrimination</h3>
                <p>Generations of systemic barriers have left deep gaps in access to estate planning and legal services.</p>
              </div>
              <div className="card">
                <h3>Higher Risk</h3>
                <p>Black families are <strong>twice as likely</strong> to pass property without a will, making heirs vulnerable.</p>
              </div>
              <div className="card">
                <h3>Wealth Gap</h3>
                <p>Land and home ownership are key to closing the wealth gap—but only if protected through proper documentation.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{background: '#2c3e50', color: 'white'}}>
          <div className="container">
            <h2 style={{color: 'white'}}>Our Approach</h2>
            <div className="card" style={{background: 'rgba(255,255,255,0.1)', color: 'white', maxWidth: '800px', margin: '0 auto'}}>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
                ForeverDocs is more than technology—it's a <strong>grassroots safeguard against generational loss</strong>. We combine:
              </p>
              <ul style={{fontSize: '1.1rem', lineHeight: '1.8', marginTop: '1rem'}}>
                <li><strong>Community Trust:</strong> Working with local churches, community centers, and organizations</li>
                <li><strong>Modern Technology:</strong> Secure digital storage and blockchain verification</li>
                <li><strong>No Barriers:</strong> Completely free service with no hidden costs</li>
                <li><strong>Education:</strong> Workshops and resources to empower families</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Call to Partnership</h2>
            <div className="card" style={{maxWidth: '800px', margin: '0 auto'}}>
              <p style={{fontSize: '1.1rem', marginBottom: '1rem'}}>
                We invite city officials, community leaders, and local organizations to <strong>join us in safeguarding family wealth</strong>.
              </p>
              <p style={{fontSize: '1.1rem'}}>
                By supporting ForeverDocs, cities can sponsor document workshops, encourage residents to protect their documents, and demonstrate commitment to preserving family legacies for future generations.
              </p>
              <div style={{marginTop: '2rem'}}>
                <Link href="/contact" className="btn">Partner With Us</Link>
              </div>
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
