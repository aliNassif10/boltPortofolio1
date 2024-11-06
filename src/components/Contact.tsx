import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    })
  };

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 bg-zinc-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8 text-white"
          >
            Get in Touch
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-12"
          >
            I'm always open to new opportunities and interesting projects.
            Let's work together to bring your ideas to life.
          </motion.p>
          
          <div className="flex justify-center space-x-8 mb-12">
            {[Github, Linkedin, Mail].map((Icon, index) => (
              <motion.a
                key={index}
                custom={index}
                variants={socialVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.2 }}
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Icon size={32} />
              </motion.a>
            ))}
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto space-y-6"
          >
            <div>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-3 bg-white/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 border border-white/10 text-white"
              />
            </div>
            <div>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder="Your Email"
                className="w-full px-6 py-3 bg-white/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 border border-white/10 text-white"
              />
            </div>
            <div>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                rows={5}
                placeholder="Your Message"
                className="w-full px-6 py-3 bg-white/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 border border-white/10 text-white"
              ></motion.textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;