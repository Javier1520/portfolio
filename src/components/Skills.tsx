'use client'
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaPython, 
  FaReact, 
  FaJava, 
  FaDocker, 
  FaGitAlt, 
  FaDatabase
} from 'react-icons/fa';
import { 
  SiDjango, 
  SiTypescript, 
  SiJavascript, 
  SiSpringboot, 
  SiPostgresql, 
  SiMysql
} from 'react-icons/si';
import { SkillCategory, AnimationVariants } from '@/types';

const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const skillCategories: SkillCategory[] = [
    {
      name: 'Programming Languages & Frameworks',
      skills: [
        { name: 'Python', icon: <FaPython className="text-4xl mb-2 text-primary" /> },
        { name: 'Django', icon: <SiDjango className="text-4xl mb-2 text-primary" /> },
        { name: 'Django Rest Framework', icon: <SiDjango className="text-4xl mb-2 text-primary" /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-4xl mb-2 text-primary" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-4xl mb-2 text-primary" /> },
        { name: 'React', icon: <FaReact className="text-4xl mb-2 text-primary" /> },
        { name: 'Java', icon: <FaJava className="text-4xl mb-2 text-primary" /> },
        { name: 'Spring Boot', icon: <SiSpringboot className="text-4xl mb-2 text-primary" /> },
      ]
    },
    {
      name: 'DevOps & Tools',
      skills: [
        { name: 'Docker', icon: <FaDocker className="text-4xl mb-2 text-secondary" /> },
        { name: 'Git', icon: <FaGitAlt className="text-4xl mb-2 text-secondary" /> },
        { name: 'Bash', icon: <FaGitAlt className="text-4xl mb-2 text-secondary" /> },
      ]
    },
    {
      name: 'Databases',
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-4xl mb-2 text-secondary" /> },
        { name: 'MySQL', icon: <SiMysql className="text-4xl mb-2 text-secondary" /> },
      ]
    },
    {
      name: 'Soft Skills',
      skills: [
        { name: 'Communication', icon: null },
        { name: 'Time Management', icon: null },
        { name: 'Adaptability', icon: null },
        { name: 'Problem Solving', icon: null },
        { name: 'Teamwork', icon: null },
        { name: 'Creativity', icon: null },
        { name: 'English B2+', icon: null },
      ]
    }
  ];

  const containerVariants: AnimationVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: AnimationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-dark to-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            My technical expertise with a focus on backend development
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12"
        >
          {skillCategories.map((category, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold mb-6 border-b border-primary inline-block pb-2">
                {category.name}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={itemVariants}
                    className={`skill-card ${category.name === 'Soft Skills' ? 'bg-dark bg-opacity-30' : ''}`}
                  >
                    {skill.icon}
                    <span className="text-center font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
