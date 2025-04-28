import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ErrorBoundary from './components/ErrorBoundary';
import LogoLoader from './components/LogoLoader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // First timer for LogoLoader animation (4.5 seconds)
    const logoTimer = setTimeout(() => {
      // Second timer for 2-second delay after LogoLoader
      const delayTimer = setTimeout(() => {
        setLoading(false);
      }, 2000);
      
      return () => clearTimeout(delayTimer);
    }, 1200);

    return () => clearTimeout(logoTimer);
  }, []);

  return (
    <ErrorBoundary>
      <AnimatePresence mode="wait">
        {loading ? (
          <LogoLoader key="loader" />
        ) : (
          <>
            <Helmet>
              <title>Kundan Kumar</title>
              <meta name="description" content="Portfolio website of Kundan Kumar, a MERN Stack Developer specializing in building modern web applications." />
              <meta name="keywords" content="MERN Stack, React, Node.js, MongoDB, Express, Web Development, Full Stack Developer" />
              
              {/* Open Graph / Facebook */}
              <meta property="og:type" content="website" />
              <meta property="og:title" content="Kundan Kumar" />
              <meta property="og:description" content="Portfolio website of Kundan Kumar, a MERN Stack Developer specializing in building modern web applications." />
              <meta property="og:url" content="https://your-portfolio-url.com" />
              
              {/* Twitter */}
              <meta property="twitter:card" content="summary_large_image" />
              <meta property="twitter:title" content="Kundan Kumar" />
              <meta property="twitter:description" content="Portfolio website of Kundan Kumar, a MERN Stack Developer specializing in building modern web applications." />
              <meta property="twitter:url" content="https://your-portfolio-url.com" />
            </Helmet>

            <Layout>
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Contact />
            </Layout>
          </>
        )}
      </AnimatePresence>
    </ErrorBoundary>
  );
}

export default App;