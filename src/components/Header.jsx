import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';

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
                    <HashLink smooth to="/#home" className="logo">Meet Khunt</HashLink>
                    <div className="nav-links">
                        <HashLink smooth to="/#home">Home</HashLink>
                        <HashLink smooth to="/#about">About</HashLink>
                        <HashLink smooth to="/#projects">Projects</HashLink>
                        <HashLink smooth to="/#contact">Contact</HashLink>
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
