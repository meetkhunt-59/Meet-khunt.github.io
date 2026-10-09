import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { blogs } from '../data/blogs';
import SEO from '../components/SEO';

const BlogPost = () => {
    const { slug } = useParams();
    const blog = blogs.find(b => b.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!blog) {
        return <Navigate to="/blog" replace />;
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": blog.title,
        "image": blog.coverImage,
        "author": {
            "@type": "Person",
            "name": "Meet Khunt",
            "url": "https://meetkhunt.vercel.app/"
        },
        "publisher": {
            "@type": "Person",
            "name": "Meet Khunt",
            "logo": {
                "@type": "ImageObject",
                "url": "https://meetkhunt.vercel.app/favicon.svg"
            }
        },
        "datePublished": blog.date,
        "description": blog.excerpt
    };

    // Calculate approximate read time
    const wordCount = blog.content ? blog.content.split(/\s+/).length : 500;
    const readTimeMin = Math.max(1, Math.ceil(wordCount / 200));

    return (
        <>
            <SEO
                title={`${blog.title} | Meet Khunt`}
                description={blog.excerpt}
                image={blog.coverImage}
                url={`https://meetkhunt.vercel.app/blog/${blog.slug}`}
                type="article"
                jsonLd={jsonLd}
            />

            <main className="min-h-screen pt-32 pb-32 bg-[var(--color-arch-bg)]">
                <div className="w-full max-w-4xl mx-auto px-4 md:px-8">
                    
                    {/* Return Navigation */}
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-8"
                    >
                        <Link 
                            to="/blog" 
                            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--color-arch-blue)] hover:text-[var(--color-arch-charcoal)] transition-colors group"
                        >
                            <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
                            <span>RETURN TO ARCHIVE</span>
                        </Link>
                    </motion.div>

                    {/* Article Editorial Header */}
                    <motion.header
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="border-b-arch pb-8 mb-10"
                    >
                        <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-arch-blue)] mb-3 block">
                            SPECIFICATION // DISPATCH_{blog.id < 10 ? `0${blog.id}` : blog.id}
                        </span>

                        <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-[var(--color-arch-charcoal)] leading-tight mb-6">
                            {blog.title}
                        </h1>

                        {/* Technical Metadata Matrix */}
                        <div className="border-arch bg-[var(--color-arch-beige)] p-4 grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs mb-6">
                            <div>
                                <span className="block opacity-60 text-[10px] uppercase">DATE //</span>
                                <span className="font-bold text-[var(--color-arch-charcoal)]">
                                    {new Date(blog.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'short',
                                        day: '2-digit'
                                    })}
                                </span>
                            </div>
                            <div>
                                <span className="block opacity-60 text-[10px] uppercase">AUTHOR //</span>
                                <span className="font-bold text-[var(--color-arch-charcoal)]">MEET KHUNT</span>
                            </div>
                            <div>
                                <span className="block opacity-60 text-[10px] uppercase">READ TIME //</span>
                                <span className="font-bold text-[var(--color-arch-blue)]">~{readTimeMin} MIN</span>
                            </div>
                            <div>
                                <span className="block opacity-60 text-[10px] uppercase">CLASSIFICATION //</span>
                                <span className="font-bold text-[var(--color-arch-charcoal)]">TECHNICAL SPEC</span>
                            </div>
                        </div>

                        {/* Tag Array */}
                        <div className="flex flex-wrap gap-2">
                            {blog.tags && blog.tags.map(tag => (
                                <span
                                    key={tag}
                                    className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 border border-[var(--color-arch-charcoal)] bg-[var(--color-arch-bg)] text-[var(--color-arch-charcoal)]"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </motion.header>

                    {/* Cover Image */}
                    {blog.coverImage && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="border-arch p-2 bg-[var(--color-arch-bg)] relative mb-12 shadow-[6px_6px_0_0_var(--color-arch-charcoal)]"
                        >
                            {/* Corner Accents */}
                            <div className="absolute top-0 left-0 w-2 h-2 bg-[var(--color-arch-blue)] -translate-x-1/2 -translate-y-1/2"></div>
                            <div className="absolute top-0 right-0 w-2 h-2 bg-[var(--color-arch-blue)] translate-x-1/2 -translate-y-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-2 h-2 bg-[var(--color-arch-blue)] -translate-x-1/2 translate-y-1/2"></div>
                            <div className="absolute bottom-0 right-0 w-2 h-2 bg-[var(--color-arch-blue)] translate-x-1/2 translate-y-1/2"></div>

                            <div className="relative overflow-hidden bg-[var(--color-arch-charcoal)] max-h-[460px]">
                                <img
                                    src={blog.coverImage}
                                    alt={blog.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 blueprint-grid-small opacity-15 pointer-events-none mix-blend-multiply"></div>
                            </div>
                        </motion.div>
                    )}

                    {/* Article Content / Markdown Body */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="arch-prose max-w-none border-b-arch pb-16 mb-16"
                    >
                        <ReactMarkdown>{blog.content}</ReactMarkdown>
                    </motion.div>

                    {/* Article Terminal Footer */}
                    <div className="border-arch bg-[var(--color-arch-beige)] p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div>
                            <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-arch-blue)] block mb-1">
                                RECORD_ID // {blog.slug}
                            </span>
                            <span className="font-mono text-xs text-[var(--color-arch-charcoal)] opacity-70">
                                End of specification. For inquiries or collaboration, initiate contact.
                            </span>
                        </div>
                        <div className="flex gap-4">
                            <Link
                                to="/blog"
                                className="font-mono text-xs uppercase tracking-widest px-4 py-2 border border-[var(--color-arch-charcoal)] bg-[var(--color-arch-bg)] hover:bg-[var(--color-arch-charcoal)] hover:text-[var(--color-arch-bg)] transition-colors"
                            >
                                ← ARCHIVE
                            </Link>
                            <Link
                                to="/#contact"
                                className="font-mono text-xs uppercase tracking-widest px-4 py-2 border border-[var(--color-arch-charcoal)] bg-[var(--color-arch-blue)] text-white hover:bg-[var(--color-arch-charcoal)] transition-colors shadow-[2px_2px_0_0_var(--color-arch-charcoal)]"
                            >
                                CONTACT // MK
                            </Link>
                        </div>
                    </div>

                </div>
            </main>
        </>
    );
};

export default BlogPost;
