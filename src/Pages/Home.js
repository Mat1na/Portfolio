import React, { useEffect, useRef, useState,  } from 'react'
import {Col, Row, Container } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import Typewriter from 'typewriter-effect';




function Home({chilrden}) {
  const { ref: boxRef, inView: myBoxIsVisible} = useInView();
  const { ref: img2Ref, inView: myImg2IsVisible} = useInView();
  const { ref: img3Ref, inView: myImg3IsVisible} = useInView();


  const [show, setShow] = useState(false)
  useEffect(() => {
    setTimeout(() => setShow(true), 11000);
  }, []);


  return (
    <>
      <Row className='head d-flex justify-content-center align-items-center' >
        <Col md={6} xs={12} className="img-home-container d-flex justify-content-center align-items-center">
          <img src='./images/me33.png' className='img-head' />
        </Col>
        <Col md={6} xs={12} className="typewriter-effect-container ">
          <div className='text-center typewriter'>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hi, my name is Matina.<br/>")
                  // .pauseFor(500)
                  // .deleteAll()
                  .typeString(" I am a junior Web Developer<br/>")
                  // .pauseFor(500)
                  .typeString(" and a graphic designer!")
                  .start();
              }}
            />
          </div>
          <div className='btn-container d-flex justify-content-center align-items-center pt-4'>
            {show && <a id="btn" href="/Contact"><span className="noselect">Say Hi!</span><div id="circle"></div></a>}
          </div>
        </Col>
        <div className={`box  ${myBoxIsVisible? "boxGrow":""}`} ref={boxRef}></div>
      </Row>

      < Container className='section1 d-flex justify-content-center align-items-center text-center'>
        <div id="wrapper" >
          <div id="wrapper-inner">
            <Col xs={12} id="scroll-title" className='d-flex justify-content-center align-items-center text-center '>
              Keep Scrolling
            </Col>
            <Col md={12} id="scroll-down" className='d-flex justify-content-center align-items-center text-center pt-2'>
              <span className="arrow-down">
              </span>
            </Col>
          </div>
        </div>
      </ Container>

      <Row className='section2 d-flex justify-content-center align-items-center'>
        <Col md={6} className='section2-text p-5'>
          <h1>My projects</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis purus quis enim porta, vitae dapibus augue viverra. Quisque in molestie est. Praesent ullamcorper tellus nec justo interdum, et tempor justo gravida. In quis consectetur felis.</p>
          <div className='btn2-container'>
            <a id="btn" href='/projects'  ><span className="noselect">Take a look</span><div id="circle"></div></a>
          </div>
        </Col >
        <Col md={6} className="img-section-container p-5"  >
          <img src='./images/code.jpg' className={`img-section2 ${myImg2IsVisible? "imgMove":""}`}  ref={img2Ref} />
        </Col>
      </Row>
<div className='p-5'><hr/></div>
      <Row className='section3 d-flex justify-content-center align-items-center'>
        <Col md={6} className='img-section3-container p-5'>
          <img src='./images/Designer-girlgreen.jpg' className={`img-section3 ${myImg3IsVisible? "imgMove":""}`}  ref={img3Ref}  />
        </Col>
        <Col md={6} className='section3-text p-5'>
          <h1>My projects </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis purus quis enim porta, vitae dapibus augue viverra. Quisque in molestie est. Praesent ullamcorper tellus nec justo interdum, et tempor justo gravida. In quis consectetur felis.</p>
          <div className='btn3-container'><a id="btn" href='/projects'  ><span className="noselect">Take a look</span><div id="circle"></div></a></div>
        </Col >
      </Row>


    </>
  )
}


export default Home