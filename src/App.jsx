 
 
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home/Home'
import { useState } from 'react';

function App() {
   

  

  return  (
      
<>
<h1 className='msg'>Working on PC Version</h1>
 <BrowserRouter basename="/EV_Connect">
      <div className='main'>
        <Navbar/>
  
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
      </div>
      
    </BrowserRouter>
</>
      
    )

  
}

export default App
