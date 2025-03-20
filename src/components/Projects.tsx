'use client'
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Project, AnimationVariants } from '@/types';

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const projects: Project[] = [
    {
      title: 'Bingo Game',
      description: 'A full-stack Django DRF and React application enabling user registration, real-time gameplay, and win claims. Features secure API authentication with session tokens, WebSocket integration, and Dockerized deployment.',
      techStack: ['Django DRF', 'React', 'WebSockets', 'Docker', 'Pipenv'],
      achievement: 'Reduced development time by 80% with Django test suite.',
      image: '/bingo.jpg',
      links: {
        frontend: 'https://github.com/Javier1520/bingo-game-frontend',
        backend: 'https://github.com/Javier1520/bingo-game-backend',
        deployed: 'https://bingo-frontend-phi.vercel.app/'
      },
      featured: true
    },    
    {
      title: 'Electronic Logbook',
      description: 'A Django DRF application for electronic logbook.',
      techStack: ['Django DRF', 'Djoser', 'React'],
      achievement: 'Effective use of maps with coordinates.',
      image: '/electronic-logbook.jpg',
      links: {
        github: 'https://github.com/Javier1520/eld'
      },
      featured: false
    },
    {
      title: 'Financial Advisor Landing Page',
      description: 'A responsive landing page built with Next.js 15 and styled with Tailwind CSS for optimal performance and aesthetics.',
      techStack: ['Next.js', 'Tailwind CSS'],
      achievement: '',
      image: '/financial.jpg',
      links: {
        github: 'https://github.com/Javier1520/financial-advisor-landing'
      },
      featured: false
    }
  ];

  const containerVariants: AnimationVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: AnimationVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="section-padding bg-dark">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Showcasing my strongest work with a focus on backend development
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-16"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`project-card overflow-hidden ${
                project.featured ? 'border-2 border-primary' : ''
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-md text-sm font-bold">
                      Featured Project
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold mb-2">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className="bg-dark bg-opacity-80 px-3 py-1 rounded-md text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {project.achievement && (
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold mb-2">Achievement</h4>
                        <p className="text-gray-300">{project.achievement}</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mt-4">
                    {project.links.github && (
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white hover:text-primary transition-colors"
                      >
                        <FaGithub /> GitHub
                      </a>
                    )}
                    {project.links.frontend && (
                      <a 
                        href={project.links.frontend} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white hover:text-primary transition-colors"
                      >
                        <FaGithub /> Frontend
                      </a>
                    )}
                    {project.links.backend && (
                      <a 
                        href={project.links.backend} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white hover:text-primary transition-colors"
                      >
                        <FaGithub /> Backend
                      </a>
                    )}
                    {project.links.deployed && (
                      <a 
                        href={project.links.deployed} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white hover:text-primary transition-colors"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
