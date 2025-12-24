import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const MobileNav = ({ isOpen, closeMobileNav }) => {
    return (
        <div className={`mobile-nav ${isOpen ? 'active' : ''}`}>
            <HashLink smooth to="/#home" onClick={closeMobileNav} className="font-mono">./Home</HashLink>
            <HashLink smooth to="/#about" onClick={closeMobileNav} className="font-mono">./About</HashLink>
            <HashLink smooth to="/#projects" onClick={closeMobileNav} className="font-mono">./Projects</HashLink>
            <Link to="/blog" onClick={closeMobileNav} className="font-mono">./Blog</Link>
            <HashLink smooth to="/#contact" onClick={closeMobileNav} className="font-mono">./Contact</HashLink>
        </div>
    );
};

export default MobileNav;
