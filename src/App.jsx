import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Blogs from './Pages/Blogs'
import { Route, Routes } from 'react-router-dom'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Body from './Component/Body'
import Loging from './Pages/Loging'

function App() {
  return (
    <div>
      <Header/>
      <Body/>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/contact' element={<Loging />} />
        
      </Routes>

      <Footer/>
    </div>
  )
}

export default App