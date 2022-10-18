import React from 'react'
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import { SiNetlify,SiVercel} from 'react-icons/si';
import { FaInstagram, FaLinkedin, FaGithub, } from 'react-icons/fa'


function Projects() {
  return (
   <>
   <Container>
 <Row className='justify-content-center web-sites' > 
  <Col className='d-flex justify-content-center align-items-center'>
 <Card style={{ width: '18rem' }} className="card-projects">
      <Card.Img variant="top" src='./images/movieapp.jpg' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
        <Card.Body>
        <Card.Link href="https://movieblender.netlify.app/" target="_blank"> <SiNetlify/> Movieblender</Card.Link>
        <Card.Link href="https://github.com/Mat1na/MovieApp" target="_blank"><FaGithub fill='var(--Dark)' /> Github</Card.Link>
      </Card.Body>
    </Card>
    </Col>
    <Col className='d-flex justify-content-center align-items-center'>
    <Card style={{ width: '18rem' }} className="card-projects">
      <Card.Img variant="top" src='./images/newsapp.jpg' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
        <Card.Body>
        <Card.Link href="https://the-today-news.vercel.app/country/US" target="_blank"> <SiVercel/> TheTodayNews</Card.Link>
        <Card.Link href="https://github.com/Mat1na/NewsAppFrontForDeploy" target="_blank"><FaGithub fill='var(--Dark)' /> Github</Card.Link>
      </Card.Body>
    </Card>
    </Col>
    <Col className='d-flex justify-content-center align-items-center'>
    <Card style={{ width: '18rem' }} className="card-projects">
      <Card.Img variant="top" src='./images/movieapp.jpg' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
        <Card.Body>
        <Card.Link href="https://movieblender.netlify.app/" target="_blank"> <SiNetlify/> Movieblender</Card.Link>
        <Card.Link href="https://github.com/Mat1na/MovieApp" target="_blank"><FaGithub fill='var(--Dark)' /> Github</Card.Link>
      </Card.Body>
    </Card>
    </Col>
 </Row>
   </Container>
   <Container></Container>
   </>
  )
}

export default Projects