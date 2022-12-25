import React from 'react'
import { Container } from 'react-bootstrap'

function About() {
  return (
    <Container className='about'>
      <h1>About Me</h1>
      <div className='about-text'><p>My name is Stamatia Bampa and I am a <b> Junior Web Developer </b>just starting up and a <b>Graphic Designer</b>. I recently relocated from Athens
        to Brussels, seeking to get insights into another cultural environment and improve myself professionally and
        educationally.</p>
        <p>I am conscious of the creativity around me, sometimes drawing inspiration from even the simplest daily activities. My biggest stimulation comes from art, cartoon movies and fashion which I incorporate in my work.
        </p>
        <p>Several years ago, I obtained my bachelor's degree in Avionics and communications and I learn quickly that I am incredibly eager to learn and constantly educate myself.After my bachelor I also took a course in graphic design and I am expanding my knowledge by taking a course in web development.</p>
        <p>Instantly I realized that web development is a fast-paced and challenging career that focuses on creative problem solving and constant innovation. I immediately fell in love with it because it's a combination of my two great interests, technology and design.</p>
        <p>Through the <b>Web Development </b>course at <b>Intec Brussels</b>, I resumed my learning process and strengthened my computer skills. Among other things, I sharpened my knowledge with HTML, CSS, Bootstrap, JavaScript, React and Nodejs.</p>


        <p> This Portfolio is a collection of some projects I worked on during my studies as a Web Developer but also my works and personal graphic design projects.</p>
        <div className=''>
          <a className='link-about' href='/projects' target="blank" ><span className="">Web Development Projects</span></a>
        </div>
        <div className=''><a className='link-about' href='./document/portfolio2022.pdf' target="blank" ><span className="">Graphic Design Portfolio</span></a></div>
      </div></Container>
  )
}

export default About