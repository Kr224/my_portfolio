import React from 'react';
import {useEffect, useState} from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../Assets/images/nav-icon1.svg';
import navIcon2 from '../Assets/images/nav-icon2.svg';
import navIcon3 from '../Assets/images/nav-icon3.svg';


export const NavBar = () => {
    const [activeLink, setActiveLink] =  useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        < Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
            <Navbar.Toggle>
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#Home" className={activeLink === 'home' ? 'active-navbar-link' : 'navbar-link'} onClick = { () => onUpdateActiveLink ('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active-navbar-link' : 'navbar-link'} onClick = { ()=> onUpdateActiveLink ('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active-navbar-link' : 'navbar-link'} onClick = { ()=> onUpdateActiveLink ('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/karishnigupta/"><img src={navIcon1} alt="" /></a>
                            <a href="https://github.com/Kr224"><img src={navIcon2} alt="" /></a>
                            <a href="https://www.instagram.com/kr__224/"><img src={navIcon3} alt="" /></a>
                        </div>
                        <a href="#connect">
                            <button className="" onClick={() => onUpdateActiveLink('connect')}>Let's Connect</button>
                        </a>
                        {/*<button className="" onClick = {() => console.log("Connect")}>Lets Connect</button>*/}
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

