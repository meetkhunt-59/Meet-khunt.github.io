import React from 'react';

const Hero = () => {
    return (
        <section id="home" class="hero">
            <div class="hero-overlay"></div>
            <div class="hero-content">
                <h1>Code. Create. Innovate.</h1>
                <p>Building privacy-first smart homes, AI pipelines & embroidery APIs.</p>
                <a href="#projects" class="cta-button">See My Work</a>
            </div>
            <a href="#about" class="scroll-down">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="white" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </a>
        </section>
    );
};

export default Hero;
