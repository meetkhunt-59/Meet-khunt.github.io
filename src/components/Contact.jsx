import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="relative bg-[var(--color-arch-blue)] text-[var(--color-arch-bg)] overflow-hidden border-t-arch">
            {/* Blueprint Grid Overlay for Contact Section */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
            
            <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-24 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-[rgba(255,255,255,0.2)] pb-4">
                    <motion.h2 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold tracking-tighter uppercase"
                    >
                        Initialize <br/><span className="text-transparent" style={{ WebkitTextStroke: '1px var(--color-arch-bg)' }}>Contact</span>
                    </motion.h2>
                    <span className="font-mono text-xs uppercase hidden md:block opacity-60">STATUS // STANDBY</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="font-mono text-sm leading-relaxed mb-8 max-w-md opacity-90">
                            I am currently open to discussing new projects, technical challenges, or opportunities to build robust systems.
                            Initiate a secure channel to collaborate.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a 
                                href="mailto:meetkhunt9913@gmail.com"
                                className="font-mono text-xs uppercase tracking-widest font-bold border border-[var(--color-arch-bg)] px-6 py-4 hover:bg-[var(--color-arch-bg)] hover:text-[var(--color-arch-blue)] transition-colors flex items-center justify-between group"
                            >
                                <span>Send Transmit</span>
                                <span className="w-4 h-[1px] bg-[var(--color-arch-bg)] group-hover:bg-[var(--color-arch-blue)] transition-colors ml-4"></span>
                            </a>
                            <a 
                                href="https://linkedin.com/in/meetkhunt59"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-mono text-xs uppercase tracking-widest font-bold border border-[var(--color-arch-bg)] px-6 py-4 hover:bg-[var(--color-arch-bg)] hover:text-[var(--color-arch-blue)] transition-colors flex items-center justify-between group"
                            >
                                <span>Network (LinkedIn)</span>
                                <span className="w-4 h-[1px] bg-[var(--color-arch-bg)] group-hover:bg-[var(--color-arch-blue)] transition-colors ml-4"></span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Technical Diagnostic Decorative Element */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="border border-[rgba(255,255,255,0.2)] p-6 flex flex-col justify-between h-full min-h-[200px]"
                    >
                        <div className="flex justify-between items-start font-mono text-[10px] uppercase opacity-70">
                            <span>DIAGNOSTIC</span>
                            <span>OK</span>
                        </div>
                        
                        <div className="space-y-2 mt-8">
                            <div className="flex items-center gap-2 font-mono text-[10px]">
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                SYSTEM READY TO RECEIVE
                            </div>
                            <div className="h-[1px] w-full bg-[rgba(255,255,255,0.1)]"></div>
                            <div className="font-mono text-[10px] opacity-60">
                                LOCAL_TIME: {new Date().toLocaleTimeString('en-US', { hour12: false })} <br/>
                                UPTIME: CONTINUOUS
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
