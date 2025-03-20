'use client'
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import { FaArrowUp } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      
      <footer className="bg-dark py-6 text-center">
        <div className="container mx-auto px-4">
          <p className="text-gray-400 text-sm">
            {String.fromCharCode(169)} {new Date().getFullYear()} Javier Guerrero. Built with Next.js and Tailwind CSS.
          </p>
          <a 
            href="#home"
            className="inline-flex items-center justify-center w-10 h-10 bg-primary rounded-full mt-4 text-white hover:bg-opacity-90 transition-all"
            aria-label="Back to top"
          >
            <FaArrowUp />
          </a>
        </div>
      </footer>
    </main>
  );
}
