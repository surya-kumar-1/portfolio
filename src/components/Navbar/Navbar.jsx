import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <div className="navbar">
                {/* Logo */}
                <div className="Navlogo">
                    <h3 className="text-1">Surya <span className="kumareh">Kumar</span></h3>
                </div>

                {/* Hamburger Menu for smaller screens */}
                <div className="hamburger" onClick={toggleMenu}>
                    <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </div>

                {/* Navigation Links */}
                <div className={`rightside-content ${menuOpen ? 'show' : ''}`}>
                    <ul>
                        <li className="l-1"><Link to="/">Home</Link></li>
                        <li className="dropdown">
                            Works
                            <i className="fas fa-chevron-down"></i> {/* Down arrow icon */}
                            <div className="dropdown-container">
                                <div><Link to="/enchroma">Brand Identity</Link></div>
                                <div><Link to='/LamaAi'>Logofolio</Link></div>
                                <div><Link to='/SocialMedia'>Social Media</Link></div>
                                <div><Link to='/MainIllustration'>Illustation and Custom Art</Link></div>
                            </div>
                        </li>
                        <li className="l-3"><Link to="/about">About</Link></li>
                        <li className="l-4"><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
