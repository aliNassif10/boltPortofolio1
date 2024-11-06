import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Project One',
    description: 'A modern e-commerce platform built with React and Node.js',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    github: '#',
    live: '#',
    tags: ['React', 'Node.js', 'MongoDB']
  },
  {
    title: 'Project Two',
    description: 'Real-time chat application with WebSocket integration',
    image: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&q=80',
    github: '#',
    live: '#',
    tags: ['WebSocket', 'Express', 'React']
  },
  {
    title: 'Project Three',
    description: 'AI-powered content management system',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80',
    github: '#',
    live: '#',
    tags: ['Next.js', 'OpenAI', 'TailwindCSS']
  }
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="projects" className="min-h-screen py-20 bg-gradient-to-b from-black to-zinc-950">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            variants={projectVariants}
            className="text-4xl md:text-5xl font-bold mb-12 text-white"
          >
            Featured Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={projectVariants}
                whileHover="hover"
                className="bg-zinc-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10"
              >
                <div className="relative group">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <motion.a 
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      className="text-white hover:text-gray-300"
                    >
                      <Github size={24} />
                    </motion.a>
                    <motion.a 
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      className="text-white hover:text-gray-300"
                    >
                      <ExternalLink size={24} />
                    </motion.a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-sm px-3 py-1 bg-white/5 rounded-full border border-white/10 text-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;