import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 relative border-t-arch bg-[var(--color-arch-bg)]">
            <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
                
                <div className="mb-20 flex justify-between items-end border-b-arch pb-4">
                    <motion.h2 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold tracking-tighter uppercase text-[var(--color-arch-charcoal)]"
                    >
                        Operator <br/><span className="text-outline-charcoal text-[var(--color-arch-bg)]">Profile</span>
                    </motion.h2>
                    <span className="font-mono text-xs uppercase hidden md:block">SYS_ID // MK</span>
                </div>

                <div className="flex flex-col md:flex-row gap-16 mb-32">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/3 relative group"
                    >
                        {/* SVG Filter Definition for Architectural Cyanotype (Ink-Blue Shadows & Cream Highlights) */}
                        <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
                            <defs>
                                <filter id="arch-cyanotype" colorInterpolationFilters="sRGB">
                                    <feColorMatrix
                                        type="matrix"
                                        values="0.2126 0.7152 0.0722 0 0
                                                0.2126 0.7152 0.0722 0 0
                                                0.2126 0.7152 0.0722 0 0
                                                0      0      0      1 0"
                                    />
                                    <feComponentTransfer colorInterpolationFilters="sRGB">
                                        <feFuncR type="table" tableValues="0.102 0.976" />
                                        <feFuncG type="table" tableValues="0.302 0.973" />
                                        <feFuncB type="table" tableValues="0.839 0.953" />
                                    </feComponentTransfer>
                                </filter>
                            </defs>
                        </svg>

                        {/* Architectural Image Container */}
                        <div className="border-arch p-2 bg-[var(--color-arch-bg)] relative z-10 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
                            {/* Corner Registration Anchors */}
                            <div className="absolute top-0 left-0 w-2.5 h-2.5 bg-[var(--color-arch-blue)] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group-hover:scale-125 group-hover:bg-[var(--color-arch-charcoal)]"></div>
                            <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-[var(--color-arch-blue)] translate-x-1/2 -translate-y-1/2 transition-all duration-300 group-hover:scale-125 group-hover:bg-[var(--color-arch-charcoal)]"></div>
                            <div className="absolute bottom-0 left-0 w-2.5 h-2.5 bg-[var(--color-arch-blue)] -translate-x-1/2 translate-y-1/2 transition-all duration-300 group-hover:scale-125 group-hover:bg-[var(--color-arch-charcoal)]"></div>
                            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[var(--color-arch-blue)] translate-x-1/2 translate-y-1/2 transition-all duration-300 group-hover:scale-125 group-hover:bg-[var(--color-arch-charcoal)]"></div>
                            
                            {/* Subtle Lateral Registration Marks */}
                            <div className="absolute top-1/2 left-0 w-2 h-px bg-[var(--color-arch-blue)] -translate-x-full"></div>
                            <div className="absolute top-1/2 right-0 w-2 h-px bg-[var(--color-arch-blue)] translate-x-full"></div>

                            <div className="relative overflow-hidden bg-[var(--color-arch-bg)]">
                                <img
                                    src="/images/avatar.jpg"
                                    alt="Meet Khunt"
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                                    style={{ filter: "contrast(1.15) brightness(0.98) url(#arch-cyanotype)" }}
                                />
                                {/* Architectural Grid Watermark */}
                                <div className="absolute inset-0 blueprint-grid-small opacity-15 pointer-events-none mix-blend-multiply"></div>
                                
                                {/* Technical Spec Tag */}
                                <div className="absolute bottom-2 left-2 bg-[var(--color-arch-bg)] border border-[var(--color-arch-charcoal)] px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-[var(--color-arch-blue)] select-none">
                                 // Meet Khunt
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-[var(--color-arch-blue)] translate-x-4 translate-y-4 border-arch -z-10 transition-transform duration-300 group-hover:translate-x-5 group-hover:translate-y-5"></div>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-2/3 flex flex-col justify-center"
                    >
                        <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-arch-blue)] mb-4">
                            // OVERVIEW
                        </span>
                        <p className="font-mono text-sm leading-loose text-[var(--color-arch-charcoal)] max-w-2xl">
                            I’m Meet, a developer who enjoys figuring out how things work and turning ideas into real, working systems. I started out exploring cybersecurity and web development, and over time, my curiosity led me toward AI, data engineering, and automation.
                            Today, I build things like AI-powered workflows, lead generation pipelines, data extraction tools, and APIs that solve practical problems. I enjoy experimenting with new technologies, breaking down complex challenges, and building projects from scratch to see how far an idea can go.
                        </p>
                    </motion.div>
                </div>

                {/* Technical Journey - Vertical Flow */}
                <div className="relative border-l-arch pl-6 md:pl-12 ml-2 md:ml-0">
                    {/* Phase 1 */}
                    <motion.div 
                        id="journey"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="mb-24 relative scroll-mt-32"
                    >
                        <div className="absolute -left-[29px] md:-left-[53px] top-1.5 w-3 h-3 bg-[var(--color-arch-charcoal)] outline outline-4 outline-[var(--color-arch-bg)]"></div>
                        <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-arch-blue)] mb-2 block">
                            PHASE 01 // 2022-2023
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-[var(--color-arch-charcoal)] mb-6">
                            Cybersecurity & The Web
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="font-mono text-sm leading-relaxed text-[var(--color-arch-charcoal)] space-y-4">
                                <p>My technical journey began with cybersecurity, exploring ethical hacking and penetration testing. I learned web security fundamentals, OWASP vulnerabilities, and internal website mechanics.</p>
                                <p>I trained on Hack The Box, TryHackMe, and PortSwigger, using tools like Burp Suite and Wireshark. Simultaneously, I learned React and JavaScript to understand how these systems are built.</p>
                            </div>
                            <div className="border-arch p-6 bg-[var(--color-arch-bg)] shadow-[4px_4px_0_0_var(--color-arch-charcoal)]">
                                <h4 className="font-mono text-xs uppercase tracking-widest font-bold border-b-arch pb-2 mb-4">Core Stack</h4>
                                <ul className="font-mono text-xs space-y-2 uppercase">
                                    <li>- OWASP Framework</li>
                                    <li>- Burp Suite / Wireshark</li>
                                    <li>- TryHackMe / Hack The Box</li>
                                    <li>- React / JavaScript</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Phase 2 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="mb-24 relative"
                    >
                        <div className="absolute -left-[29px] md:-left-[53px] top-1.5 w-3 h-3 bg-[var(--color-arch-charcoal)] outline outline-4 outline-[var(--color-arch-bg)]"></div>
                        <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-arch-blue)] mb-2 block">
                            PHASE 02 // 2023-2024
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-[var(--color-arch-charcoal)] mb-6">
                            Real-World Automation
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="font-mono text-sm leading-relaxed text-[var(--color-arch-charcoal)] space-y-4">
                                <p>Transitioning to production environments, I focused on web scraping, security bypass, and ETL pipelines. I learned how data moves securely at scale.</p>
                                <p>During this period, I adopted Python backends (Flask, FastAPI) and explored machine learning basics to augment automation systems.</p>
                            </div>
                            <div className="border-arch p-6 bg-[var(--color-arch-charcoal)] text-[var(--color-arch-bg)] shadow-[4px_4px_0_0_var(--color-arch-blue)]">
                                <h4 className="font-mono text-xs uppercase tracking-widest font-bold border-b border-[var(--color-arch-bg)] pb-2 mb-4">Competencies</h4>
                                <ul className="font-mono text-xs space-y-2 uppercase">
                                    <li>- Python (Flask / FastAPI)</li>
                                    <li>- ETL Data Workflows</li>
                                    <li>- Advanced Web Scraping</li>
                                    <li>- Machine Learning Basics</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Phase 3 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="relative"
                    >
                        <div className="absolute -left-[29px] md:-left-[53px] top-1.5 w-3 h-3 bg-[var(--color-arch-blue)] outline outline-4 outline-[var(--color-arch-bg)]"></div>
                        <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-arch-blue)] mb-2 block">
                            PHASE 03 // 2024-PRESENT
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-[var(--color-arch-charcoal)] mb-6">
                            System & Product Engineering
                        </h3>
                        <div className="font-mono text-sm leading-relaxed text-[var(--color-arch-charcoal)] max-w-3xl mb-12">
                            <p>Moving from isolated scripts to holistic product architectures. Designing edge inference systems, robust data collection platforms, and highly optimized pipelines.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="border-arch border-t-4 border-t-[var(--color-arch-blue)] p-6 bg-[var(--color-arch-bg)]">
                                <h4 className="font-bold uppercase tracking-tight mb-3">RakshaGrid</h4>
                                <p className="font-mono text-xs mb-4">Edge sensor mapping and privacy-first ML home monitoring.</p>
                                <span className="font-mono text-[10px] bg-[var(--color-arch-charcoal)] text-[var(--color-arch-bg)] px-2 py-1 uppercase">IoT / Hardware</span>
                            </div>
                            <div className="border-arch border-t-4 border-t-[var(--color-arch-charcoal)] p-6 bg-[var(--color-arch-bg)]">
                                <h4 className="font-bold uppercase tracking-tight mb-3">EmroAPI</h4>
                                <p className="font-mono text-xs mb-4">Deep codebase optimization for real-time SVG to embroidery DST conversion.</p>
                                <span className="font-mono text-[10px] border-arch px-2 py-1 uppercase font-bold">Optimization</span>
                            </div>
                            <div className="border-arch border-t-4 border-t-[var(--color-arch-charcoal)] p-6 bg-[var(--color-arch-bg)]">
                                <h4 className="font-bold uppercase tracking-tight mb-3">GIS Platform</h4>
                                <p className="font-mono text-xs mb-4">Large-scale data warehousing, geographic processing, and synthetic data gen.</p>
                                <span className="font-mono text-[10px] border-arch px-2 py-1 uppercase font-bold">Data Pipelines</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
