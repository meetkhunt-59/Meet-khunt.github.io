import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Get In Touch
                </motion.h2>
                <motion.div
                    className="contact-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of an
                        ambitious vision. Feel free to reach out.</p>
                    <motion.a
                        href="mailto:meetkhunt9913@gmail.com"
                        className="cta-button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Say Hello
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
