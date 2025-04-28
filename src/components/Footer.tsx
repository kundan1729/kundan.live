import React from 'react';
import SocialLinks from './SocialLinks';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 px-4 text-center text-text-secondary">
      <div className="md:hidden mb-6">
        <SocialLinks />
      </div>
      <div className="font-mono text-sm">
        <a
          href="https://github.com/bchiang7/v4"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors duration-300"
        >
          Inspired by Brittany Chiang
        </a>
      </div>
      <div className="font-mono text-sm mt-2">
        <p>Built by Kundan Kumar &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;