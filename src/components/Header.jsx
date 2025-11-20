import React, { useState, useEffect } from 'react';

const Header = ({ toggleMobileNav, isMobileNavOpen }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <nav className="navbar">
                    <a href="#home" className="logo">Meet Khunt</a>
                    <div className="nav-links">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <div
                        className={`hamburger ${isMobileNavOpen ? 'active' : ''}`}
                        onClick={toggleMobileNav}
                    >
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
