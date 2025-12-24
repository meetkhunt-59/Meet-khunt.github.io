import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container">
                <div className="content-box text-center max-w-4xl mx-auto">
                    <motion.h2
                        className="section-title text-center mb-8"
                        style={{ textAlign: 'center' }}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Start Collaboration
                    </motion.h2>

                    <motion.div
                        className="max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-secondary text-lg mb-8 leading-relaxed">
                            "I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision."
                        </p>

                        <div className="contact-actions">
                            <motion.a
                                href="mailto:meetkhunt9913@gmail.com"
                                className="btn btn-primary"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Send Message
                            </motion.a>
                            <motion.a
                                href="https://linkedin.com/in/meetkhunt59"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                LinkedIn
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
