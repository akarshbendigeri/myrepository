import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg={4} md={6} className="mb-4 mb-lg-0">
            <h5 className="footer-title">My Portfolio</h5>
            <p className="footer-description">
              A showcase of my work and expertise in React development and modern web design.
            </p>
          </Col>

          <Col lg={4} md={6} className="mb-4 mb-lg-0">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </Col>

          <Col lg={4} md={6}>
            <h5 className="footer-title">Connect</h5>
            <div className="footer-socials">
              <a href="#" className="footer-social-link">GitHub</a>
              <a href="#" className="footer-social-link">LinkedIn</a>
              <a href="#" className="footer-social-link">Twitter</a>
              <a href="#" className="footer-social-link">Email</a>
            </div>
          </Col>
        </Row>

        <hr className="footer-divider" />

        <Row className="align-items-center">
          <Col md={6}>
            <p className="footer-copyright">
              © {currentYear} My Portfolio. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <p className="footer-credit">
              Built with <span className="heart">❤️</span> using React & Bootstrap
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
