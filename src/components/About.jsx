import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    About Me
                </motion.h2>
                <div className="about-content">
                    <motion.img
                        src="/images/avatar.jpg"
                        alt="About Me"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    />
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p>I’m <strong style={{ color: 'var(--primary-color)' }}>Meet Khunt</strong>, founder of RakshaGrid &
                            EmroAPI.</p>
                        <p>I build privacy-first IoT systems with mmWave sensors and edge AI on Raspberry Pi.</p>
                        <p>I develop full-stack React/Tailwind dashboards and synthetic data generators.</p>
                        <p>Passionate about AI-powered safety alerts, behavior classification, and high-fidelity
                            simulation.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
