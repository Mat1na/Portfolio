import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { BsArrowDown } from 'react-icons/bs'



function Home() {

  const [show, setShow] = useState(false)

  useEffect(() => {
    setTimeout(() => setShow(true), 11000);
  }, []);


  return (
    <>
      <Row className='head d-flex justify-content-center align-items-center' >
        <Col md={6} ms={12} className="img-home-container d-flex justify-content-center align-items-center">
          <img src='./images/me33.png' className='img-head' />
        </Col>
        <Col md={6} ms={12} className="typewriter-effect-container ">
          <div className='text-center'>
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

          {/* <Col md={12}>
              <div className='btn-container pt-4'>
                {show && <a id="btn" href="/Contact"><span className="noselect">Say Hi!</span><div id="circle"></div></a>}
              </div>
            </Col> */}

        </Col>

        <div className='box'></div>

        {/* <div className='scroll-box'></div> */}

      </Row>

      <Row className='section1'>
        <div className="arrow bounce">
          <a href="#"><BsArrowDown size={'2em'} fill='var(--Dark)' className="arrow p-1 rounded-1 mx-1" /></a>
        </div>
        <span className="arrow-text">Keep scrolling</span>
      </Row>

      <Row className='section2 d-flex justify-content-center align-items-center'>
        <Col md={6} className='section2-text p-5'>
          <h1>My projects</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis purus quis enim porta, vitae dapibus augue viverra. Quisque in molestie est. Praesent ullamcorper tellus nec justo interdum, et tempor justo gravida. In quis consectetur felis.</p>
          <div className='btn2-container'>
            <a id="btn" href='/projects'  ><span className="noselect">Take a look</span><div id="circle"></div></a>
          </div>
        </Col >
        <Col md={6} className='img-section2-container p-5'>
          <img src='./images/code.jpg' className='img-section2' />
        </Col>
      </Row>

      <Row className='section3 d-flex justify-content-center align-items-center'>
        <Col md={6} className='img-section3-container p-5'>
          <img src='./images/Designer-girlgreen.jpg' className='img-section3' />
        </Col>
        <Col md={6} className='section3-text p-5'>
          <h1>My projects</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis purus quis enim porta, vitae dapibus augue viverra. Quisque in molestie est. Praesent ullamcorper tellus nec justo interdum, et tempor justo gravida. In quis consectetur felis.</p>
          <div className='btn3-container'><a id="btn" href='/projects'  ><span className="noselect">Take a look</span><div id="circle"></div></a></div>
        </Col >

      </Row>


    </>
  )
}


export default Home