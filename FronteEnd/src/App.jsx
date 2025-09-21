 
 
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home/Home'

function App() {
   

  return  (
   
      <BrowserRouter>
      <div className='main'>
        <Navbar/>
  
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
      </div>
      
    </BrowserRouter>
    )

  
}

export default App
