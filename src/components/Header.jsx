import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
        <header className="fixed top-6 left-0 w-full z-50 flex justify-center px-4 pointer-events-none">
            <nav className={`pointer-events-auto flex items-center justify-between border-arch bg-[#F9F8F3] transition-all duration-300 ${isScrolled ? 'py-2 px-4 shadow-[4px_4px_0_0_var(--color-arch-charcoal)]' : 'py-3 px-6'}`}>
                <HashLink smooth to="/#home" className="font-mono text-sm uppercase tracking-wider font-bold mr-8 hover:text-[var(--color-arch-blue)] transition-colors">
                    MK
                </HashLink>
                
                <div className="hidden md:flex items-center gap-6">
                    <HashLink smooth to="/#about" className="font-mono text-xs uppercase tracking-widest text-[var(--color-arch-charcoal)] hover:text-[var(--color-arch-blue)] transition-colors">About</HashLink>
                    <HashLink smooth to="/#projects" className="font-mono text-xs uppercase tracking-widest text-[var(--color-arch-charcoal)] hover:text-[var(--color-arch-blue)] transition-colors">Projects</HashLink>
                    <HashLink smooth to="/#journey" className="font-mono text-xs uppercase tracking-widest text-[var(--color-arch-charcoal)] hover:text-[var(--color-arch-blue)] transition-colors">Journey</HashLink>
                    <Link to="/blog" className="font-mono text-xs uppercase tracking-widest text-[var(--color-arch-charcoal)] hover:text-[var(--color-arch-blue)] transition-colors">Blog</Link>
                    <HashLink smooth to="/#contact" className="font-mono text-xs uppercase tracking-widest text-[var(--color-arch-charcoal)] hover:text-[var(--color-arch-blue)] transition-colors">Contact</HashLink>
                </div>

                <button 
                    className="md:hidden ml-6 flex flex-col gap-1 cursor-pointer"
                    onClick={toggleMobileNav}
                    aria-label="Toggle Menu"
                >
                    <div className={`w-5 h-[1.5px] bg-[var(--color-arch-charcoal)] transition-transform duration-300 ${isMobileNavOpen ? 'rotate-45 translate-y-[5.5px]' : ''}`}></div>
                    <div className={`w-5 h-[1.5px] bg-[var(--color-arch-charcoal)] transition-opacity duration-300 ${isMobileNavOpen ? 'opacity-0' : ''}`}></div>
                    <div className={`w-5 h-[1.5px] bg-[var(--color-arch-charcoal)] transition-transform duration-300 ${isMobileNavOpen ? '-rotate-45 -translate-y-[5.5px]' : ''}`}></div>
                </button>
            </nav>
        </header>
    );
};

export default Header;
