export interface NavLink {
  name: string;
  url: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  external?: string;
  featured?: boolean;
  image?: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
  tech: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface AnimatedSectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

export interface ProjectCardProps {
  project: Project;
  index: number;
}

export interface Job {
  title: string;
  company: string;
  location: string;
  range: string;
  url: string;
  responsibilities: string[];
}

export interface NavItem {
  name: string;
  url: string;
}