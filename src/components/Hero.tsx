import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-6"
        >
          <p className="font-mono text-accent">Hi, my name is</p>
        </motion.div>

        <AnimatedText
          text="Kundan   Kumar."
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-text-primary leading-tight mb-2"
          delay={1}
        />

        <AnimatedText
          text="I     build    things    for    the    web."
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-secondary leading-tight mb-8"
          delay={1.5}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 }}
          className="text-text-secondary max-w-xl text-lg mb-12"
        >
          I'm a MERN stack developer specializing in building exceptional digital experiences.
          Currently, I'm focused on building accessible, responsive web applications with React,
          Node.js, Express, and MongoDB.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.3 }}
        >
          <a
            href="#projects"
            className="inline-block font-mono text-accent border-2 border-accent rounded px-6 py-4 hover:bg-accent/5 hover:shadow-[0_0_20px_rgba(66,240,182,0.4)] hover:border-opacity-70 hover:scale-110 transition-all duration-300"
          >
            Check out my work!
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;