import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Projects = () => {
    const projects = [
        {
            title: "RakshaGrid",
            description: "A camera-free, real-time smart home security system, privacy-first mapping, and edge AI.",
            image: "/images/rakshagrid.png",
            tags: ["IoT", "Edge AI", "Privacy"],
            link: "/rakshagrid",
            isInternal: true
        },
        {
            title: "EmroAPI",
            description: "Generate DST embroidery files from images—automating complex SVG-to-stitch pipelines.",
            image: "/images/emroapi.jpeg",
            tags: ["Automation", "Python", "SVG"],
            link: "http://emroapi.mooo.com/"
        },
        {
            title: "LocaData",
            description: "Privacy-first location data analytics with geospatial pipelines and synthetic mobility data generation.",
            image: "/images/locadata.png",
            tags: ["Geospatial", "Data Sci", "Privacy"],
            link: "https://locadata.onrender.com/"
        }
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <motion.h2
                    className="section-title text-center mb-12"
                    style={{ textAlign: 'center' }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Projects
                </motion.h2>
                <div className="project-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="relative overflow-hidden h-[200px]">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="project-info flex flex-col flex-grow p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="font-bold font-mono text-xl group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                </div>

                                <p className="text-secondary mb-6 text-sm leading-relaxed flex-grow">
                                    {project.description}
                                </p>

                                <div className="project-footer mt-auto pt-4 border-t border-border flex items-center justify-between">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="text-xs font-mono bg-secondary/10 text-secondary px-2 py-1 border border-border/50">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {project.isInternal ? (
                                        <Link to={project.link} className="inline-flex items-center text-sm font-mono font-bold text-primary hover:text-primary/80 transition-colors">
                                            View <span className="ml-1">→</span>
                                        </Link>
                                    ) : (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-mono font-bold text-primary hover:text-primary/80 transition-colors">
                                            View <span className="ml-1">↗</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default Projects;
