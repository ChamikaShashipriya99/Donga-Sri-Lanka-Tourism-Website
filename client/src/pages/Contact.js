import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div>
      {/* Hero Section with Background Video */}
      <section className="contact-hero section">
        <div className="contact-hero-background">
          <video
            className="contact-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/assets/contact-fallback.jpg"
          >
            <source src="https://videos.pexels.com/video-files/18993615/18993615-hd_1920_1080_50fps.mp4" type="video/mp4" />
          </video>
          <div className="contact-hero-overlay"></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="section-title text-white">Contact Us</h2>
              <p className="section-subtitle text-white">Get in touch with us for your next Sri Lankan adventure</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section py-5">
        <div className="container">
          <div className="row">
            {/* Contact Information */}
            <div className="col-lg-4 mb-5">
              <div className="contact-info">
                <h3 className="mb-4">Get In Touch</h3>
                <p className="lead mb-4">
                  Ready to start your Sri Lankan journey? Contact us today and let us help you plan 
                  the perfect authentic tour experience.
                </p>
                
                <div className="contact-item mb-4">
                  <div className="d-flex align-items-center">
                    <div className="bg-primary-custom text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <h5 className="mb-1">Address</h5>
                      <p className="text-muted mb-0">Southern Province, Sri Lanka</p>
                    </div>
                  </div>
                </div>

                <div className="contact-item mb-4">
                  <div className="d-flex align-items-center">
                    <div className="bg-primary-custom text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                      <i className="fab fa-whatsapp"></i>
                    </div>
                    <div>
                      <h5 className="mb-1">WhatsApp</h5>
                      <p className="text-muted mb-0">+94 76 6391036</p>
                    </div>
                  </div>
                </div>

                <div className="contact-item mb-4">
                  <div className="d-flex align-items-center">
                    <div className="bg-primary-custom text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                      <h5 className="mb-1">Email</h5>
                      <p className="text-muted mb-0">dongasrilanka@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="contact-item mb-4">
                  <div className="d-flex align-items-center">
                    <div className="bg-primary-custom text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                      <i className="fas fa-clock"></i>
                    </div>
                    <div>
                      <h5 className="mb-1">Response Time</h5>
                      <p className="text-muted mb-0">We respond within 24 hours</p>
                      <p className="text-muted mb-0">Available 7 days a week</p>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="social-links mt-4">
                  <h5 className="mb-3">Follow Us</h5>
                  <div className="d-flex gap-3">
                    <a href="https://www.facebook.com/DongaSriLanka" target="_blank" rel="noopener noreferrer" className="text-primary-custom fs-4">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href="https://www.youtube.com/@donga1020" target="_blank" rel="noopener noreferrer" className="text-primary-custom fs-4">
                      <i className="fab fa-youtube"></i>
                    </a>
                    <a href="https://wa.me/94766391036" target="_blank" rel="noopener noreferrer" className="text-primary-custom fs-4">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-8">
              <div className="contact-form">
                <h3 className="mb-4">Send Us a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name" className="form-label">Full Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label">Email Address *</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary btn-lg">
                    <i className="fas fa-paper-plane me-2"></i>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="map-container">
                <h3 className="text-center mb-4">Find Us in Sri Lanka</h3>
                <div className="ratio ratio-21x9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.63162224516!2d80.2444!3d6.9271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1234567890"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Donga Sri Lanka Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 