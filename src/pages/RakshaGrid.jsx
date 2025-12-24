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
                {/* Hero Section - Standardized */}
                <section className="section" style={{ paddingTop: '120px', paddingBottom: '60px', textAlign: 'center' }}>
                    <div className="container">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '1.5rem', lineHeight: '1.1' }}
                        >
                            RakshaGrid
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}
                        >
                            Smart Home Awareness Without Cameras
                        </motion.p>
                    </div>
                </section>

                {/* Introduction - Contained & Clean */}
                <section className="section" style={{ paddingBottom: '80px' }}>
                    <div className="container">
                        <div className="content-box" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                            <p style={{ fontSize: '1.25rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                                RakshaGrid is a <strong>privacy-first home safety system</strong> that understands movement, presence, and behavior using mmWave sensors, not cameras.
                                It builds a live map of your home, detects unusual activity, and alerts you instantly — all while keeping your personal space truly personal.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Features Grid - Using standard project-card styles */}
                <section className="section" style={{ background: 'var(--surface-color)' }}>
                    <div className="container">
                        <h2 className="section-title text-center" style={{ textAlign: 'center', marginBottom: '60px' }}>What RakshaGrid Can Do</h2>
                        <div className="project-grid">
                            {[
                                { title: "High Accuracy Detection", desc: "Detect people in any room with precision, tracking movement, posture, and behavior patterns." },
                                { title: "Real-Time 3D Mapping", desc: "Build a live 3D map of your home to visualize presence without revealing visual details." },
                                { title: "Smart Alerts", desc: "Trigger alerts for falls, unusual motion, restricted-room access, and sound spikes." }
                            ].map((feature, index) => (
                                <div key={index} className="project-card">
                                    <div className="project-info" style={{ padding: '32px' }}>
                                        <h3 style={{ marginBottom: '16px', fontSize: '1.25rem' }}>{feature.title}</h3>
                                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: 0 }}>{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Different - Side-by-Side Layout */}
                <section className="section">
                    <div className="container">
                        <div className="rakshagrid-split-layout">
                            <motion.div
                                className="rakshagrid-image"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <img
                                    src="/images/rakshagrid_privacy.png"
                                    alt="Privacy First"
                                    style={{ borderRadius: '0px', width: '100%', height: 'auto', border: '1px solid var(--surface-border)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}
                                />
                            </motion.div>
                            <motion.div
                                className="rakshagrid-content"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 style={{ fontSize: '2.5rem', marginBottom: '24px', lineHeight: '1.2' }}>Why RakshaGrid Is Different</h2>
                                <p style={{ marginBottom: '24px', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6' }}>
                                    Most “smart” home systems rely on cameras and cloud processing. That means privacy issues, constant internet dependence, and a feeling of being watched.
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {[
                                        "No cameras",
                                        "No cloud dependency",
                                        "No personal data leakage"
                                    ].map((item, i) => (
                                        <li key={i} style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', fontSize: '1.1rem', fontWeight: '500' }}>
                                            <span style={{ color: 'var(--primary-color)', marginRight: '12px', fontSize: '1.2rem' }}>✓</span> {item}
                                        </li>
                                    ))}
                                </ul>
                                <p style={{ marginTop: '32px', fontStyle: 'italic', color: 'var(--primary-color)', fontWeight: '500' }}>
                                    Just a tight network of intelligent sensors that quietly understand what’s happening in your home.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Use Cases - Grid */}
                <section className="section" style={{ background: '#f8fafc' }}>
                    <div className="container">
                        <h2 className="section-title text-center" style={{ textAlign: 'center', marginBottom: '60px' }}>Use Cases</h2>
                        <div className="project-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                            {[
                                { title: "Family Safety", desc: "Get instant alerts for falls, long inactivity, or sudden changes in movement." },
                                { title: "Intruder Awareness", desc: "Detect unfamiliar patterns or unauthorized entry into rooms." },
                                { title: "Elderly Care", desc: "Monitor activity safely and privately, without placing cameras in personal spaces." },
                                { title: "Smart Automations", desc: "Trigger lights, alarms, or routines based on real movement and presence." }
                            ].map((useCase, index) => (
                                <div key={index} className="project-card" style={{ background: '#fff' }}>
                                    <div className="project-info" style={{ padding: '32px' }}>
                                        <h3 style={{ marginBottom: '12px', fontSize: '1.2rem' }}>{useCase.title}</h3>
                                        <p style={{ color: 'var(--text-secondary)', marginBottom: 0 }}>{useCase.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Map Visual & CTA */}
                <section className="section" style={{ paddingBottom: '100px' }}>
                    <div className="container" style={{ textAlign: 'center', maxWidth: '900px' }}>
                        <div className="content-box" style={{ background: '#fff', padding: '40px', border: '1px solid var(--surface-border)' }}>

                            <img
                                src="/images/rakshagrid_map.png"
                                alt="RakshaGrid Map Visualization"
                                style={{ width: '100%', borderRadius: '0px', border: '1px solid var(--surface-border)', marginBottom: '40px' }}
                            />

                            <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Built for Privacy. Designed for Safety.</h2>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '40px', fontSize: '1.1rem' }}>
                                RakshaGrid turns your home into an intelligent, camera-free safety grid that protects your family without watching them.
                            </p>
                            <a
                                href="https://github.com/meet-khunt-59"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                            >
                                View on GitHub <span>→</span>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default RakshaGrid;
