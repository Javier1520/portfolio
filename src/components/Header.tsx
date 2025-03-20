'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';

const Header = () => {
  return (
    <header id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark to-black z-0"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] bg-repeat"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left md:max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="block">Javier Guerrero</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-300">
            Full-Stack Developer | Backend Specialist
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl">
            I build scalable, efficient, and secure web applications with a focus on backend development using Python, Django, and modern DevOps tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="#projects" className="btn-primary">
              View Projects
            </Link>
            <Link href="#contact" className="btn-outline">
              Contact Me
            </Link>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
