'use client'
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, FormEvent } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react';
import { ContactInfo, AnimationVariants } from '@/types';

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || '';
  const [state, handleSubmit] = useForm(formId);

  const contactInfo: ContactInfo[] = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      label: 'Email',
      value: 'jeguerrerocordoba@gmail.com',
      link: 'mailto:jeguerrerocordoba@gmail.com'
    },
    {
      icon: <FaPhone className="text-2xl" />,
      label: 'Phone',
      value: '+57 123 456 789',
      link: 'tel:+57123456789'
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      label: 'LinkedIn',
      value: 'Javier Guerrero',
      link: 'https://www.linkedin.com/in/javier-guerrero-48377028a'
    },
    {
      icon: <FaGithub className="text-2xl" />,
      label: 'GitHub',
      value: 'Javier1520',
      link: 'https://github.com/Javier1520'
    }
  ];

  const fadeInVariants: AnimationVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="contact" className="section-padding bg-dark">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Let's connect and discuss how I can contribute to your team or project
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <div>
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a 
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:text-primary transition-colors"
                >
                  <div className="bg-dark bg-opacity-50 p-3 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 bg-dark bg-opacity-50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 bg-dark bg-opacity-50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 bg-dark bg-opacity-50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              
              <button
                type="submit"
                disabled={state.submitting}
                className="btn-primary w-full"
              >
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {state.succeeded && (
                <p className="text-green-500 mt-2">
                  Thanks for your message! I'll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
