import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Projects = () => {
    const projects = [
        {
            title: "RakshaGrid",
            description: "A camera-free, real-time smart home security system using mmWave sensors, privacy-first mapping, and edge AI.",
            image: "/images/rakshagrid.png",
            link: "/rakshagrid",
            isInternal: true
        },
        {
            title: "EmroAPI",
            description: "Generate DST embroidery files from images—automating complex SVG-to-stitch pipelines.",
            image: "/images/emroapi.jpeg",
            link: "http://emroapi.mooo.com/"
        },
        {
            title: "LocaData",
            description: "Privacy-first location data analytics with geospatial pipelines and synthetic mobility data generation.",
            image: "/images/locadata.png",
            link: "https://locadata.onrender.com/"
        }
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Projects
                </motion.h2>
                <div className="project-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                        >
                            <img src={project.image} alt={project.title} />
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            {project.isInternal ? (
                                <Link to={project.link}>View Project</Link>
                            ) : (
                                <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
