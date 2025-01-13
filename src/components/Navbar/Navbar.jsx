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
                    <Link to="/portfolio/"><h3 className="text-1">Surya <span className="kumareh">Kumar</span></h3></Link>
                </div>

                {/* Hamburger Menu for smaller screens */}
                <div className="hamburger" onClick={toggleMenu}>
                    <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </div>

                {/* Navigation Links */}
                <div className={`rightside-content ${menuOpen ? 'show' : ''}`}>
                    <ul>
                        <li className="l-1"><Link to="/portfolio/">Home</Link></li>
                        <li className="dropdown">
                            Works
                            <i className="fas fa-chevron-down"></i> {/* Down arrow icon */}
                            <div className="dropdown-container">
                                <div><Link to="/portfolio/enchroma">Brand Identity</Link></div>
                                <div><Link to='/portfolio/LamaAi'>Logofolio</Link></div>
                                <div><Link to='/portfolio/SocialMedia'>Social Media</Link></div>
                                <div><Link to='/portfolio/MainIllustration'>Illustation and Custom Art</Link></div>
                            </div>
                        </li>
                        <li className="l-3"><Link to="/portfolio/about">About</Link></li>
                        <li className="l-4"><Link to="/portfolio/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
