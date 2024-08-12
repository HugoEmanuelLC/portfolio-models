// Dependencies
import { useState, useRef } from 'react'
import {  Routes, Route } from 'react-router-dom'
// Components
import Pub from './components/pub'
import Footer from './components/footer'
// Screens
import Home from './screens/home'


function App() {
  // NAVBAR
  const navBar = useRef()
  const openAndCloseNavBar = () => {
      navBar.current.classList.toggle('close_nav')
  }
  const closeNavbar = () => {
    navBar.current.classList.add('close_nav')
  }

  return (
    <>
      <Pub />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<div className='container'><h1>Erreur 404</h1></div>} />
        </Routes>
      </main>


      <Footer />
    </>
  )
}

export default App;