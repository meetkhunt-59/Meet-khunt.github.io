import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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
                        <div className="border border-surface-border rounded-lg p-5 bg-background font-mono text-sm max-w-3xl mx-auto" style={{ background: '#f8fafc' }}>
                            <div className="flex gap-2 mb-3">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                            </div>
                            <code className="text-secondary block">
                                {"{"}
                                <div className="pl-4">
                                    name: <span className="text-green-600">"Meet Khunt"</span>,
                                    <br />
                                    role: <span className="text-green-600">"AI + Data Systems Builder"</span>,
                                    <br />
                                    stack: [
                                    <span className="text-green-600">"Python"</span>,{" "}
                                    <span className="text-green-600">"Data Engineering"</span>,{" "}
                                    <span className="text-green-600">"Machine Learning"</span>, …
                                    ],
                                    <br />
                                    focus: <span className="text-green-600">"Privacy-first, real-time intelligence"</span>,
                                    <br />
                                    passion: <span className="text-green-600">"Building data-driven systems that work in the real world"</span>
                                </div>
                                {"}"};
                            </code>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section >
    );
};

export default About;
