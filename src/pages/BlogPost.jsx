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
                    style={{ maxWidth: '800px', margin: '0 auto' }}
                >
                    <Link to="/blog" className="back-link">
                        ← Back to Blog
                    </Link>

                    <div className="content-box bg-white" style={{ padding: '40px', borderRadius: '0px', background: '#ffffff', border: '1px solid #e4e4e7' }}>
                        <div className="post-header mb-8 text-center">
                            <div className="blog-tags justify-center mb-4">
                                {blog.tags.map(tag => (
                                    <span key={tag} className="blog-tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h1 className="post-title mb-4">
                                {blog.title}
                            </h1>
                            <div className="post-meta justify-center text-sm text-secondary">
                                <span>
                                    {new Date(blog.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </span>
                                <span className="mx-2">•</span>
                                <span>Meet Khunt</span>
                            </div>
                        </div>

                        <div className="post-cover-image" style={{
                            marginBottom: '32px',
                            overflow: 'hidden',
                            position: 'relative',
                            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                            border: '1px solid var(--surface-border)',
                            borderRadius: '0px',
                            width: '100%',
                            maxWidth: '700px',
                            height: '350px',
                            marginLeft: 'auto',
                            marginRight: 'auto'
                        }}>
                            <img
                                src={blog.coverImage}
                                alt={blog.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>

                        <div className="markdown-content">
                            <ReactMarkdown>{blog.content}</ReactMarkdown>
                        </div>
                    </div>
                </MotionDiv>
            </article>
        </>
    );
};

export default BlogPost;
