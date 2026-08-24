import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isVisible, setIsVisible] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.querySelector('#contact')
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus('error')
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('error')
      return
    }

    // Simulate form submission
    console.log('Form submitted:', formData)
    setSubmitStatus('success')
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    })

    // Clear status after 3 seconds
    setTimeout(() => setSubmitStatus(''), 3000)
  }

  return (
    <section id="contact" className="contact-section section-spacing">
      <Container>
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's work together</p>
        </div>

        <Row className="align-items-start gap-4">
          <Col lg={5} className={isVisible ? 'animate-slide-in-left' : ''}>
            <div className="contact-info">
              <h3 className="contact-heading">Let's Talk About Everything!</h3>
              <p className="contact-description">
                Don't like forms? Send me an email. 👋
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div className="contact-item-content">
                    <h4>Email</h4>
                    <p>your.email@example.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-item-content">
                    <h4>Location</h4>
                    <p>Your City, Your Country</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">💼</div>
                  <div className="contact-item-content">
                    <h4>LinkedIn</h4>
                    <p>linkedin.com/in/yourprofile</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <a href="#" className="social-link">GitHub</a>
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">LinkedIn</a>
              </div>
            </div>
          </Col>

          <Col lg={6} className={isVisible ? 'animate-slide-in-right' : ''}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <Form.Label>Name *</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="form-group">
                <Form.Label>Email *</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <Form.Label>Subject *</Form.Label>
                <Form.Control
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  required
                />
              </div>

              <div className="form-group">
                <Form.Label>Message *</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  required
                />
              </div>

              {submitStatus === 'success' && (
                <div className="alert alert-success" role="alert">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="alert alert-danger" role="alert">
                  ✗ Please fill all fields correctly.
                </div>
              )}

              <Button type="submit" className="btn-primary w-100">
                Send Message
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
