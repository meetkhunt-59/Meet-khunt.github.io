import { motion } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';

const MotionHashLink = motion(HashLink);

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-bg"></div>
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Code. Create. Innovate.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Building privacy-first smart homes, AI pipelines & embroidery APIs.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <MotionHashLink
                        smooth
                        to="/#projects"
                        className="cta-button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        See My Work
                    </MotionHashLink>
                </motion.div>
            </div>
            <HashLink smooth to="/#about" className="scroll-down">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round" />
                </svg>
            </HashLink>
        </section>
    );
};

export default Hero;
