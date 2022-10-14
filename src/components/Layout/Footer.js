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
      </div>
  
    </>
  )
}

export default Footer