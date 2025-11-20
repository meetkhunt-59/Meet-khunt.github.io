import React from 'react';

const About = () => {
    return (
        <section id="about" class="section">
            <div class="container">
                <h2 class="section-title">About Me</h2>
                <div class="about-content">
                    <img src="https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                        alt="About Me" />
                    <div>
                        <p>I’m <strong style={{ color: 'var(--primary-color)' }}>Meet Khunt</strong>, founder of RakshaGrid &
                            EmroAPI.</p>
                        <p>I build privacy-first IoT systems with mmWave sensors and edge AI on Raspberry Pi.</p>
                        <p>I develop full-stack React/Tailwind dashboards and synthetic data generators.</p>
                        <p>Passionate about AI-powered safety alerts, behavior classification, and high-fidelity
                            simulation.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
