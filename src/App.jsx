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

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

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
