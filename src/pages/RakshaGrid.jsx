import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const RakshaGrid = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <SEO
                title="RakshaGrid - Privacy-First Smart Home Safety"
                description="RakshaGrid is a camera-free, privacy-first home safety system using mmWave sensors to detect falls, intruders, and behavior patterns without surveillance."
                image="https://meetkhunt.vercel.app/images/rakshagrid_hero.png"
                url="https://meetkhunt.vercel.app/rakshagrid"
            />

            <main className="rakshagrid-page">
                {/* Hero Section */}
                <section className="project-hero" style={{
                    background: `linear-gradient(to bottom, rgba(0,0,0,0.3), #0a0a0a), url('/images/rakshagrid_hero.png') no-repeat center center/cover`,
                    height: '60vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    position: 'relative',
                    marginTop: '80px' // Offset for fixed header
                }}>
                    <div className="container">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '1rem' }}
                        >
                            RakshaGrid
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={{ fontSize: '1.5rem', color: 'var(--primary-color)' }}
                        >
                            Smart Home Awareness Without Cameras
                        </motion.p>
                    </div>
                </section>

                {/* Introduction */}
                <section className="section">
                    <div className="container">
                        <div className="project-intro" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                                RakshaGrid is a <strong style={{ color: '#fff' }}>privacy-first home safety system</strong> that understands movement, presence, and behavior using mmWave sensors, not cameras.
                                It builds a live map of your home, detects unusual activity, and alerts you instantly — all while keeping your personal space truly personal.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="section" style={{ background: 'var(--glass-bg)' }}>
                    <div className="container">
                        <h2 className="section-title">What RakshaGrid Can Do</h2>
                        <div className="project-grid">
                            <div className="project-card">
                                <h3>High Accuracy Detection</h3>
                                <p>Detect people in any room with precision, tracking movement, posture, and behavior patterns.</p>
                            </div>
                            <div className="project-card">
                                <h3>Real-Time 3D Mapping</h3>
                                <p>Build a live 3D map of your home to visualize presence without revealing visual details.</p>
                            </div>
                            <div className="project-card">
                                <h3>Smart Alerts</h3>
                                <p>Trigger alerts for falls, unusual motion, restricted-room access, and sound spikes.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Visual + Why Different */}
                <section className="section">
                    <div className="container">
                        <div className="about-content">
                            <motion.img
                                src="/images/rakshagrid_privacy.png"
                                alt="Privacy First"
                                style={{ borderRadius: '20px', maxWidth: '100%', height: 'auto' }}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            />
                            <div>
                                <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Why RakshaGrid Is Different</h2>
                                <p style={{ marginBottom: '20px', color: 'var(--text-secondary)' }}>
                                    Most “smart” home systems rely on cameras and cloud processing. That means privacy issues, constant internet dependence, and a feeling of being watched.
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                                        <span style={{ color: 'var(--primary-color)', marginRight: '10px' }}>✓</span> No cameras
                                    </li>
                                    <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                                        <span style={{ color: 'var(--primary-color)', marginRight: '10px' }}>✓</span> No cloud dependency
                                    </li>
                                    <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                                        <span style={{ color: 'var(--primary-color)', marginRight: '10px' }}>✓</span> No personal data leakage
                                    </li>
                                </ul>
                                <p style={{ marginTop: '20px', fontStyle: 'italic', color: 'var(--primary-color)' }}>
                                    Just a tight network of intelligent sensors that quietly understand what’s happening in your home.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Use Cases */}
                <section className="section">
                    <div className="container">
                        <h2 className="section-title">Use Cases</h2>
                        <div className="project-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                            <div className="project-card">
                                <h3>Family Safety</h3>
                                <p>Get instant alerts for falls, long inactivity, or sudden changes in movement.</p>
                            </div>
                            <div className="project-card">
                                <h3>Intruder Awareness</h3>
                                <p>Detect unfamiliar patterns or unauthorized entry into rooms.</p>
                            </div>
                            <div className="project-card">
                                <h3>Elderly Care</h3>
                                <p>Monitor activity safely and privately, without placing cameras in personal spaces.</p>
                            </div>
                            <div className="project-card">
                                <h3>Smart Automations</h3>
                                <p>Trigger lights, alarms, or routines based on real movement and presence.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Map Visual */}
                <section className="section" style={{ padding: '0 0 100px 0' }}>
                    <div className="container" style={{ textAlign: 'center' }}>
                        <img
                            src="/images/rakshagrid_map.png"
                            alt="RakshaGrid Map Visualization"
                            style={{ maxWidth: '100%', borderRadius: '20px', border: '1px solid var(--glass-border)' }}
                        />
                        <div style={{ marginTop: '50px' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Built for Privacy. Designed for Safety.</h2>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>
                                RakshaGrid turns your home into an intelligent, camera-free safety grid that protects your family without watching them.
                            </p>
                            <a href="https://github.com/meetkhunt-59" target="_blank" rel="noopener noreferrer" className="cta-button">
                                View on GitHub
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default RakshaGrid;
