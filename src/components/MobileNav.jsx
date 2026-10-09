import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const MobileNav = ({ isOpen, closeMobileNav }) => {
    return (
        <div 
            className={`fixed inset-0 bg-[var(--color-arch-bg)] z-40 flex flex-col items-center justify-center transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
            <div className="absolute inset-0 blueprint-grid-small opacity-50 pointer-events-none"></div>
            
            <div className="flex flex-col items-center gap-8 z-10">
                <HashLink smooth to="/#home" onClick={closeMobileNav} className="font-mono text-2xl uppercase tracking-widest text-[var(--color-arch-charcoal)] hover:text-[var(--color-arch-blue)] transition-colors">
                    ./Home
                </HashLink>
                <HashLink smooth to="/#about" onClick={closeMobileNav} className="font-mono text-2xl uppercase tracking-widest text-[var(--color-arch-charcoal)] hover:text-[var(--color-arch-blue)] transition-colors">
                    ./About
                </HashLink>
                <HashLink smooth to="/#projects" onClick={closeMobileNav} className="font-mono text-2xl uppercase tracking-widest text-[var(--color-arch-charcoal)] hover:text-[var(--color-arch-blue)] transition-colors">
                    ./Projects
                </HashLink>
                <HashLink smooth to="/#journey" onClick={closeMobileNav} className="font-mono text-2xl uppercase tracking-widest text-[var(--color-arch-charcoal)] hover:text-[var(--color-arch-blue)] transition-colors">
                    ./Journey
                </HashLink>
                <Link to="/blog" onClick={closeMobileNav} className="font-mono text-2xl uppercase tracking-widest text-[var(--color-arch-charcoal)] hover:text-[var(--color-arch-blue)] transition-colors">
                    ./Blog
                </Link>
                <HashLink smooth to="/#contact" onClick={closeMobileNav} className="font-mono text-2xl uppercase tracking-widest text-[var(--color-arch-charcoal)] hover:text-[var(--color-arch-blue)] transition-colors">
                    ./Contact
                </HashLink>
            </div>
        </div>
    );
};

export default MobileNav;
