import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { navLinks } from '../data';
import { Menu, X, Folder } from 'lucide-react';
import useScroll from '../hooks/useScroll';
import { NavLink } from '../types';

const Navbar: React.FC = () => {
  const scrolled = useScroll(50);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setMenuOpen(false);
    }
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.5,
        ease: 'easeInOut',
      },
    }),
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setMenuOpen(false);
    }
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-sm py-4 shadow-md' : 'bg-transparent py-6'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => handleScroll(e, '#hero')}
            className="text-accent hover:text-accent/90 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            aria-label="Home"
          >
            <span className="font-semibold text-2xl">KD.</span>
          </motion.a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link: NavLink, i: number) => (
              <motion.a
                key={i}
                href={link.url}
                onClick={(e) => handleScroll(e, link.url)}
                className="nav-link font-mono text-m"
                custom={i}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                aria-current={link.url === window.location.hash ? 'page' : undefined}
              >
                {/* <span className="text-accent mr-1">{`0${i + 1}.`}</span> */}
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="https://kundan1729.github.io/Resume/"
              className="font-mono text-sm px-4 py-2 border-2 border-accent text-accent rounded hover:bg-accent/5 hover:shadow-[0_0_20px_rgba(66,240,182,0.4)] hover:border-opacity-70 hover:scale-110 transition-all duration-300"
              custom={navLinks.length}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Resume"
            >
              Resume
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-text-primary hover:text-accent transition-colors duration-300 p-2"
              aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        id="mobile-menu"
        className={`fixed inset-0 bg-background-light md:hidden ${
          menuOpen ? 'flex' : 'hidden'
        } z-40 flex-col items-center justify-center`}
        initial={{ opacity: 0, x: '100%' }}
        animate={menuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: '100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
        onKeyDown={handleKeyPress}
      >
        <div className="flex flex-col items-center space-y-6">
          {navLinks.map((link: NavLink, i: number) => (
            <a
              key={i}
              href={link.url}
              onClick={(e) => handleScroll(e, link.url)}
              className="nav-link font-mono text-lg"
              aria-current={link.url === window.location.hash ? 'page' : undefined}
            >
              <span className="text-accent mr-2">{`0${i + 1}.`}</span>
              {link.name}
            </a>
          ))}
          <a
            href="https://kundan1729.github.io/Resume/"
            className="mt-4 font-mono text-lg px-6 py-3 border border-accent text-accent rounded hover:bg-accent/10 transition-colors duration-300"
            onClick={() => setMenuOpen(false)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Resume"
          >
            Resume
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;