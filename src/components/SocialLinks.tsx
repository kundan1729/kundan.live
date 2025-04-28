import React from 'react';
import { socialLinks } from '../data';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

interface SocialIconProps {
  name: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ name }) => {
  const iconProps = {
    size: 20,
    className: 'text-text-secondary hover:text-accent transition-colors duration-300',
  };

  switch (name.toLowerCase()) {
    case 'github':
      return <Github {...iconProps} />;
    case 'linkedin':
      return <Linkedin {...iconProps} />;
    case 'twitter':
      return <Twitter {...iconProps} />;
    case 'mail':
    case 'email':
      return <Mail {...iconProps} />;
    default:
      return null;
  }
};

interface SocialLinksProps {
  isVertical?: boolean;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ isVertical = false }) => {
  return (
    <ul
      className={`flex ${
        isVertical ? 'flex-col space-y-5' : 'flex-row space-x-5'
      } items-center`}
    >
      {socialLinks.map(({ name, url, icon }, i) => (
        <li key={i}>
          <a
            href={url}
            aria-label={name}
            target="_blank"
            rel="noreferrer"
            className="block hover:-translate-y-1 transition-transform duration-300"
          >
            <SocialIcon name={icon} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;