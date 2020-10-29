import { useState } from "react"
import HeroSection from "../components/HeroSection"
import InfoSection from "../components/InfoSection"

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
    <InfoSection />
    </>
  )
}

export default Home