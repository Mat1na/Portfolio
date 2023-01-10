import React, { useEffect, useState, } from 'react'
import { Col, Row, Container } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import Typewriter from 'typewriter-effect';
import AnimatedPage from '../components/Layout/AnimatedPage'



function Home({ chilrden }) {
  const { ref: boxRef, inView: myBoxIsVisible } = useInView();
  const { ref: img2Ref, inView: myImg2IsVisible } = useInView();
  const { ref: img3Ref, inView: myImg3IsVisible } = useInView();
  console.log(myImg2IsVisible)


  const [show, setShow] = useState(false)
  useEffect(() => {
    setTimeout(() => setShow(true), 11000);
  }, []);


  return (<>
    <AnimatedPage/>
    <Container className="px-4">
      <Row className='head d-flex justify-content-center align-items-center' >
        <Col md={6} xs={12} className="img-home-container d-flex justify-content-center align-items-center">
          <img src='./images/me33.png' className='img-head' alt='me illustration'/>
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
        <div className={`box  ${myBoxIsVisible ? "boxGrow" : ""}`} ref={boxRef}></div>
      </Row>

      < Container className='section1 d-flex justify-content-center align-items-center text-center '>
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
      </ Container>

      {window.innerWidth >= 768? (
        <Row className='section2 d-flex justify-content-center align-items-center'>
          <Col md={6} className='section2-text p-5'>
            <h2>My Web Development projects {console.log(window.innerWidth)}</h2>
            <p>Small collection of my first dive in the world of web development!</p>
            <div className='btn2-container'>
              <a id="btn" href='/projects'  ><span className="noselect2">Take a look</span><div id="circle"></div></a>
            </div>
          </Col >
          <Col md={6} className="img-section-container p-5"  >
            <img src='./images/code.jpg' className={`img-section2 ${myImg2IsVisible ? "imgMove " : ""}`} ref={img2Ref} alt='coding illustration'/>
          </Col>
        </Row>) : (
        <Row className='section2 d-flex justify-content-center align-items-center'>
          <Col md={6} className="img-section-container p-5"  >
            <img src='./images/code.jpg' className={`img-section2 ${myImg2IsVisible ? "imgMove " : ""}`} ref={img2Ref} alt='coding illustration'/>
          </Col>
          <Col md={6} className={`img-section2-text ${window.innerWidth >= 768? "p-5":" px-5 py-2 mb-5"}`}>
            <h2>My Web Development projects {console.log(window.innerWidth)}</h2>
            <p>Small collection of my first dive in the world of web development!</p>
            <div className='btn2-container'>
              <a id="btn" href='/projects' target="blank" ><span className="noselect2">Take a look</span><div id="circle"></div></a>
            </div>
          </Col >
        </Row>)}
      <div className=' m-5'><hr /></div>
      <Row className='section3 d-flex justify-content-center align-items-center '>
        <Col md={6} className={`img-section3-container ${window.innerWidth >= 768? "p-5":"px-5 py-2"}`}>
          <img src='./images/Designer-girlgreen.jpg' className={`img-section3 ${myImg3IsVisible ? "imgMove" : ""}`} ref={img3Ref} alt='designing illustration'/>
        </Col>
        <Col md={6} className={`img-section3-text ${window.innerWidth >= 768? "p-5":" px-5 py-2 mb-5"}`}>
          <h2>My Graphic Design projects </h2>
          <p>A collection of graphic design projects that I worked on during my time as a student, intern and freelancer.</p>
          <div className='btn3-container'><a id="btn" href='./document/portfolio2022.pdf' target="blank" ><span className="noselect2">Take a look</span><div id="circle"></div></a></div>
        </Col >
      </Row>


    </Container>
    
    </>
  )
}


export default Home