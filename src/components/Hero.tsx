import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="h-screen flex flex-col justify-center items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center relative z-10"
      >
        <motion.div
          className="overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
          >
            John Doe
          </motion.h1>
        </motion.div>

        <motion.h2 
          custom={2}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-xl md:text-2xl text-gray-400 mb-8"
        >
          Full Stack Developer & UI/UX Designer
        </motion.h2>

        <motion.div
          custom={3}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <a 
            href="#contact" 
            className="relative inline-block group"
          >
            <span className="absolute inset-0 bg-white rounded-full blur opacity-25 group-hover:opacity-40 transition-opacity" />
            <span className="relative bg-white text-black px-8 py-3 rounded-full font-medium inline-block hover:bg-gray-200 transition-colors">
              Get in touch
            </span>
          </a>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-10 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={32} className="text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;