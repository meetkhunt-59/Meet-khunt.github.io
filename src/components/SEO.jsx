import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, url, image, type = 'website', jsonLd }) => {
    const siteTitle = title ? `${title} | Meet Khunt` : "Meet Khunt – Tech Innovator";
    const siteDescription = description || "Meet Khunt is the founder of RakshaGrid & EmroAPI, building privacy-first IoT systems, edge AI solutions, and embroidery automation tools.";
    const siteUrl = url || "https://meetkhunt.vercel.app/";
    const siteImage = image || "https://meetkhunt.vercel.app/images/banner.jpg";
    const twitterHandle = "@meetkhunt_59";

    const defaultJsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Meet Khunt",
        "url": "https://meetkhunt.vercel.app/",
        "image": "https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        "sameAs": [
            "https://www.linkedin.com/in/meetkhunt59",
            "https://github.com/meetkhunt",
            "https://twitter.com/meetkhunt_59"
        ],
        "jobTitle": "Founder & Tech Innovator",
        "worksFor": [
            {
                "@type": "Organization",
                "name": "RakshaGrid",
                "url": "https://github.com/0xDonatHack/Rakshagrid"
            },
            {
                "@type": "Organization",
                "name": "EmroAPI",
                "url": "http://emroapi.mooo.com/"
            }
        ],
        "description": "Meet Khunt is the founder of RakshaGrid & EmroAPI, building privacy-first IoT systems, edge AI solutions, and embroidery automation tools.",
        "knowsAbout": ["IoT", "Edge AI", "React", "Privacy-first Systems", "Embroidery Automation", "Synthetic Data"]
    };

    const structuredData = jsonLd || defaultJsonLd;

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription} />
            <meta name="keywords" content="Meet Khunt, RakshaGrid, EmroAPI, IoT, Edge AI, React, Privacy, Smart Home, Embroidery API" />
            <meta name="author" content="Meet Khunt" />
            <link rel="canonical" href={siteUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={siteDescription} />
            <meta property="og:image" content={siteImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={twitterHandle} />
            <meta name="twitter:url" content={siteUrl} />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={siteDescription} />
            <meta name="twitter:image" content={siteImage} />

            {/* JSON-LD for AI and Search Engines */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
};

export default SEO;
