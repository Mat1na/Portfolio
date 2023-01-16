import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { SiNetlify, SiVercel } from 'react-icons/si';
import { FaGithub, } from 'react-icons/fa'
import AnimatedPage from '../components/Layout/AnimatedPage'

function Projects() {
  return (
    <>
      <AnimatedPage />
             <Container className='web-sites-section'>
             < Col className='section1 d-flex justify-content-center align-items-center text-center pro-scroll'>
        <div id="wrapper d-flex justify-content-center align-items-center text-center" >
          <div id="wrapper-inner ">
            <Col md={12} id="scroll-title" className=' '>
              Keep Scrolling
            </Col>
            <Col md={12} id="scroll-down" className='d-flex justify-content-center align-items-center text-center '>
              <span className="arrow-down ">
              </span>
            </Col>
          </div>
        </div>
      </ Col>
        <Row className='justify-content-center web-sites' >

          <Col  className='d-flex justify-content-center align-items-center m-2'>
            <Card style={{ width: '40rem', height: '40rem' }} className="card-projects ">
              <div className='img-hover-zoom'><Card.Img variant="top" className='project-img' src='./images/portfolio.jpg' /></div>
              <Card.Body>
                <Card.Title>My Portfolio</Card.Title>
                <Card.Text>

                  My portfolio was created as a React application <br />
                  Technologies used:
                  <ul>
                    <li>React router</li>
                    <li>JSX</li>
                    <li>Bootstrap 5</li>
                    <li>CSS3</li>
                    <li>CSS animations</li>
                    <li>React Icons</li>
                    <li>npm pakcages: eg intersection-observer , typewriter-effect, framer-motion</li>
                  </ul>

                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href="/" > <SiVercel fill='var(--Dark)' /> MyPortfolio</Card.Link>
                <Card.Link href="https://github.com/Mat1na/Portfolio" target="_blank"><FaGithub fill='var(--Dark)' />View source code on Github</Card.Link>
              </Card.Body>
            </Card>

          </Col>
          <Col  className='d-flex justify-content-center align-items-center m-2'>
            <Card style={{ width: '40rem', height: '40rem' }} className="card-projects">
              <div className='img-hover-zoom'><Card.Img variant="top" src='./images/movieapp.jpg' /></div>
              <Card.Body>
                <Card.Title>MovieBlender</Card.Title>
                <Card.Text>
                  MovieBlender is React project which works as a movie finder by genre catgories or custom search <br />
                  Technologies used:
                  <ul>
                    <li>React router</li>
                    <li>JSX</li>
                    <li>Bootstrap 5</li>
                    <li>CSS3</li>
                    <li>RestFull API</li>
                    <li>Fetching content from free movie database</li>
                  </ul>
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href="https://movieblender.netlify.app/" target="_blank"> <SiNetlify />Visit Movieblender</Card.Link>
                <Card.Link href="https://github.com/Mat1na/MovieApp" target="_blank"><FaGithub fill='var(--Dark)' />View source code on Github</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col  className='d-flex justify-content-center align-items-center m-2'>
            <Card style={{ width: '40rem', height: '50rem' }} className="card-projects">
              <div className='img-hover-zoom'><Card.Img variant="top" src='./images/sGlobe.jpg' /></div>
              <Card.Body>
                <Card.Title>sGlobe Lab</Card.Title>
                <Card.Text>
                  Mern Stack project. Redesign and update of sGlobe Lab an already existing web site and additional creation of custom CMS dashboard for the Database manipulation from the administrator.
                  Technologies used:
                  <ul>
                    <li>ReactJS</li>
                    <li>MongoDB</li>
                    <li>ExpressJS</li>
                    <li>NodeJS</li>
                    <li>bcrypt</li>
                    <li>JSON Web Token</li>
                    <li>HTTP Requests</li>
                    <li>Bootstrap 5</li>
                    <li>CSS3</li>
                    <li>CSS animations</li>
                    <li>npm packages: eg intersection-observer , typewriter-effect, Lazy-load,hash-link</li>
                  </ul>
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href="https://www.sglobelab.com" target="_blank"> <SiVercel fill='var(--Dark)' />Visit sGlobe Lab</Card.Link><br />
                <Card.Link href="hhttps://github.com/Mat1na/sGlobeFront" target="_blank"><FaGithub fill='var(--Dark)' />View source code (Front-End )code on Github</Card.Link>
                <Card.Link href="https://github.com/Mat1na/sGlobeServer" target="_blank"><FaGithub fill='var(--Dark)' />View source code (Back-End code) on Github</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col className='d-flex justify-content-center align-items-center m-2'>
            <Card style={{ width: '40rem', height: '30rem' }} className="card-projects">
              <div className='img-hover-zoom'><Card.Img variant="top" src='./images/portfolioGD.jpg' /></div>
              <Card.Body>
                <Card.Title>Graphic design Projects</Card.Title>
                <Card.Text>
                  This is my Graphic design Portfolio that was made with Adobe Illustrator.
                  You can find here a collection of graphic design projects that I worked on during my time as a student, intern and freelancer.<br /><br />
                  Projects were created with:
                  <ul>
                    <li>Adobe Illustrator</li>
                    <li>Adobe Photoshop</li>
                    <li>Adobe InDesign</li>
                  </ul>
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href="./document/portfolio2022.pdf" > Take a look</Card.Link>
                
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      

    </>
  )
}

export default Projects