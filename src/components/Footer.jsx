import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg={4} md={6} className="mb-4 mb-lg-0">
            <h5 className="footer-title">Akarsh Bendigeri</h5>
            <p className="footer-description">
              Software Engineer III specializing in React.js, Microsoft Azure,
              secure APIs, and workflow automation.
            </p>
          </Col>

          <Col lg={4} md={6} className="mb-4 mb-lg-0">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </Col>

          <Col lg={4} md={6}>
            <h5 className="footer-title">Connect</h5>
            <div className="footer-socials">
              <a
                href="https://www.linkedin.com/in/akarsh-bendigeri-9a7615130/"
                className="footer-social-link"
              >
                LinkedIn
              </a>
              <a
                href="mailto:nikhiakarsh@gmail.com"
                className="footer-social-link"
              >
                Email
              </a>
            </div>
          </Col>
        </Row>

        <hr className="footer-divider" />

        <Row className="align-items-center">
          <Col md={6}></Col>
          <Col md={6} className="text-md-end">
            <p className="footer-credit">
              Built with <span className="heart">❤️</span> using React &
              Bootstrap
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
