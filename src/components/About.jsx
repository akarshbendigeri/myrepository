import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './About.css'

function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.querySelector('#about')
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  return (
    <section id="about" className="about-section section-spacing">
      <Container>
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>

        <Row className="align-items-center gap-4">
          <Col lg={5} className={isVisible ? 'animate-slide-in-left' : ''}>
            <div className="about-image-wrapper">
              <div className="about-image">
                <div className="image-placeholder">📱</div>
              </div>
            </div>
          </Col>

          <Col lg={6} className={isVisible ? 'animate-slide-in-right' : ''}>
            <div className="about-content">
              <h3 className="about-subtitle">Frontend React Developer</h3>
              <p className="about-text">
                I'm a passionate frontend developer with a love for creating beautiful, functional web applications.
                With expertise in React, Bootstrap, and modern JavaScript, I build responsive and interactive
                user interfaces that deliver exceptional user experiences.
              </p>
              
              <p className="about-text">
                I believe in writing clean, maintainable code and staying updated with the latest web development
                trends. Every project is an opportunity to learn and grow as a developer.
              </p>

              <div className="about-highlights">
                <div className="highlight-item">
                  <h4>3+</h4>
                  <p>Years Experience</p>
                </div>
                <div className="highlight-item">
                  <h4>20+</h4>
                  <p>Projects Completed</p>
                </div>
                <div className="highlight-item">
                  <h4>15+</h4>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
