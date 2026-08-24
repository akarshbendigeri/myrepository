import React, { useState } from "react";
import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css";

function Navbar() {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <BootstrapNavbar expand="lg" sticky="top" className="navbar-custom">
      <Container>
        <BootstrapNavbar.Brand href="#" className="brand-text">
          <span className="gradient-text fw-bold">AKARSH BENDIGERI</span>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle
          aria-controls="basic-navbar-nav"
          expanded={expanded}
          onClick={() => setExpanded(expanded ? false : true)}
        />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" onClick={handleNavClick}>
              Home
            </Nav.Link>
            <Nav.Link href="#about" onClick={handleNavClick}>
              About
            </Nav.Link>
            <Nav.Link href="#skills" onClick={handleNavClick}>
              Skills
            </Nav.Link>
            <Nav.Link href="#projects" onClick={handleNavClick}>
              Projects
            </Nav.Link>
            <Nav.Link href="#contact" onClick={handleNavClick}>
              Contact
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
