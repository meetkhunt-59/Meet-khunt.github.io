import React from 'react';
import { HashLink } from 'react-router-hash-link';

const MobileNav = ({ isOpen, closeMobileNav }) => {
    return (
        <div className={`mobile-nav ${isOpen ? 'active' : ''}`}>
            <HashLink smooth to="/#home" onClick={closeMobileNav}>Home</HashLink>
            <HashLink smooth to="/#about" onClick={closeMobileNav}>About</HashLink>
            <HashLink smooth to="/#projects" onClick={closeMobileNav}>Projects</HashLink>
            <HashLink smooth to="/#contact" onClick={closeMobileNav}>Contact</HashLink>
        </div>
    );
};

export default MobileNav;
