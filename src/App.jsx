import { useState } from 'react'
import Navbar from './Navbar/Navbar'
import Body from './Body/Body'
import Home from './Home/Home'
import About from './About/About'
import Project from './Project/Project'
import Contact from './Contact/Contact'
import Assistant from './Assistant/Assistant'
import './style.css'

const pages = {
  Home: <Home />,
  About: <About />,
  Project: <Project />,
  Contact: <Contact />,
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  console.log(`URL form Project: ${API_BASE_URL}`)

  return (
    <>
     <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage}></Navbar>
     <Body>
      {pages[currentPage]}
     </Body>
     <Assistant></Assistant>
    </>
  )
}

export default App
