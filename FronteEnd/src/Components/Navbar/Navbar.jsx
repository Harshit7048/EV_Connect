import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './Navbar.css'
import ham from '../assets/hamburger.png'


export default function Navbar() {
    return <div className="navbar">
       
        <div className="logo">
            LOGO
        </div>
        <nav>
            <Link to="/">Home</Link>  
            <Link to="/about">About</Link> 
            <Link to="/contact">Contact</Link>
        </nav>
        <div className="signup-box">
            <button className='common-btn'>Login</button>
        </div>
        <div className="ham-box" 
        onClick={()=>{
            document.getElementById('ham').classList.add('active-ham')
        }}
        >
            <img src={ham} alt="" />
        </div>

        <div className="ham" id='ham'>
            <div className="cut" 
             onClick={()=>{
            document.getElementById('ham').classList.remove('active-ham')
        }}
            >X</div>
            <div className="ham-nav">
                   <Link to="/">Home</Link>  
            <Link to="/about">About</Link> 
            <Link to="/contact">Contact</Link>
            </div>
            <div className="ham-login">
            <button className='common-btn'>Login</button>

            </div>
        </div>
    </div>
}