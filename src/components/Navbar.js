import React from 'react';
import {useRef} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import { useLocation } from 'react-router-dom';
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
                <a href="/" className={isActive('/') ? 'active' : ''}>Home</a>
                <a href="/programs" className={isActive('/programs') ? 'active' : ''}>Programs</a>
                <a href="/about" className={isActive('/about') ? 'active' : ''}>About</a>
                <a href="/contact" className={isActive('/contact') ? 'active' : ''}>Contact Us</a>
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
