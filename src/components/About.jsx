import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";

function About() {
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

    const section = document.querySelector("#about");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="about" className="about-section section-spacing">
      <Container>
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>

        <Row className="align-items-center gap-4">
          <Col lg={5} className={isVisible ? "animate-slide-in-left" : ""}>
            <div className="about-highlights">
              <div className="highlight-item">
                <h4>5+</h4>
                <p>Years Experience</p>
              </div>
              <div className="highlight-item">
                <h4>50+</h4>
                <p>Reusable Components</p>
              </div>
              <div className="highlight-item">
                <h4>70%</h4>
                <p>Latency Improvement</p>
              </div>
            </div>

            {/* <div className="about-image-wrapper">
              <div className="about-image">
                <div className="image-placeholder">📱</div>
              </div>
            </div> */}
          </Col>

          <Col lg={6} className={isVisible ? "animate-slide-in-right" : ""}>
            <div className="about-content">
              {/* <h3 className="about-subtitle">Software Engineer III</h3> */}
              <p className="about-text">
                I am a software engineer with 5+ years of experience building
                scalable, high-performance web applications with React.js and
                Microsoft Azure. I architect modular UI components, streamline
                complex business workflows, and deliver secure, user-centric
                solutions that improve operational efficiency.
              </p>

              <p className="about-text">
                My work spans Azure API Management, App Services, Key Vault,
                Power Automate, Dataverse, SharePoint, Okta authentication, and
                performance-focused SQL optimization. I also mentor developers
                and collaborate across teams to turn complex requirements into
                dependable products.
              </p>

              <p className="about-text">
                At NextGen Digital Solutions, I architect React applications,
                improve application latency by 70%, and help teams ship secure,
                maintainable software. Previously, at Ultimez, I built
                responsive React and Ionic applications, optimized Lighthouse
                performance.
              </p>

              {/* <p className="about-text">
                Certified in Microsoft Azure Fundamentals (AZ-900) and Power
                Apps Fundamentals (PL-900), I hold a Master of Computer
                Applications from New Horizon College of Engineering and a
                Bachelor of Computer Applications from Rukmini Shetty Memorial
                College.
              </p> */}

              {/* <div className="about-highlights">
                <div className="highlight-item">
                  <h4>5+</h4>
                  <p>Years Experience</p>
                </div>
                <div className="highlight-item">
                  <h4>50+</h4>
                  <p>Reusable Components</p>
                </div>
                <div className="highlight-item">
                  <h4>70%</h4>
                  <p>Latency Improvement</p>
                </div>
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
