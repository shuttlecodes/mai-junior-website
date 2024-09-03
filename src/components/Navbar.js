import React from 'react';
import {useRef} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../index.css"

function Navbar() {
    const navRef = useRef();
    const location = useLocation();

    const showNavbar = () =>
    {
        navRef.current.classList.toggle("responsive_nav");
    }

    const isActive = (path) => location.pathname === path;

    return (
        <header>
            <h3>Logo</h3>
            <nav ref={navRef}>
                <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
                <Link to="/programs" className={isActive('/programs') ? 'active' : ''}>Programs</Link>
                <Link to="/about" className={isActive('/about') ? 'active' : ''}>About</Link>
                <Link to="/temp-contact" className={isActive('/temp-contact') ? 'active' : ''}>Contact</Link>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;
