import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';

// Architectural Technical Illustration (SVG)
const IsometricGrid = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-40">
        <motion.svg 
            width="800" 
            height="800" 
            viewBox="0 0 800 800" 
            className="w-full h-auto max-w-[800px]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
        >
            {/* Isometric projection lines */}
            <g stroke="var(--color-arch-blue)" strokeWidth="1" fill="none">
                <motion.path 
                    d="M 400 100 L 700 250 L 700 550 L 400 700 L 100 550 L 100 250 Z" 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />
                <motion.path 
                    d="M 100 250 L 400 400 L 700 250" 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
                />
                <motion.path 
                    d="M 400 700 L 400 400" 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
                />
                
                {/* Inner structure */}
                <motion.path 
                    d="M 400 200 L 600 300 L 600 500 L 400 600 L 200 500 L 200 300 Z" 
                    stroke="var(--color-arch-charcoal)"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut", delay: 0.7 }}
                />
                
                {/* Data/AI flow lines */}
                <motion.circle 
                    cx="400" cy="400" r="40" 
                    stroke="var(--color-arch-blue)" 
                    fill="transparent"
                    initial={{ r: 0 }}
                    animate={{ r: 40 }}
                    transition={{ duration: 1, delay: 1 }}
                />
                <motion.circle 
                    cx="400" cy="400" r="4" 
                    fill="var(--color-arch-blue)" 
                />
                
                {/* Technical annotations */}
                <g fill="var(--color-arch-charcoal)" className="font-mono text-[10px]" stroke="none">
                    <motion.text x="350" y="80" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>FIG 1. SYSTEM ARCHITECTURE</motion.text>
                    <motion.text x="120" y="240" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.1 }}>NODE_ALPHA: 10.0.0.1</motion.text>
                    <motion.text x="610" y="240" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}>EDGE_INFERENCE: ACTIVE</motion.text>
                    <motion.text x="350" y="730" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.3 }}>DATA_PIPELINE // SECURE</motion.text>
                </g>
            </g>
        </motion.svg>
    </div>
);

const Hero = () => {
    return (
        <section id="home" className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 overflow-hidden pt-20">
            <IsometricGrid />
            
            <div className="z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
                {/* Engineering Stamp / Top Label */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="border-arch px-3 py-1 bg-[var(--color-arch-bg)] mb-12 self-start md:self-auto"
                >
                    <span className="font-mono text-xs uppercase tracking-widest font-bold">Project: Meet Khunt // Portfolio</span>
                </motion.div>

                {/* Massive Typographic Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center w-full"
                >
                    <h1 className="text-[12vw] md:text-[8vw] leading-[0.85] font-bold tracking-tighter uppercase text-[var(--color-arch-charcoal)]">
                        Building <br />
                        <span className="text-outline-charcoal text-[var(--color-arch-bg)]">Systems</span>
                    </h1>
                </motion.div>

                {/* Precise, rigid copy box */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-16 md:mt-24 border-arch p-6 bg-[var(--color-arch-bg)] max-w-xl w-full mx-auto md:mr-auto md:ml-0 relative shadow-[8px_8px_0_0_var(--color-arch-blue)]"
                >
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-2 h-2 bg-[var(--color-arch-charcoal)] -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute top-0 right-0 w-2 h-2 bg-[var(--color-arch-charcoal)] translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 bg-[var(--color-arch-charcoal)] -translate-x-1/2 translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-[var(--color-arch-charcoal)] translate-x-1/2 translate-y-1/2"></div>
                    
                    <p className="font-mono text-sm leading-relaxed text-[var(--color-arch-charcoal)]">
                        // DIRECTIVE
                        <br /><br />
                        I architect and build AI systems, automation workflows, privacy-first technology, and robust data infrastructure. 
                        My focus is on engineering clarity out of complexity.
                    </p>
                    
                    <div className="mt-8 flex gap-4 border-t-arch pt-4">
                        <HashLink
                            smooth
                            to="/#projects"
                            className="font-mono text-xs uppercase tracking-widest font-bold hover:text-[var(--color-arch-blue)] transition-colors flex items-center gap-2"
                        >
                            <span className="w-2 h-2 bg-[var(--color-arch-charcoal)] inline-block"></span>
                            Inspect Projects
                        </HashLink>
                        <HashLink
                            smooth
                            to="/#contact"
                            className="font-mono text-xs uppercase tracking-widest font-bold hover:text-[var(--color-arch-blue)] transition-colors flex items-center gap-2"
                        >
                            <span className="w-2 h-2 border border-[var(--color-arch-charcoal)] inline-block"></span>
                            Initialize Contact
                        </HashLink>
                    </div>
                </motion.div>
            </div>
            
            {/* Blueprint measurements (decorative) */}
            <div className="absolute left-4 inset-y-0 flex flex-col justify-between py-24 pointer-events-none opacity-50 hidden md:flex">
                <span className="font-mono text-[10px] origin-bottom-left -rotate-90 translate-y-full">Y-AXIS 0.0</span>
                <span className="font-mono text-[10px] origin-bottom-left -rotate-90 translate-y-full">Y-AXIS 100.0</span>
            </div>
        </section>
    );
};

export default Hero;
