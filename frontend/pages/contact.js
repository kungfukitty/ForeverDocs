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
    <div className=\"container\">
      <header className=\"header\">
        <h1>Contact Us</h1>
        <p className=\"subtitle\">Get in touch with the ForeverDocs team</p>
      </header>

      <main className=\"main\">
        <div className=\"contact-content\">
          <div className=\"contact-info\">
            <h2>Get In Touch</h2>
            <p>
              Have questions about ForeverDocs? We'd love to hear from you.
              Send us a message and we'll respond as soon as possible.
            </p>
            
            <div className=\"contact-details\">
              <div className=\"contact-item\">
                <strong>Email:</strong> hello@foreverdocs.com
              </div>
              <div className=\"contact-item\">
                <strong>Phone:</strong> +1 (555) 123-4567
              </div>
              <div className=\"contact-item\">
                <strong>Address:</strong> 123 Document Street, Cloud City, CC 12345
              </div>
            </div>
          </div>

          <div className=\"contact-form\">
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className=\"form-group\">
                <label htmlFor=\"name\">Name</label>
                <input
                  type=\"text\"
                  id=\"name\"
                  name=\"name\"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className=\"form-group\">
                <label htmlFor=\"email\">Email</label>
                <input
                  type=\"email\"
                  id=\"email\"
                  name=\"email\"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className=\"form-group\">
                <label htmlFor=\"message\">Message</label>
                <textarea
                  id=\"message\"
                  name=\"message\"
                  value={formData.message}
                  onChange={handleChange}
                  rows=\"5\"
                  required
                ></textarea>
              </div>
              
              <button type=\"submit\" className=\"submit-btn\">Send Message</button>
            </form>
          </div>
        </div>
      </main>

      <nav className=\"navigation\">
        <a href=\"/\">Home</a>
        <a href=\"/about\">About</a>
        <a href=\"/services\">Services</a>
      </nav>
    </div>
  );
}
