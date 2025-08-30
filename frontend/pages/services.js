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
    <div className=\"container\">
      <header className=\"header\">
        <h1>Our Services</h1>
        <p className=\"subtitle\">Comprehensive document management solutions</p>
      </header>

      <main className=\"main\">
        <div className=\"services-grid\">
          {services.map((service, index) => (
            <div key={index} className=\"service-card\">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className=\"feature-list\">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>

      <nav className=\"navigation\">
        <a href=\"/\">Home</a>
        <a href=\"/about\">About</a>
        <a href=\"/contact\">Contact</a>
      </nav>
    </div>
  );
}
