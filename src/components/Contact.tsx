import React from 'react';
import AnimatedSection from './AnimatedSection';

const Contact: React.FC = () => {
  return (
    <AnimatedSection id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
      <h2 className="numbered-heading mb-8 before:content-['04.']">Get In Touch</h2>
      
      <p className="text-text-secondary mb-10 mx-auto max-w-lg">
      Whether it's a new project, a job opportunity, or just a chat about tech and development — I'd love to hear from you! I'm passionate about building great digital experiences and always ready for the next challenge. Let's connect!
      </p>
      
      <a
        href="mailto:kundan234432@gmail.com"
        className="inline-block font-mono text-accent border-2 border-accent rounded px-8 py-4 hover:bg-accent/5 hover:shadow-[0_0_20px_rgba(66,240,182,0.4)] hover:border-opacity-70 hover:scale-110 transition-all duration-300"
      >
        Say Hello
      </a>
    </AnimatedSection>
  );
};

export default Contact;