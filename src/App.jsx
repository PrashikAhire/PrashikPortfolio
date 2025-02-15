import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import GetInTouch from './components/GetInTouch'
 
const App = () => {
  return (
    //following class name is used to make icons
    //when we over mouse on text we will see cyan color 
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* directly copy code for background from another website  */}
      <div className='fixed top-0 -z-10 h-full w-full'>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
     <div className='container mx-auto px-8'>
     <Navbar/>
     <Hero/>
     <About/>
     <Technologies/>
    <Projects/>
<Experience/>
     <Contact/>
     
     </div>
    </div>
  )
}

export default App
