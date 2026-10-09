import React from 'react';
// eslint-disable-next-line no-unused-vars
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
            isInternal: true,
            id: "PRJ-01",
            specs: "SYS_ARCH: LOCAL / INFERENCE: EDGE"
        },
        {
            title: "EmroAPI",
            description: "Generate DST embroidery files from images—automating complex SVG-to-stitch pipelines.",
            image: "/images/emroapi.jpeg",
            tags: ["Automation", "Python", "SVG"],
            link: "http://emroapi.mooo.com/",
            id: "PRJ-02",
            specs: "PIPELINE: HYBRID / DATA: SVG_DST"
        },
        {
            title: "LocaData",
            description: "Privacy-first location data analytics with geospatial pipelines and synthetic mobility data generation.",
            image: "/images/locadata.png",
            tags: ["Geospatial", "Data Sci", "Privacy"],
            link: "https://locadata.onrender.com/",
            id: "PRJ-03",
            specs: "GEO_ANALYTICS: ACTIVE / PRIVACY: K-ANON"
        }
    ];

    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
                
                <div className="mb-20 border-b-arch pb-4 flex justify-between items-end">
                    <motion.h2 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold tracking-tighter uppercase text-[var(--color-arch-charcoal)]"
                    >
                        Active <br/><span className="text-outline-charcoal text-[var(--color-arch-bg)]">Deployments</span>
                    </motion.h2>
                    <span className="font-mono text-xs uppercase hidden md:block">INDEX // 001 - 003</span>
                </div>

                <div className="flex flex-col gap-12 md:gap-32">
                    {projects.map((project, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7 }}
                                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}
                            >
                                {/* Technical Image Display */}
                                <div className="w-full md:w-1/2 relative group">
                                    <div className="absolute inset-0 bg-[var(--color-arch-blue)] translate-x-3 translate-y-3 border-arch transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4"></div>
                                    <div className="relative border-arch bg-[var(--color-arch-bg)] z-10 overflow-hidden">
                                        {/* Image overlay to make it feel more architectural */}
                                        <div className="absolute inset-0 blueprint-grid-small opacity-30 mix-blend-multiply pointer-events-none z-20"></div>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full aspect-[4/3] object-cover grayscale opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100"
                                        />
                                        <div className="absolute top-4 left-4 z-20 bg-[var(--color-arch-bg)] border-arch px-2 py-1">
                                            <span className="font-mono text-[10px] uppercase font-bold text-[var(--color-arch-charcoal)]">{project.id}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Node */}
                                <div className="w-full md:w-1/2 flex flex-col items-start relative">
                                    {/* Crosshair decoration */}
                                    <div className="absolute -top-12 -left-12 w-24 h-24 hidden md:block opacity-20 pointer-events-none">
                                        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[var(--color-arch-charcoal)]"></div>
                                        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-[var(--color-arch-charcoal)]"></div>
                                    </div>
                                    
                                    <div className="border-l-arch pl-6 py-2 mb-6">
                                        <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-arch-blue)] block mb-2">
                                            {project.specs}
                                        </span>
                                        <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-[var(--color-arch-charcoal)]">
                                            {project.title}
                                        </h3>
                                    </div>
                                    
                                    <p className="font-mono text-sm leading-relaxed text-[var(--color-arch-charcoal)] mb-8 max-w-md">
                                        {project.description}
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-3 mb-8">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="font-mono text-[10px] uppercase border-arch px-3 py-1 bg-[var(--color-arch-charcoal)] text-[var(--color-arch-bg)]">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {project.isInternal ? (
                                        <Link 
                                            to={project.link} 
                                            className="font-mono text-xs uppercase tracking-widest font-bold border-arch px-6 py-3 hover:bg-[var(--color-arch-charcoal)] hover:text-[var(--color-arch-bg)] transition-colors flex items-center gap-3 group"
                                        >
                                            Access System 
                                            <span className="w-4 h-[1px] bg-[var(--color-arch-charcoal)] group-hover:bg-[var(--color-arch-bg)] transition-colors"></span>
                                        </Link>
                                    ) : (
                                        <a 
                                            href={project.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="font-mono text-xs uppercase tracking-widest font-bold border-arch px-6 py-3 hover:bg-[var(--color-arch-charcoal)] hover:text-[var(--color-arch-bg)] transition-colors flex items-center gap-3 group"
                                        >
                                            External Link 
                                            <span className="w-4 h-[1px] bg-[var(--color-arch-charcoal)] group-hover:bg-[var(--color-arch-bg)] transition-colors"></span>
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
