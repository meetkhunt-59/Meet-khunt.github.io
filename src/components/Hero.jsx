import { motion } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';

const MotionHashLink = motion(HashLink);

const Hero = () => {
    // Elegant minimalist heading
    const text = "Hello.";
    const letters = Array.from(text);

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 10,
        },
    };

    return (
        <section id="home" className="hero">
            <div className="container hero-content">
                <div className="hero-text-col">
                    <motion.div
                        className="mb-6"
                        variants={container}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1 className="hero-title">
                            {letters.map((letter, index) => (
                                <motion.span variants={child} key={index} style={{ display: 'inline-block' }}>
                                    {letter === " " ? "\u00A0" : letter}
                                </motion.span>
                            ))}
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="hero-intro font-mono"
                    >
                        I’m a builder at heart who likes turning messy ideas into systems that actually work.
                        I work on privacy-first real-time systems, AI-driven automation, and data pipelines.
                        My focus is on solving real problems—detecting patterns, automating workflows, and designing tools that help people make better decisions.
                        <br /><br />
                        I care about fundamentals, clarity, and shipping things that hold up in the real world.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        className="hero-actions"
                    >
                        <MotionHashLink
                            smooth
                            to="/#projects"
                            className="btn btn-primary"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            View Work
                        </MotionHashLink>
                        <MotionHashLink
                            smooth
                            to="/#contact"
                            className="btn btn-outline"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Contact Me
                        </MotionHashLink>
                    </motion.div>
                </div>
                
                <motion.div 
                    className="hero-image-col"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <img src="/images/Hero.jpeg" alt="Meet Khunt" className="hero-avatar" />
                </motion.div>
            </div>
            {/* Scroll Down is often redundant in modern compact UIs, but kept subtle if needed, removed for now to reduce noise */}
        </section>
    );
};

export default Hero;
