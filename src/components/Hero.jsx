import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './Hero.css'

function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="hero-section">
      <Container className="h-100">
        <Row className="h-100 align-items-center">
          <Col lg={6} className={`hero-content ${isVisible ? 'animate-slide-in-left' : ''}`}>
            <p className="hero-subtitle">Welcome to My Portfolio</p>
            <h1 className="hero-title">
              I'm a <span className="gradient-text">React Developer</span>
            </h1>
            <p className="hero-description">
              Crafting beautiful, interactive web experiences with modern React and responsive design.
              Turning ideas into reality with clean code and creative solutions.
            </p>
            <div className="hero-cta">
              <Button 
                href="#projects" 
                className="btn-primary me-3"
                size="lg"
              >
                View My Work
              </Button>
              <Button 
                href="#contact" 
                variant="outline-primary" 
                size="lg"
              >
                Get In Touch
              </Button>
            </div>
          </Col>
          <Col lg={6} className={`hero-visual ${isVisible ? 'animate-slide-in-right' : ''}`}>
            <div className="hero-image-wrapper">
              <div className="gradient-circle"></div>
              <div className="hero-avatar">
                <div className="avatar-placeholder">
                  <i className="fas fa-user-circle"></i>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      
      {/* Animated background elements */}
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </section>
  )
}

export default Hero
