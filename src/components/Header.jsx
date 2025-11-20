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
        <header class={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div class="container">
                <nav class="navbar">
                    <a href="#home" class="logo">Meet Khunt</a>
                    <div class="nav-links">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <div
                        class={`hamburger ${isMobileNavOpen ? 'active' : ''}`}
                        onClick={toggleMobileNav}
                    >
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
