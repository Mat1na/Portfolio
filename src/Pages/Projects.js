import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { SiNetlify, SiVercel } from 'react-icons/si';
import {FaGithub, } from 'react-icons/fa'
import AnimatedPage from '../components/Layout/AnimatedPage'

function Projects() {
  return (
    <>
    <AnimatedPage/>
      <Container className='web-sites-section'>
        <Row className='justify-content-center web-sites' >
          <Col className='d-flex justify-content-center align-items-center m-2'>
            <Card style={{ width: '40rem', height: '40rem' }} className="card-projects me-4">
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
          <Col className='d-flex justify-content-center align-items-center m-2'>
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
          <Col className='d-flex justify-content-center align-items-center m-2'>
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
                <Card.Link href="https://s-globe-front.vercel.app" target="_blank"> <SiVercel fill='var(--Dark)' />Visit sGlobe Lab</Card.Link><br />
                <Card.Link href="hhttps://github.com/Mat1na/sGlobeFront" target="_blank"><FaGithub fill='var(--Dark)' />View source code (Front-End )code on Github</Card.Link>
                <Card.Link href="https://github.com/Mat1na/sGlobeServer" target="_blank"><FaGithub fill='var(--Dark)' />View source code (Back-End code) on Github</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default Projects