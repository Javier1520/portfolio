'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { AnimationVariants } from '@/types';

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const fadeInVariants: AnimationVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="about" className="section-padding bg-dark bg-opacity-50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg mb-4 text-gray-300">
              Hi, I'm Javier Guerrero, a Systems Engineering dropout turned passionate full-stack developer from Colombia. I specialize in crafting robust backend systems with Django and Python, complemented by frontend skills in React and Next.js.
            </p>
            <p className="text-lg mb-4 text-gray-300">
              With a Meta Backend Developer certification and hands-on experience in Docker, RESTful APIs, and real-time applications, I'm driven to solve complex problems and deliver high-quality software solutions.
            </p>
            <p className="text-lg text-gray-300">
              I thrive in collaborative environments, leveraging my communication, adaptability, and problem-solving skills to create impactful digital experiences.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
              <Image 
                src="/icon.svg" 
                alt="Javier Guerrero" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
