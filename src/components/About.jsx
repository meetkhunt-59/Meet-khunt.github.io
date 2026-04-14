import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { a } from 'framer-motion/client';

const About = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, 2));
    const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

    const skills = {
        name: "Meet Khunt",
        role: "Founder & Full Stack Dev",
        stack: [
            "React / Tailwind",
            "Python / Edge AI",
            "IoT / mmWave",
            "PostgreSQL"
        ],
        focus: "Privacy-first Innovation"
    };

    return (
        <section id="about" className="section">
            <div className="container">
                <div className="content-box">
                    <motion.h2
                        className="section-title text-center mb-8"
                        style={{ textAlign: 'center' }}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        About Me
                    </motion.h2>
                    <div className="about-layout">
                        <motion.div
                            className="about-image"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <img
                                src="/images/avatar.jpg"
                                alt="Meet Khunt"
                                className="rounded-none shadow-lg w-full object-cover"
                                style={{ maxHeight: '350px' }}
                            />
                        </motion.div>
                        <motion.div
                            className="about-text"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="text-base text-secondary leading-relaxed">
                                I’m a passionate developer and founder who loves building things that matter.
                                My journey sits at the intersection of hardware and software—transforming raw sensor data into meaningful insights.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        className="mt-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="journey-container">
                            {/* Header & Navigation */}
                            <div className="journey-header">
                                <div className="journey-title-container">
                                    <h3>My Journey</h3>
                                    <p>2022 — Present</p>
                                </div>
                                <div style={{ display: 'flex', gap: '12px' }}>
                                    <button 
                                        onClick={prevSlide}
                                        disabled={currentSlide === 0}
                                        className="journey-nav-btn"
                                        aria-label="Previous timeline phase"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                                    </button>
                                    <button 
                                        onClick={nextSlide}
                                        disabled={currentSlide === 2}
                                        className="journey-nav-btn"
                                        aria-label="Next timeline phase"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                                    </button>
                                </div>
                            </div>

                            <div style={{ position: 'relative', minHeight: '600px', overflow: 'hidden' }}>
                                <AnimatePresence mode="wait">
                                    {currentSlide === 0 && (
                                        <motion.div
                                            key="slide-0"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="bento-grid">
                                                {/* Hero Narrative */}
                                                <div className="bento-col-7 bento-card bento-card-subtle">
                                                    <h4 className="timeline-hero-title">
                                                        2022–2023 
                                                        <span className="timeline-hero-subtitle">Entering Cybersecurity & the Web</span>
                                                    </h4>
                                                    <div className="timeline-text">
                                                        <p>I received my first laptop during my 10th standard vacation, which marked the real start of my technical journey. From a young age, I had a strong interest in technology, especially cybersecurity, so I began by exploring ethical hacking and penetration testing.</p>
                                                        <p>During this period, I learned the fundamentals of web security and how websites function internally. I studied common vulnerabilities and security practices using frameworks like OWASP and worked with tools such as Burp Suite and Wireshark. To gain practical experience, I solved beginner-level labs and boxes on platforms like Hack The Box, TryHackMe, and PortSwigger.</p>
                                                        <p>At the same time, I learned the basics of web development to better understand how applications are built. This included frontend and backend concepts, JavaScript, and React. This phase helped me build a strong technical foundation and develop problem-solving skills.</p>
                                                    </div>
                                                </div>
                                                
                                                {/* Right Stack */}
                                                <div className="bento-col-5 bento-flex-stack">
                                                    {/* Core Learnings - Dark Theme Bento */}
                                                    <div className="bento-card bento-card-dark" style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                                                        <div style={{ position: 'absolute', top: 0, right: 0, marginTop: '-20px', marginRight: '-20px', width: '150px', height: '150px', backgroundColor: '#334155', opacity: 0.3, borderRadius: '50%', filter: 'blur(40px)' }}></div>
                                                        <h5 className="icon-heading" style={{ position: 'relative', zIndex: 10 }}>
                                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                                                            Key Learnings
                                                        </h5>
                                                        <ul className="timeline-list" style={{ position: 'relative', zIndex: 10 }}>
                                                            <li>Web security & OWASP vulnerabilities</li>
                                                            <li>Hands-on penetration testing</li>
                                                            <li>Networking & web traffic analysis</li>
                                                            <li>Web development fundamentals</li>
                                                        </ul>
                                                    </div>

                                                    {/* Tools Bento */}
                                                    <div className="bento-card" style={{ flex: 1 }}>
                                                        <h5 className="icon-heading">
                                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6 }}><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                                                            Platforms Stack
                                                        </h5>
                                                        <div className="bento-tag-container">
                                                            {["Hack The Box", <a href='https://tryhackme.com/p/DonatHack'>TryHackMe</a>, "PortSwigger", "Burp Suite", "Wireshark", "Nuclei","Scapy", "React", "JavaScript",<a href="https://pwn.college">pwn.college</a>,<a href="https://exploitnotes.org">exploitnotes.org</a>,<a href='https://sushant747.gitbooks.io/total-oscp-guide/content/'>Total-OSCP-Guide</a>].map(tool => (
                                                                <span key={tool} className="bento-tag">{tool}</span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {currentSlide === 1 && (
                                        <motion.div
                                            key="slide-1"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="bento-grid">
                                                {/* Left Stack Projects */}
                                                <div className="bento-col-5 bento-flex-stack">
                                                    <div className="bento-card bento-card-subtle" style={{ flex: 1 }}>
                                                        <h5 className="icon-heading">
                                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6 }}><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                                                            Core Deliverables
                                                        </h5>
                                                        <div className="bento-flex-stack" style={{ gap: '16px' }}>
                                                            <div className="bento-card" style={{ padding: '16px', borderRadius: '12px', flex: 'none' }}>
                                                                <strong style={{ display: 'block', marginBottom: '4px' }}>Locadata</strong> 
                                                                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Automatic dashboard analysis platform.</span>
                                                            </div>
                                                            <div className="bento-card" style={{ padding: '16px', borderRadius: '12px', flex: 'none' }}>
                                                                <strong style={{ display: 'block', marginBottom: '4px' }}>Email & Maps Scraper</strong> 
                                                                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Automated structured data collection pipelines.</span>
                                                            </div>
                                                            <div className="bento-card" style={{ padding: '16px', borderRadius: '12px', flex: 'none' }}>
                                                                <strong style={{ display: 'block', marginBottom: '4px' }}>Restaurant Chatbot</strong> 
                                                                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Built for high-volume customer interaction.</span>
                                                            </div>
                                                            <div className="bento-card" style={{ padding: '16px', borderRadius: '12px', flex: 'none' }}>
                                                                <strong style={{ display: 'block', marginBottom: '4px' }}>Image Search</strong> 
                                                                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Also Built for high-volume customer interaction.</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Hero Narrative Right */}
                                                <div className="bento-col-7 bento-card" style={{ position: 'relative' }}>
                                                    <h4 className="timeline-hero-title">
                                                        2023–2024 <br/>
                                                        <span className="timeline-hero-subtitle">Real-World Automation</span>
                                                    </h4>
                                                    <div className="timeline-text" style={{ marginBottom: '32px' }}>
                                                        <p>Toward the end of 2023, I completed an internship where I worked on live projects and gained exposure to real-world development workflows. I explored web scraping, security bypass techniques, and data workflows used in production environments.</p>
                                                        <p>I learned how ETL (Extract, Transform, Load) pipelines work and how data moves securely through systems. This period introduced me to python backend development frameworks such as Flask and FastAPI.</p>
                                                        <p>After the internship, I continued exploring new areas independently, including basic machine learning and automation systems to strengthen my development skills.</p>
                                                    </div>
                                                    
                                                    {/* Learnings embedded at the bottom */}
                                                    <div style={{ paddingTop: '24px', borderTop: '1px solid var(--surface-border)', marginTop: 'auto' }}>
                                                        <strong style={{ display: 'block', marginBottom: '16px', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Acquired Competencies</strong>
                                                        <div className="bento-tag-container">
                                                            <span className="bento-tag">Python (Flask/FastAPI)</span>
                                                            <span className="bento-tag">Web Scraping</span>
                                                            <span className="bento-tag">ETL Workflows</span>
                                                            <span className="bento-tag">ML Basics</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {currentSlide === 2 && (
                                        <motion.div
                                            key="slide-2"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="bento-grid">
                                                {/* Top Hero Full Width */}
                                                <div className="bento-col-12 bento-card bento-card-dark bento-card-hero" style={{ position: 'relative', overflow: 'hidden' }}>
                                                    <div style={{ position: 'absolute', top: 0, right: 0, width: '600px', height: '600px', backgroundColor: '#334155', opacity: 0.2, borderRadius: '50%', filter: 'blur(100px)', marginTop: '-150px', marginRight: '-150px', pointerEvents: 'none' }}></div>
                                                    <h4 className="timeline-hero-title" style={{ position: 'relative', zIndex: 10, maxWidth: '80%' }}>
                                                        2024–2025, 26 <br/>
                                                        <span className="timeline-hero-subtitle" style={{ fontSize: '1.4rem', color: '#94a3b8', marginTop: '8px' }}>Building Systems & Product-Level Thinking</span>
                                                    </h4>
                                                    <div className="timeline-text" style={{ position: 'relative', zIndex: 10, maxWidth: '85%' }}>
                                                        <p>This phase marked a transition from small tools to large, system-level projects. I began focusing on building complete products rather than isolated scripts.</p>
                                                        <p>One of the major projects I started during this period was <strong style={{ color: '#fff', fontWeight: 500 }}>RakshaGrid</strong>, exploring how edge sensors, lidar, and ML interact with software, Explored Remote Sensing and monitoring,Monitor and render human using wifi. Later, the <strong style={{ color: '#fff', fontWeight: 500 }}>Image-to-Embroidery Converter</strong> taught me deep codebase optimization and cost mapping. Currently, I'm engineering a <strong style={{ color: '#fff', fontWeight: 500 }}>GIS Analysis Platform</strong> focused on large-scale data collection, storage, and processing.</p>
                                                    </div>
                                                </div>

                                                {/* 3 Columns of Bento Projects */}
                                                <div className="bento-col-4 bento-card bento-card-subtle">
                                                    <h6 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>RakshaGrid</h6>
                                                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>Smart Home Monitoring System designed to track household safety using edge sensors and automation.</p>
                                                    <div className="bento-tag-container">
                                                        <span className="bento-tag">IoT Sensors</span>
                                                        <span className="bento-tag">Hardware Integration</span>
                                                    </div>
                                                </div>

                                                <div className="bento-col-4 bento-card bento-card-subtle">
                                                    <h6 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>EmroApi</h6>
                                                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>A tool dynamically converting images into embroidery-ready system files, teaching me the cost of efficiency.</p>
                                                    <div className="bento-tag-container">
                                                        <span className="bento-tag">Optimization</span>
                                                        <span className="bento-tag">Scalable Arch</span>
                                                    </div>
                                                </div>

                                                <div className="bento-col-4 bento-card bento-card-subtle">
                                                    <h6 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>GIS Platform</h6>
                                                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>Collecting and analyzing geographic data to generate deep, meaningful insights about local areas.</p>
                                                    <div className="bento-tag-container">
                                                        <span className="bento-tag">Data Warehousing</span>
                                                        <span className="bento-tag">Pipelines</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                
                                {/* Slide Indicators */}
                                <div className="slide-indicators-container">
                                    {[0, 1, 2].map((idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentSlide(idx)}
                                            className={`slide-indicator ${currentSlide === idx ? 'active' : 'inactive'}`}
                                            aria-label={`Go to slide ${idx + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section >
    );
};

export default About;
