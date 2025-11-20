import { useState } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { Analytics } from "@vercel/analytics/react"
import Header from './components/Header'
import MobileNav from './components/MobileNav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import SEO from './components/SEO'

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
      <SEO />
      <Header toggleMobileNav={toggleMobileNav} isMobileNavOpen={isMobileNavOpen} />
      <MobileNav isOpen={isMobileNavOpen} closeMobileNav={closeMobileNav} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <Analytics />
    </HelmetProvider>
  )
}

export default App
