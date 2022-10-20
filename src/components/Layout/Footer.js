import React from 'react'
import {FaInstagram,FaLinkedin,FaGithub} from 'react-icons/fa'

function Footer() {
 
  return (
    <>
      <div className='footer'>
        Made by Matina Bampa &copy; 2022
        <div>
        <a href='https://www.linkedin.com/in/matinabampa/' target="_blank" rel="noreferrer noopener"><FaLinkedin size={'2em'} fill='var(--Dark)' className="social-icon  p-1 rounded-1 mx-1" /></a>

        <a href='https://github.com/Mat1na' target="_blank" rel="noreferrer noopener"><FaGithub size={'2em'} fill='var(--Dark)'  className="social-icon p-1 rounded-1 mx-1" /></a>

        <a href='https://www.instagram.com/matis.ba/' target="_blank" rel="noreferrer noopener"><FaInstagram size={'2em'} fill='var(--Dark)' className="social-icon p-1 rounded-1 mx-1" /></a>
      </div>
      <hr/>
     <div> <a href="https://www.freepik.com/free-vector/designer-girl-concept-illustration_5425969.htm#query=graphic%20design%20girl&position=1&from_view=search">Image by storyset</a> on Freepik </div>
     <div> <a href="https://www.freepik.com/free-vector/code-typing-concept-illustration_10259340.htm#query=coding&position=18&from_view=search&track=sph">Image by storyset</a> on Freepik </div>
     <div> <a href="https://www.freepik.com/free-vector/programmer-working-web-development-code-engineer-programming-python-php-java-script-computer_14723886.htm#query=coder&position=0&from_view=search&track=sph">Image by svstudioart</a> on Freepik </div>
      </div>
   
  
    </>
  )
}

export default Footer