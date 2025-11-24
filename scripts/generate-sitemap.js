import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Since we are in a module, we need to construct __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import blogs data
// We need to read the file directly because we can't import ES modules easily in this script context without more config
// So we'll just read the file and regex the slugs out for simplicity, or we can try to import it if we rename to .mjs
// Let's try a simple regex approach to avoid dependency issues in this script
const blogsPath = path.join(__dirname, '../src/data/blogs.js');
const blogsContent = fs.readFileSync(blogsPath, 'utf-8');

// Extract slugs using regex
const slugRegex = /slug:\s*["']([^"']+)["']/g;
let match;
const slugs = [];
while ((match = slugRegex.exec(blogsContent)) !== null) {
    slugs.push(match[1]);
}

const baseUrl = 'https://meetkhunt.vercel.app';
const pages = ['', '/rakshagrid', '/blog'];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>
`).join('')}
${slugs.map(slug => `
  <url>
    <loc>${baseUrl}/blog/${slug}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`).join('')}
</urlset>`;

fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap);
console.log('Sitemap generated successfully!');
