import React from 'react';

const Projects = () => {
    return (
        <section id="projects" class="section">
            <div class="container">
                <h2 class="section-title">Projects</h2>
                <div class="project-grid">
                    <div class="project-card">
                        <img src="/images/rakshagrid.png" alt="RakshaGrid" />
                        <h3>RakshaGrid</h3>
                        <p>A camera-free, real-time smart home security system using mmWave sensors, privacy-first
                            mapping, and edge AI.</p>
                        <a href="https://github.com/0xDonatHack/Rakshagrid" target="_blank"
                            rel="noopener noreferrer">View Project</a>
                    </div>
                    <div class="project-card">
                        <img src="/images/emroapi.jpeg" alt="EmroAPI" />
                        <h3>EmroAPI</h3>
                        <p>Generate DST embroidery files from images—automating complex SVG-to-stitch pipelines.</p>
                        <a href="http://emroapi.mooo.com/" target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                    <div class="project-card">
                        <img src="/images/locadata.png" alt="LocaData" />
                        <h3>LocaData</h3>
                        <p>Privacy-first location data analytics with geospatial pipelines and synthetic mobility data
                            generation.</p>
                        <a href="https://locadata.onrender.com/" target="_blank" rel="noopener noreferrer">View
                            Project</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
