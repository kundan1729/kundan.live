import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const isOdd = index % 2 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex flex-col ${
        isOdd ? 'md:flex-row-reverse' : 'md:flex-row'
      } items-center group`}
    >
      {/* Project Image */}
      <div className="w-full md:w-7/12 h-64 md:h-96 rounded-lg overflow-hidden shadow-xl">
        <img
          src={
            project.image ||
            `https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`
          }
          alt={project.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Project Info */}
      <div
        className={`w-full md:w-5/12 md:absolute z-10 rounded-lg ${
          isOdd ? 'md:left-0' : 'md:right-0'
        }`}
      >
        <div
          className={`p-6 rounded-lg ${
            isOdd ? 'md:text-left md:items-start' : 'md:text-right md:items-end'
          } flex flex-col bg-background-light shadow-xl`}
        >
          <p className="font-mono text-accent text-sm mb-1">Featured Project</p>
          <h3 className="text-text-primary text-2xl font-bold mb-4">{project.title}</h3>

          <div className="text-text-secondary mb-4 rounded-lg">{project.description}</div>

          <ul
            className={`flex flex-wrap gap-2 mb-6 ${
              isOdd ? 'md:justify-start' : 'md:justify-end'
            }`}
          >
            {project.tech.map((tech, i) => (
              <li
                key={i}
                className="font-mono text-text-secondary text-xs bg-navy-dark px-3 py-1 rounded"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className={`flex gap-4 ${isOdd ? 'md:justify-start' : 'md:justify-end'}`}>
            {project.github && (
              <a
                href={project.github}
                aria-label="GitHub Repository"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary hover:text-accent transition-colors duration-300"
              >
                <Github size={20} />
              </a>
            )}
            {project.external && (
              <a
                href={project.external}
                aria-label="External Link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary hover:text-accent transition-colors duration-300"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;