import React from 'react'
import { Routes, Route} from "react-router-dom"
import AppLayout from './components/Layout/AppLayout'
import Contact from "./Pages/Contact"
import About from './Pages/About'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import {Helmet} from "react-helmet";


const TITLE = 'Stamatia Bampa';
function App() {
  return (
    <>
            <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
      <AppLayout> 

    <Routes >
    <Route path="/" element={<Home />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/About" element={<About />} />
    <Route path="/Projects" element={<Projects />} />
  </Routes>

      </AppLayout>
     
    </>
  )
}

export default App