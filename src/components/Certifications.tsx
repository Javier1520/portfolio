'use client'
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaAward } from 'react-icons/fa';
import { Certification, AnimationVariants } from '@/types';

const Certifications = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const certifications: Certification[] = [
    {
      title: 'Meta Backend Developer Specialization',
      issuer: 'Meta',
      description: 'A comprehensive certification covering backend development fundamentals, APIs, and database management.',
      link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/ABCDEFGH1234',
      date: 'January 2023'
    }
  ];

  const motionVariants: AnimationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="certifications" className="section-padding bg-gradient-to-b from-black to-dark">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Professional credentials validating my expertise
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={motionVariants}
          className="max-w-3xl mx-auto"
        >
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-dark bg-opacity-50 p-6 rounded-lg mb-6 flex items-start gap-4"
            >
              <div className="text-primary text-4xl mt-1">
                <FaAward />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className="text-gray-300 mb-1">Issuer: {cert.issuer}</p>
                <p className="text-gray-300 mb-1">Date: {cert.date}</p>
                <p className="text-gray-300 mb-3">{cert.description}</p>
                {cert.link && (
                  <a 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary hover:text-opacity-80 transition-colors"
                  >
                    View Credential
                  </a>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
