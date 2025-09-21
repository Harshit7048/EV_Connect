import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './Navbar.css'


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
    </div>
}