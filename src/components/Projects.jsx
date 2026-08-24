import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './Projects.css'

function Projects() {
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

    const section = document.querySelector('#projects')
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      description: 'A fully responsive e-commerce admin dashboard built with React and Bootstrap.',
      image: '🛒',
      tags: ['React', 'Bootstrap', 'Responsive'],
      link: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Interactive task manager with real-time updates and state management using React Hooks.',
      image: '✓',
      tags: ['React', 'Hooks', 'UI/UX'],
      link: '#',
    },
    {
      id: 3,
      title: 'Weather Forecast App',
      description: 'Beautiful weather application with API integration and smooth animations.',
      image: '🌤️',
      tags: ['React', 'API', 'Animations'],
      link: '#',
    },
    {
      id: 4,
      title: 'Social Media Feed',
      description: 'Responsive social media feed with interactive components and Bootstrap styling.',
      image: '💬',
      tags: ['React', 'Bootstrap', 'Components'],
      link: '#',
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Modern portfolio website showcasing projects and skills with smooth animations.',
      image: '🎨',
      tags: ['React', 'Vite', 'Design'],
      link: '#',
    },
    {
      id: 6,
      title: 'Blog Platform',
      description: 'Content management platform with markdown support and responsive layout.',
      image: '📝',
      tags: ['React', 'Markdown', 'CMS'],
      link: '#',
    },
  ]

  return (
    <section id="projects" className="projects-section section-spacing">
      <Container>
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Recent work and showcases</p>
        </div>

        <Row>
          {projects.map((project, idx) => (
            <Col lg={4} md={6} key={project.id} className="mb-4">
              <div 
                className={`project-card ${isVisible ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="project-image">
                  <span className="project-emoji">{project.image}</span>
                  <div className="project-overlay">
                    <Button variant="light" size="sm">
                      View Project →
                    </Button>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <div className="view-more-section">
          <Button href="#" className="btn-primary" size="lg">
            View All Projects
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default Projects
