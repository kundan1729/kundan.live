import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { skills } from '../data';
import kundanImage from '../images/kundanPC.jpg';

const About: React.FC = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.19, 1, 0.22, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.19, 1, 0.22, 1],
        delay: 0.2,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.4 + i * 0.1,
        ease: [0.19, 1, 0.22, 1],
      },
    }),
  };

  return (
    <AnimatedSection id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.h2 
        className="numbered-heading mb-12 before:content-['</>']"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
      >
        About Me
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <motion.div 
          className="md:col-span-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={textVariants}
        >
          <div className="space-y-4 text-text-secondary">
            <motion.p variants={textVariants}>
              Hello! I'm Kundan, a web development enthusiast currently studying at Lovely Professional University. 
              My journey began with exploring how websites are made, which sparked my passion for HTML and CSS.
              Over time, I built strong skills in the MERN stack, participated in hackathons, and consistently solve LeetCode
              problems to sharpen my problem-solving abilities.
            </motion.p>
            <motion.p variants={textVariants}>
              As a fresher in the industry, I focus on building accessible, inclusive digital experiences and
              am always eager to learn new technologies and frameworks to expand my knowledge and grow as a developer.
            </motion.p>

            <motion.p variants={textVariants}>Here are a few technologies I've been working with recently:</motion.p>

            <motion.ul 
              className="grid grid-cols-2 gap-x-4 gap-y-2 mt-4"
              variants={textVariants}
            >
              {skills.map((skill, i) => (
                <motion.li 
                  key={i} 
                  className="flex items-center font-mono text-sm"
                  custom={i}
                  variants={skillVariants}
                >
                  <span className="text-accent mr-2">▹</span>
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>

        <motion.div 
          className="md:col-span-1 flex justify-center items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={imageVariants}
        >
          <div className="relative group w-full">
            <div className="relative rounded-md overflow-hidden w-full h-80 bg-accent/20">
              <div className="absolute inset-0 opacity-30 group-hover:opacity-0 transition-opacity duration-300"></div>
              <img
                src={kundanImage}
                alt="Kundan Kumar"
                className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl"
              />
            </div>
            <motion.div 
              className="absolute -inset-1.5 border border-accent rounded-lg -z-10 translate-x-5 translate-y-5 transition-transform duration-300 group-hover:border-accent/50 group-hover:translate-x-4 group-hover:translate-y-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default About;
