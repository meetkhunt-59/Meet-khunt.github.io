import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogs } from '../data/blogs';
import SEO from '../components/SEO';

const MotionDiv = motion.create('div');
const MotionArticle = motion.create('article');

const Blog = () => {
    return (
        <>
            <SEO
                title="Blog"
                description="Read my latest thoughts on web development, technology, and more."
                url="https://meetkhunt.vercel.app/blog"
            />

            <section className="blog-section container">
                <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="blog-header"
                >
                    <h1>My Blog</h1>
                    <p>
                        Thoughts, tutorials, and insights on web development and technology.
                    </p>
                </MotionDiv>

                <div className="blog-grid">
                    {blogs.map((blog, index) => (
                        <MotionArticle
                            key={blog.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="blog-card"
                        >
                            <Link to={`/blog/${blog.slug}`}>
                                <div className="blog-image-container">
                                    <img
                                        src={blog.coverImage}
                                        alt={blog.title}
                                    />
                                </div>
                                <div className="blog-content">
                                    <div className="blog-tags">
                                        {blog.tags.map(tag => (
                                            <span key={tag} className="blog-tag">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h2 className="blog-title">
                                        {blog.title}
                                    </h2>
                                    <p className="blog-excerpt">
                                        {blog.excerpt}
                                    </p>
                                    <div className="blog-footer">
                                        <span className="blog-date">
                                            {new Date(blog.date).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </span>
                                        <span className="read-more">
                                            Read More →
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </MotionArticle>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Blog;
