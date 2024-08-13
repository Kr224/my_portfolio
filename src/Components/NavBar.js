import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import navIcon1 from '../Assets/images/nav-icon1.svg';
import navIcon2 from '../Assets/images/nav-icon2.svg';
import navIcon3 from '../Assets/images/nav-icon3.svg';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, seScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      seScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
      <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                  as={Link}
                  to="/"
                  className={activeLink === 'home' ? 'active-navbar-link' : 'navbar-link'}
                  onClick={() => onUpdateActiveLink('home')}
              >
                Home
              </Nav.Link>
              <Nav.Link
                  as={Link}
                  to="/skills"
                  className={activeLink === 'skills' ? 'active-navbar-link' : 'navbar-link'}
                  onClick={() => onUpdateActiveLink('skills')}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                  as={Link}
                  to="/projects"
                  className={activeLink === 'projects' ? 'active-navbar-link' : 'navbar-link'}
                  onClick={() => onUpdateActiveLink('projects')}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/karishnigupta/">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://github.com/Kr224">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://www.instagram.com/kr__224/">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <Link to="/contact">
              <button onClick={() => onUpdateActiveLink('contact')}>Let's Connect</button>
            </Link>
          </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};
