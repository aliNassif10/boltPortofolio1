import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Globe } from 'lucide-react';

const skills = [
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS']
  },
  {
    icon: Globe,
    title: 'Backend Development',
    description: 'Creating scalable server-side applications and APIs.',
    technologies: ['Node.js', 'Express', 'PostgreSQL']
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Designing intuitive and beautiful user experiences.',
    technologies: ['Figma', 'Adobe XD', 'Prototyping']
  }
];

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="min-h-screen py-20 bg-gradient-to-b from-black via-black to-zinc-950">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-12 text-white"
          >
            About Me
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 mb-16 max-w-3xl"
          >
            I'm a passionate full-stack developer with a keen eye for design and a love for creating 
            seamless user experiences. With years of experience in web development, I bring ideas to 
            life through clean code and creative solutions.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                variants={itemVariants}
                className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <div className="mb-4">
                  <skill.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{skill.title}</h3>
                <p className="text-gray-300 mb-4">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="text-sm px-3 py-1 bg-white/5 rounded-full border border-white/10 text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;