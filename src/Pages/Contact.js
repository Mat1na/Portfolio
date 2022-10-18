import React, { useRef } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { BsPhoneVibrateFill, BsPinMapFill } from 'react-icons/bs'
import { MdAlternateEmail } from 'react-icons/md'
import emailjs from '@emailjs/browser';

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gi5govu', 'template_z0tk61g', form.current, 'PZWfLcE2WxSv3m0Dv')
      .then((result) => {
        console.log(result.text);
        e.target.reset()
      }, (error) => {
        console.log(error.text);
      });
  }
  return (
    <>
      <div className='contact-page '>
        <Row className='title-container w-100'>
        <Col md={12} className='pb-2'>
          <div className='contact-me pb-4'>
            Contact me
          </div>
          </Col>
          <Col md={12} className='pb-2'>
          <h4 className='pb-4'>
           Do you want to hire me or just say hi?<br/>
           Feel free to send me an e-mail or call me! 👇
          </h4>
          </Col>
          <Col md={12} className='pb-2'>
            <a href="tel:+32478123137" className='mail-link'><BsPhoneVibrateFill size={'2em'} fill='var(--Light)' className="social-icon p-1 rounded-1 mx-1" />+32 478 12 31 37</a>
          </Col>
          <Col md={12} className='pb-2'>
            <a href='mailto:matina.bamba@gmail.com' subject="subject text" className='mail-link'><MdAlternateEmail size={'2em'} fill='var(--Light)' className="social-icon p-1 rounded-1 mx-1" />matina.bamba@gmail.com</a>
          </Col>
          <Col md={12} className='pb-5'>
            <p><BsPinMapFill size={'2em'} fill='var(--Light)' className="social-icon p-1 rounded-1 mx-1" />Dilbeek, Belgium</p>
          </Col>
        </Row>
        <Container className='contact-container'>
          <div className='contact-bg'></div>
          <Form className='form' ref={form} onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Your Name</Form.Label>
              <Form.Control name="user_name" type="text" placeholder="Enter your name here..." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control name="user_email" type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Write something</Form.Label>
              <Form.Control as="textarea" name="message" rows={3} />
            </Form.Group>
            <Button as="input" type="submit" value="Submit" variant="outline-success w-100" />
          </Form>
        </Container>
      </div>
    </>
  )
}

export default Contact