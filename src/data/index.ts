import { Project, Job, SocialLink, NavItem } from '../types';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import nextHireImage from '../images/nextHire.png';
import careConnectImage from '../images/careConnect.png';
import sdeResourceImage from '../images/SdeResource.png';
import resumeImage from '../images/Resume.png';

// Rename the interface to avoid the conflict
interface NavigationItem {
  name: string;
  url: string;
}

// Use the renamed type in the navLinks array
export const navLinks: NavigationItem[] = [
  {
    name: 'About',
    url: '#about',
  },
  {
    name: 'Certifications',
    url: '#experience',
  },
  {
    name: 'Projects',
    url: '#projects',
  },
  {
    name: 'Contact',
    url: '#contact',
  },
];


export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/kundan1729',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kundan1729/',
    icon: 'linkedin',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: 'twitter',
  },
  {
    name: 'Email',
    url: 'mailto:kundan234432@gmail.com',
    icon: 'mail',
  },
];

export const projects: Project[] = [
  {
    title: 'nextHire',
    description:
      'A modern job hiring platform built using Next.js, allowing users to search for jobs and apply online. Features include job listings, application tracking, and user authentication.',
    tech: ['Next.js', 'React', 'Node.js', 'Tailwind CSS'],
    github: 'https://github.com/kundan1729/nextHire/tree/master',
    external: 'https://gleeful-tiramisu-032d63.netlify.app/',
    featured: true,
    image: nextHireImage,
  },
  {
    title: 'CareConnect',
    description:
      'A comprehensive hospital management system enabling appointment booking, attendance tracking, and patient management for doctors and staff.',
    tech: ['Laravel', 'React', 'MySQL', 'Tailwind CSS'],
    github: 'https://github.com/kundan1729/CareConnect',
    featured: true,
    image: careConnectImage,
  },
  {
    title: 'SDE Resource Hub',
    description:
      'A curated hub containing resources for SDE (Software Development Engineer) preparation including DSA, System Design, and interview materials.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/kundan1729/SDE-resource-Hub',
    featured: true,
    image: sdeResourceImage,
  },
  {
    title: 'Music Player System',
    description:
      'A full-featured music player system developed as part of a summer training project. Features include song browsing, playlist management, and audio controls.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    github: 'https://github.com/kundan1729/Music-Player-System-Summer-Traning-Project',
    featured: false,
  },
  {
    title: 'Resume Website',
    description:
      'A personal resume website showcasing skills, education, projects, and achievements in a professional and clean layout.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/kundan1729/Resume',
    featured: true,
    image:resumeImage,
  },
  {
    title: 'Responsive Coffee Shop Website',
    description:
      'A fully responsive coffee shop website designed to provide a seamless user experience across devices. It includes sections for menu, location, and contact information.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/kundan1729/Responsive-cofee-shop-website',
    featured: false,
  },
  {
    title: 'Infinity Gaming Frontend Project',
    description:
      'A frontend project for an Infinity Gaming platform, focusing on gaming content, user interaction, and game promotion.',
    tech: ['React', 'CSS', 'JavaScript'],
    github: 'https://github.com/kundan1729/Infinity-Gaming-Frontend-Project',
    featured: false,
  },
];


export const jobs: Job[] = [
  {
    title: 'Professional Training in MERN Stack Development',
    company: 'Cantiliver Labs',
    location: 'Online',
    range: 'Jan 2025 - Feb 2025',
    url: 'https://cantiliverlabs.com',
    responsibilities: [
      'Developed 12 mini projects, including a dynamic Wallpaper Carousel, a real-time Weather App with API integration, and responsive Landing Pages',
      'Built 3 full-fledged applications, such as an event management platform, an SDE Resource Hub, and a gaming-themed Landing Page',
      'Implemented authentication, API handling, and database design, utilizing React, Node.js, Express, and MongoDB for scalable web applications',
    ],
  },
  {
    title: 'Data Structures and Algorithms Training',
    company: 'Geeks for Geeks',
    location: 'Online',
    range: 'June 2024 - July 2024',
    url: 'https://www.geeksforgeeks.org',
    responsibilities: [
      'Completed DSA Self-Paced training under expert guidance',
      'Gained proficiency in Data Structures and Algorithms, including arrays, linked lists, trees, and graphs',
      'Solved coding problems and implemented algorithms to enhance problem-solving skills',
    ],
  },
  
];


export const skills = [
 
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'HTML & CSS',
  'Tailwind CSS',
  'RESTful APIs',
  'Git & GitHub',
  'Docker',
  'Jenkins',
];