import React from 'react'
import { Card, Container, ListGroup } from 'react-bootstrap'
import { SiNetlify} from 'react-icons/si';
function Projects() {
  return (
   <>
   <Container>
   <Card style={{ width: '18rem' }} className="card-projects">
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="https://movieblender.netlify.app/"> <SiNetlify/>Movieblender</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
   </Container>
   <Container></Container>
   </>
  )
}

export default Projects