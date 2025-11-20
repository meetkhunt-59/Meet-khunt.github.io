import React from 'react';

const MobileNav = ({ isOpen, closeMobileNav }) => {
    return (
        <div class={`mobile-nav ${isOpen ? 'active' : ''}`}>
            <a href="#home" onClick={closeMobileNav}>Home</a>
            <a href="#about" onClick={closeMobileNav}>About</a>
            <a href="#projects" onClick={closeMobileNav}>Projects</a>
            <a href="#contact" onClick={closeMobileNav}>Contact</a>
        </div>
    );
};

export default MobileNav;
