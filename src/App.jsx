import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Home from './Pages/Home'
import ManCloths from './Pages/ManCloths'




function App() {
  return (
    <div>
      <Header/>
      
      {/* <Home/> */}
      {/* <ManCloths/> */}
     
      



      <Routes>
        <Route>
        <Route path='/' element={<Home />} />
        <Route path='/ManCloths' element={<ManCloths />} />
        </Route>
      </Routes>

      <Footer/>
    </div>
    
  )
  
  
  
}

export default App