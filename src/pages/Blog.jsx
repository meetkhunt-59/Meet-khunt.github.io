import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { blogs } from '../data/blogs';
import SEO from '../components/SEO';

const Blog = () => {
    const [selectedTag, setSelectedTag] = useState('ALL');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Extract unique tags
    const allTags = ['ALL', ...Array.from(new Set(blogs.flatMap(blog => blog.tags || [])))];

    const filteredBlogs = selectedTag === 'ALL'
        ? blogs
        : blogs.filter(blog => blog.tags && blog.tags.includes(selectedTag));

    return (
        <>
            <SEO
                title="Technical Dispatches & Blog | Meet Khunt"
                description="Thoughts, research, and technical write-ups on autonomous AI agents, web architectures, systems engineering, and cybersecurity."
                url="https://meetkhunt.vercel.app/blog"
            />

            <main className="min-h-screen pt-32 pb-32 bg-[var(--color-arch-bg)]">
                <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
                    
                    {/* Architectural Header */}
                    <div className="border-b-arch pb-8 mb-12">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-arch-blue)] mb-3 block">
                                    SYS // ARCHIVE & PUBLICATIONS
                                </span>
                                <h1 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase text-[var(--color-arch-charcoal)]">
                                    Technical <br/>
                                    <span className="text-outline-charcoal text-[var(--color-arch-bg)]">Dispatches</span>
                                </h1>
                            </motion.div>

                            <div className="border-arch p-4 bg-[var(--color-arch-beige)] font-mono text-xs space-y-1 self-stretch md:self-auto min-w-[240px]">
                                <div className="flex justify-between border-b border-[var(--color-arch-grid)] pb-1">
                                    <span className="text-[var(--color-arch-charcoal)] opacity-70">TOTAL ENTRIES:</span>
                                    <span className="font-bold text-[var(--color-arch-blue)]">0{blogs.length}</span>
                                </div>
                                <div className="flex justify-between border-b border-[var(--color-arch-grid)] pb-1 pt-1">
                                    <span className="text-[var(--color-arch-charcoal)] opacity-70">AUTHOR:</span>
                                    <span className="font-bold">MEET KHUNT</span>
                                </div>
                                <div className="flex justify-between pt-1">
                                    <span className="text-[var(--color-arch-charcoal)] opacity-70">STATUS:</span>
                                    <span className="text-emerald-700 font-bold uppercase">INDEXED</span>
                                </div>
                            </div>
                        </div>

                        <p className="font-mono text-sm leading-relaxed text-[var(--color-arch-charcoal)] max-w-2xl opacity-90">
                            Engineering write-ups, architectural postmortems, and technical explorations spanning autonomous agents, full-stack systems, and cybersecurity.
                        </p>
                    </div>

                    {/* Tag Filter Bar */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-6 mb-12 no-scrollbar">
                        <span className="font-mono text-xs uppercase text-[var(--color-arch-blue)] mr-2 shrink-0">FILTER //</span>
                        {allTags.map(tag => (
                            <button
                                key={tag}
                                onClick={() => setSelectedTag(tag)}
                                className={`font-mono text-xs uppercase tracking-wider px-3 py-1.5 border transition-all cursor-pointer shrink-0 ${
                                    selectedTag === tag
                                        ? 'bg-[var(--color-arch-charcoal)] text-[var(--color-arch-bg)] border-[var(--color-arch-charcoal)] shadow-[2px_2px_0_0_var(--color-arch-blue)]'
                                        : 'bg-[var(--color-arch-bg)] text-[var(--color-arch-charcoal)] border-[var(--color-arch-charcoal)] hover:bg-[var(--color-arch-beige)]'
                                }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>

                    {/* Articles Grid */}
                    {filteredBlogs.length === 0 ? (
                        <div className="border-arch p-12 text-center bg-[var(--color-arch-beige)]">
                            <span className="font-mono text-sm text-[var(--color-arch-charcoal)] uppercase tracking-wider">
                                NO DISPATCHES FOUND UNDER CATEGORY: {selectedTag}
                            </span>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                            {filteredBlogs.map((blog, index) => (
                                <motion.article
                                    key={blog.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="border-arch bg-[var(--color-arch-bg)] flex flex-col justify-between relative group transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0_0_var(--color-arch-charcoal)]"
                                >
                                    {/* Architectural Corner Registration */}
                                    <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-[var(--color-arch-blue)] transition-transform duration-300 group-hover:scale-125 z-20"></div>

                                    <div>
                                        {/* Card Top Metadata Header */}
                                        <div className="border-b-arch px-6 py-4 flex justify-between items-center bg-[var(--color-arch-beige)] font-mono text-xs">
                                            <span className="text-[var(--color-arch-blue)] font-bold tracking-widest">
                                                DISPATCH // 0{index + 1}
                                            </span>
                                            <span className="text-[var(--color-arch-charcoal)] opacity-70">
                                                {new Date(blog.date).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'short',
                                                    day: '2-digit'
                                                })}
                                            </span>
                                        </div>

                                        {/* Cover Image Frame */}
                                        {blog.coverImage && (
                                            <div className="border-b-arch relative h-48 md:h-56 overflow-hidden bg-[var(--color-arch-charcoal)]">
                                                <img
                                                    src={blog.coverImage}
                                                    alt={blog.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                                                />
                                                <div className="absolute inset-0 blueprint-grid-small opacity-15 pointer-events-none mix-blend-multiply"></div>
                                            </div>
                                        )}

                                        {/* Card Body */}
                                        <div className="p-6 md:p-8">
                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {blog.tags.map(tag => (
                                                    <span 
                                                        key={tag}
                                                        className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 border border-[var(--color-arch-charcoal)] bg-[var(--color-arch-beige)] text-[var(--color-arch-charcoal)]"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Title */}
                                            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-[var(--color-arch-charcoal)] group-hover:text-[var(--color-arch-blue)] transition-colors mb-4 line-clamp-2">
                                                <Link to={`/blog/${blog.slug}`}>
                                                    {blog.title}
                                                </Link>
                                            </h2>

                                            {/* Excerpt */}
                                            <p className="font-mono text-xs md:text-sm leading-relaxed text-[var(--color-arch-charcoal)] opacity-80 line-clamp-3">
                                                {blog.excerpt}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Action Footer */}
                                    <div className="border-t-arch px-6 py-4 flex justify-between items-center bg-[var(--color-arch-bg)] font-mono text-xs">
                                        <span className="text-[var(--color-arch-charcoal)] opacity-60 uppercase text-[10px]">
                                            DOC // {blog.slug.slice(0, 16)}...
                                        </span>
                                        <Link
                                            to={`/blog/${blog.slug}`}
                                            className="inline-flex items-center gap-2 font-bold uppercase tracking-wider text-[var(--color-arch-blue)] group-hover:text-[var(--color-arch-charcoal)] transition-colors"
                                        >
                                            READ SPECIFICATION
                                            <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                                        </Link>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    )}
                </div>
            </main>
        </>
    );
};

export default Blog;
