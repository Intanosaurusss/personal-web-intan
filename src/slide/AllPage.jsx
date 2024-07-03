import React from 'react'
import NavbarComponent from '../components/NavbarComponents'
import Home from './Home'
import About from './About'
import Galeriporto from './Galeriporto'
// import Portfolio from './Portfolio'
import FooterComponents from '../components/FooterComponents'

const AllPage = () => {
  return (
    <>
    <NavbarComponent />
    <Home />
    <About />
    <Galeriporto />
    <FooterComponents />
    {/* <Portfolio /> */}
    </>
  )
}

export default AllPage
