import React from 'react';
import { Link } from 'react-router-dom';
//import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>My Portfolio</h1>
            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/projects">projects</Link></li>
                <li><Link to="/about">about</Link></li>
                <li><Link to="/contact">contact</Link></li>
            </ul>
        </nav>
    );
};
export default Navbar;