import React, { useState, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
import { jobs } from '../data';

const Experience: React.FC = () => {
  const [activeItem, setActiveItem] = useState(0);  // State to track the active job

  // Add certifications to the jobs array
  const updatedJobs = [
    ...jobs,
    // Certifications
    {
      company: "IBM",
      title: "IBM DevOps and Software Engineering",
      range: "2025",
      location: "Online",
      url: "https://www.ibm.com/certifications/devops-software-engineering",
      responsibilities: [
        "Learned DevOps principles and practices.",
        "Hands-on experience with CI/CD pipelines.",
        "Implemented automated testing and deployment strategies."
      ]
    },
    {
      company: "University of Michigan",
      title: "Building Web Applications in PHP",
      range: "2025",
      location: "Online",
      url: "https://www.coursera.org/learn/web-applications-php",
      responsibilities: [
        "Mastered the PHP language for backend development.",
        "Built dynamic web applications using PHP and MySQL.",
        "Developed server-side functionality for real-time web apps."
      ]
    },
    {
      company: "Codio",
      title: "Programming in C++: A Hands-on Introduction",
      range: "2025",
      location: "Online",
      url: "https://www.codio.com/courses/programming-in-cpp",
      responsibilities: [
        "Learned fundamental C++ programming concepts.",
        "Built and tested programs using C++ syntax.",
        "Solved real-world problems using object-oriented programming."
      ]
    },
    {
      company: "IIT Kharagpur (NPTEL)",
      title: "Cloud Computing",
      range: "2025",
      location: "Online",
      url: "https://nptel.ac.in/courses/106105166",
      responsibilities: [
        "Gained knowledge of cloud architecture and deployment.",
        "Worked with cloud platforms like AWS, Azure, and GCP.",
        "Designed scalable and cost-efficient cloud applications."
      ]
    },
    {
      company: "Google",
      title: "The Bits and Bytes of Computer Networking",
      range: "2025",
      location: "Online",
      url: "https://www.coursera.org/learn/computer-networking-google",
      responsibilities: [
        "Studied the basics of computer networking.",
        "Learned about protocols like TCP/IP, HTTP, DNS, and more.",
        "Built simple networking applications."
      ]
    },
    {
      company: "NIIT",
      title: "Server-side JavaScript with Node.js",
      range: "2025",
      location: "Online",
      url: "https://www.niit.com/india/training/learn-server-side-javascript-nodejs",
      responsibilities: [
        "Mastered JavaScript for server-side development.",
        "Built REST APIs and backend services using Node.js.",
        "Learned to work with databases and manage server logic."
      ]
    }
  ];

  // Check if we're coming from a certification link
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#certification' || hash === '#experience') {
      // Find the first certification item (first item after jobs)
      setActiveItem(jobs.length);
    }
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <AnimatedSection id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <h2 className="numbered-heading mb-12">Skill Enhancement</h2>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Tab list */}
        <div className="relative md:w-max h-max md:min-h-[200px]">
          <div className="md:flex flex-col overflow-x-auto hide-scrollbar">
            {updatedJobs.map((job, i) => (
              <button
                key={i}
                className={`px-5 py-3 text-left font-mono text-sm whitespace-nowrap ${activeItem === i ? 'text-accent bg-navy-light' : 'text-text-secondary hover:text-accent hover:bg-navy-light/50'} transition-all duration-300`}
                onClick={() => setActiveItem(i)}
              >
                {job.company}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content for Jobs */}
        <div className="min-h-[200px] md:min-w-[500px]">
          {updatedJobs[activeItem] && (
            <motion.div
              key={activeItem}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              <h3 className="text-xl font-medium text-text-primary">
                <span>{updatedJobs[activeItem].title}</span>
                <span className="text-accent"> @ </span>
                <a
                  href={updatedJobs[activeItem].url}
                  className="text-accent inline-block hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {updatedJobs[activeItem].company}
                </a>
              </h3>

              <p className="font-mono text-text-secondary text-sm mb-6">
                {updatedJobs[activeItem].range} | {updatedJobs[activeItem].location}
              </p>

              <ul className="space-y-3">
                {updatedJobs[activeItem].responsibilities.map((responsibility, i) => (
                  <li key={i} className="flex text-text-secondary">
                    <span className="text-accent mr-2 mt-1">▹</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>

              {/* Add link to skill enhancement section for certifications */}
              {activeItem >= jobs.length && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6"
                >
                  <a
                    href="#experience"
                    onClick={(e) => handleScroll(e, '#experience')}
                    className="inline-block font-mono text-accent text-sm hover:underline"
                  >
                    View more about my skill enhancement →
                  </a>
                </motion.div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Experience;
