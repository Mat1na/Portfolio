import React, { useEffect } from 'react'
import { Nav, Navbar, Container } from "react-bootstrap"
import { BiCodeCurly } from 'react-icons/bi'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

function Header() {

  return (
    <Navbar bg="none" expand="lg" className='header navbar-light'>

      <Navbar.Brand href="/">Mat1na <BiCodeCurly /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className='nav-border' />
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/About">About</Nav.Link>
          <Nav.Link href="/Projects">Projects</Nav.Link>
          <Nav.Link href="/Contact">Say Hi!</Nav.Link>
        </Nav>
        <Nav className='d-flex flex-row social'>

          <a href='https://www.linkedin.com/in/matinabampa/' target="_blank" rel="noreferrer noopener"><FaLinkedin size={'2em'} fill='var(--Dark)'  className="social-icon  p-1 rounded-1 mx-1" /></a>

          <a href='https://github.com/Mat1na' target="_blank" rel="noreferrer noopener"><FaGithub size={'2em'} fill='var(--Dark)' className="social-icon p-1 rounded-1 mx-1" /></a>

          <a href='https://www.instagram.com/matis.ba/' target="_blank" rel="noreferrer noopener"><FaInstagram size={'2em'} fill='var(--Dark)'  className="social-icon p-1 rounded-1 mx-1" /></a>


        </Nav>
      </Navbar.Collapse>

    </Navbar>
  );
}


export default Header