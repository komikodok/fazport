import { useState } from 'react'
import Navbar from './Navbar/Navbar'
import Body from './Body/Body'
import Home from './Home/Home'
import About from './About/About'
import Project from './Project/Project'
import Contact from './Contact/Contact'
import './style.css'

const pages = {
  Home: <Home />,
  About: <About />,
  Project: <Project />,
  Contact: <Contact />,
}

function App() {
  const [currentPage, setCurrentPage] = useState("");

  return (
    <>
     <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage}></Navbar>
     <Body>
      {pages[currentPage]}
     </Body>
    </>
  )
}

export default App
