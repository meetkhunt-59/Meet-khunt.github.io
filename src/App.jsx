import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import Header from './components/Header'
import MobileNav from './components/MobileNav'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import SEO from './components/SEO'
import Home from './pages/Home';
import RakshaGrid from './pages/RakshaGrid';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

function App() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <HelmetProvider>
      <Router>
        <SEO />
        <Header toggleMobileNav={toggleMobileNav} isMobileNavOpen={isMobileNavOpen} />
        <MobileNav isOpen={isMobileNavOpen} closeMobileNav={closeMobileNav} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rakshagrid" element={<RakshaGrid />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>

        <Footer />
        <ScrollToTop />
        <Analytics />
        <SpeedInsights />
      </Router>
    </HelmetProvider>
  );
}

export default App
