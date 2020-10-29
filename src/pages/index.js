import { useState } from "react"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import InfoSection from "../components/InfoSection"
import { HomeObjOne, HomeObjTwo } from "../components/InfoSection/Data"
import Portfolio from "../components/Portfolio"

const { default: Navbar } = require("../components/Navbar")
const { default: Sidebar } = require("../components/Sidebar")

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Navbar toggle={toggle} />
    <HeroSection />
    <InfoSection {...HomeObjOne}/>
    <InfoSection {...HomeObjTwo}/>
    <Portfolio />
    <Footer />
   

    </>
  )
}

export default Home