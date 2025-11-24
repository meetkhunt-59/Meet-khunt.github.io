import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { blogs } from '../data/blogs';
import SEO from '../components/SEO';

const MotionDiv = motion.create('div');

const BlogPost = () => {
    const { slug } = useParams();
    const blog = blogs.find(b => b.slug === slug);

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

    return (
        <>
            <SEO
                title={blog.title}
                description={blog.excerpt}
                image={blog.coverImage}
                url={`https://meetkhunt.vercel.app/blog/${blog.slug}`}
                type="article"
                jsonLd={jsonLd}
            />

            <article className="blog-post-container container">
                <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link to="/blog" className="back-link">
                        ← Back to Blog
                    </Link>

                    <div className="post-header">
                        <div className="blog-tags">
                            {blog.tags.map(tag => (
                                <span key={tag} className="blog-tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h1 className="post-title">
                            {blog.title}
                        </h1>
                        <div className="post-meta">
                            <span>
                                {new Date(blog.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </span>
                            <span>•</span>
                            <span>Meet Khunt</span>
                        </div>
                    </div>

                    <div className="post-cover-image">
                        <img
                            src={blog.coverImage}
                            alt={blog.title}
                        />
                    </div>

                    <div className="markdown-content">
                        <ReactMarkdown>{blog.content}</ReactMarkdown>
                    </div>
                </MotionDiv>
            </article>
        </>
    );
};

export default BlogPost;
