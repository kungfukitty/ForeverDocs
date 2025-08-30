export default function About() {
  return (
    <div className=\"container\">
      <header className=\"header\">
        <h1>About ForeverDocs</h1>
      </header>

      <main className=\"main\">
        <section className=\"content\">
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

      <nav className=\"navigation\">
        <a href=\"/\">Home</a>
        <a href=\"/services\">Services</a>
        <a href=\"/contact\">Contact</a>
      </nav>
    </div>
  );
}
