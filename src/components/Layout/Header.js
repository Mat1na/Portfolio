import React from 'react'
import { Nav, Navbar } from "react-bootstrap"
import { BiCodeCurly } from 'react-icons/bi'
import { FaInstagram, FaLinkedin, FaGithub, } from 'react-icons/fa'
import AnimatedPage from './AnimatedPage'

function Header() {

  return (<>
    <AnimatedPage />
    <Navbar bg="none" expand="lg" className='header navbar-light  d-flex justify-content-around'>

      <Navbar.Brand href="/">Mat1na <BiCodeCurly /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggler' >
        <span className='toggler-icon top-bar'></span>
        <span className='toggler-icon middle-bar'></span>
        <span className='toggler-icon bottom-bar'></span>
        {/* <MdOutlineSegment size={'2em'} fill='var(--Dark)'  className="social-icon" /> */}
        {/* <MdOutlineClose size={'2em'} fill='var(--Dark)'  className="social-icon" /> */}
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/About">About Me</Nav.Link>
          <Nav.Link href="/Projects">Projects</Nav.Link>
          <Nav.Link href="/Contact">Say Hi!</Nav.Link>
          <Nav.Link href="./document/cvStamatiaBampa.pdf" target="blank">CV</Nav.Link>
        </Nav>
        <Nav className='d-flex flex-row social'>
          <a href='https://www.linkedin.com/in/matinabampa/' target="_blank" rel="noreferrer noopener"><FaLinkedin size={'2em'} fill='var(--Dark)' className="social-icon  p-1 rounded-1 mx-1" /></a>
          <a href='https://github.com/Mat1na' target="_blank" rel="noreferrer noopener"><FaGithub size={'2em'} fill='var(--Dark)' className="social-icon p-1 rounded-1 mx-1" /></a>
          <a href='https://www.instagram.com/matis.ba/' target="_blank" rel="noreferrer noopener"><FaInstagram size={'2em'} fill='var(--Dark)' className="social-icon p-1 rounded-1 mx-1" /></a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  </>
  );
}


export default Header