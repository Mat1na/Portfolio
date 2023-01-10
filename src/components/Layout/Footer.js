import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

function Footer() {

  return (
    <>
      <div className='footer'>
      &copy; 2022 Matina Bampa 
        <div>
          <a href='https://www.linkedin.com/in/matinabampa/' target="_blank" rel="noreferrer noopener"><FaLinkedin size={'2em'} fill='var(--Dark)' className="social-icon  p-1 rounded-1 mx-1" /></a>

          <a href='https://github.com/Mat1na' target="_blank" rel="noreferrer noopener"><FaGithub size={'2em'} fill='var(--Dark)' className="social-icon p-1 rounded-1 mx-1" /></a>

          <a href='https://www.instagram.com/matis.ba/' target="_blank" rel="noreferrer noopener"><FaInstagram size={'2em'} fill='var(--Dark)' className="social-icon p-1 rounded-1 mx-1" /></a>
        </div>
        <hr />
        <div className='d-inline m-2'>
          <a href="https://www.freepik.com/free-vector/designer-girl-concept-illustration_5425969.htm#query=graphic%20design%20girl&position=1&from_view=search">Image by storyset</a> on Freepik </div>
        <div className='d-inline m-2'> <a href="https://www.freepik.com/free-vector/code-typing-concept-illustration_10259340.htm#query=coding&position=18&from_view=search&track=sph">Image by storyset</a> on Freepik </div>
        <div className='d-inline m-2'> <a href="https://www.freepik.com/free-vector/programmer-working-web-development-code-engineer-programming-python-php-java-script-computer_14723886.htm#query=coder&position=0&from_view=search&track=sph">Image by svstudioart</a> on Freepik </div>
        <div className='d-inline m-2'>
          <a href="https://www.freepik.com/free-vector/hand-drawn-business-icons-collection_1091815.htm#query=coding%20icons&position=28&from_view=search&track=sph">Image by dooder</a> on Freepik </div>
      </div>


    </>
  )
}

export default Footer