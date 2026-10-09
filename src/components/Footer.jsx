import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[var(--color-arch-blue)] text-[var(--color-arch-bg)] border-t border-[rgba(255,255,255,0.2)] relative z-10">
            {/* Same grid to make it continuous from Contact if they are stacked */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

            <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                <p className="font-mono text-[10px] uppercase opacity-70">
                    // © {new Date().getFullYear()} Meet Khunt. All System Normal.
                </p>
                
                <div className="flex items-center gap-6">
                    <a href="https://github.com/meetkhunt-59" target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] uppercase hover:text-white opacity-80 hover:opacity-100 transition-opacity">
                        GITHUB_
                    </a>
                    <a href="https://linkedin.com/in/meetkhunt59" target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] uppercase hover:text-white opacity-80 hover:opacity-100 transition-opacity">
                        LINKEDIN_
                    </a>
                    <a href="https://twitter.com/meetkhunt_59" target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] uppercase hover:text-white opacity-80 hover:opacity-100 transition-opacity">
                        TWITTER_
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
