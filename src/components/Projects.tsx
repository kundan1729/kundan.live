import React from 'react';
import AnimatedSection from './AnimatedSection';
import ProjectCard from './ProjectCard';
import { projects } from '../data';
import { Github, ExternalLink, Folder } from 'lucide-react';

const Projects: React.FC = () => {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <AnimatedSection id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <h2 className="numbered-heading mb-16">Some Things I've Built</h2>

      {/* Featured Projects */}
      <div className="space-y-24 mb-32">
        {featuredProjects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>

      {/* Other Projects Grid */}
      <h3 className="font-semibold text-center text-text-primary text-2xl mb-8">
        Other Noteworthy Projects
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {otherProjects.map((project, i) => (
          <div
            key={i}
            className="bg-background-light rounded-lg p-6 flex flex-col h-full transition-transform duration-300 hover:-translate-y-2"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="text-accent">
                <Folder size={40} strokeWidth={1} />
              </div>
              <div className="flex gap-4 mt-1">
                {project.github && (
                  <a
                    href={project.github}
                    aria-label="GitHub Repository"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-accent transition-colors duration-300"
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
                    className="text-text-secondary hover:text-accent transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
            <h3 className="text-text-primary text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-text-secondary mb-6 flex-grow">{project.description}</p>
            <ul className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((tech, i) => (
                <li key={i} className="font-mono text-xs text-text-secondary">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Projects;