import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Projects.css";

function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const section = document.querySelector("#projects");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "Secure Full-Stack API Platform",
      description:
        "A Node.js and Express proof of concept using MVC architecture, Okta and JWT authentication, RBAC, strict request validation, and Azure monitoring.",
      image: "API",
      tags: ["Node.js", "Express", "Azure", "Security"],
      link: "#",
    },
    {
      id: 2,
      title: "Reusable React Component Library",
      description:
        "A centralized library of 50+ modular React components that standardized UI consistency across three internal product teams.",
      image: "UI",
      tags: ["React", "TypeScript", "Components"],
      link: "#",
    },
    {
      id: 3,
      title: "Azure Workflow Automation",
      description:
        "Integrated React applications with Azure Logic Apps, Dataverse, SharePoint, Power Automate, and secure Azure services to streamline business workflows.",
      image: "AZ",
      tags: ["Azure", "Power Automate", "Dataverse"],
      link: "#",
    },
  ];

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
                className={`project-card ${isVisible ? "animate-fade-in-up" : ""}`}
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
                      <span key={i} className="tag">
                        {tag}
                      </span>
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
  );
}

export default Projects;
