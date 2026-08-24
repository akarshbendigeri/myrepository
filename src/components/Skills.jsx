import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Skills.css'

function Skills() {
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

    const section = document.querySelector('#skills')
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  const skillCategories = [
    {
      name: 'Frontend',
      skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Responsive Design'],
    },
    {
      name: 'Tools & Libraries',
      skills: ['Vite', 'npm', 'Git', 'VS Code', 'React Bootstrap', 'REST APIs'],
    },
    {
      name: 'Soft Skills',
      skills: ['Problem Solving', 'Communication', 'Team Collaboration', 'Attention to Detail', 'Project Management'],
    },
  ]

  return (
    <section id="skills" className="skills-section section-spacing">
      <Container>
        <div className="section-header">
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">Technologies and expertise</p>
        </div>

        <Row>
          {skillCategories.map((category, idx) => (
            <Col lg={4} md={6} key={idx} className="mb-4">
              <div className={`skill-card ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: `${idx * 0.2}s` }}>
                <h3 className="skill-category-title">{category.name}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="skill-item">
                      <span className="skill-icon">✓</span>
                      <span className="skill-name">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <div className="proficiency-section mt-5">
          <h3 className="proficiency-title">Technical Proficiency</h3>
          <Row>
            <Col md={6} className="mb-4">
              <div className="proficiency-item">
                <div className="proficiency-header">
                  <span>React.js</span>
                  <span>90%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '90%' }}></div>
                </div>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div className="proficiency-item">
                <div className="proficiency-header">
                  <span>JavaScript</span>
                  <span>85%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '85%' }}></div>
                </div>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div className="proficiency-item">
                <div className="proficiency-header">
                  <span>Bootstrap & CSS</span>
                  <span>95%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '95%' }}></div>
                </div>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div className="proficiency-item">
                <div className="proficiency-header">
                  <span>Responsive Design</span>
                  <span>92%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '92%' }}></div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default Skills
