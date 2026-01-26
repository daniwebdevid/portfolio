import { useState } from 'react'
import Navbar from "./components/Navbar"
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Specs from './components/Specs'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='text-white'>
      <Navbar/>
      <AboutMe/>
      <Specs/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
