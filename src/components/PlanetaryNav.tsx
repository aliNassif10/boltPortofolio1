import React from 'react';
import { motion } from 'framer-motion';
import { Code, Briefcase, Mail, User } from 'lucide-react';

interface Planet {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
  size: string;
  orbit: number;
}

const planets: Planet[] = [
  {
    id: 'about',
    name: 'About',
    icon: User,
    color: 'from-purple-500 to-indigo-500',
    size: 'w-16 h-16',
    orbit: 0
  },
  {
    id: 'skills',
    name: 'Skills',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    size: 'w-14 h-14',
    orbit: 90
  },
  {
    id: 'projects',
    name: 'Projects',
    icon: Briefcase,
    color: 'from-emerald-500 to-teal-500',
    size: 'w-16 h-16',
    orbit: 180
  },
  {
    id: 'contact',
    name: 'Contact',
    icon: Mail,
    color: 'from-rose-500 to-pink-500',
    size: 'w-14 h-14',
    orbit: 270
  }
];

const PlanetaryNav = () => {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50">
      <div className="relative">
        {planets.map((planet) => (
          <motion.a
            key={planet.id}
            href={`#${planet.id}`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
            className={`absolute ${planet.size} flex items-center justify-center rounded-full 
              bg-gradient-to-r ${planet.color} shadow-lg cursor-pointer
              transform -translate-x-1/2 -translate-y-1/2 group`}
            style={{
              transform: `rotate(${planet.orbit}deg) translateX(60px) rotate(-${planet.orbit}deg)`
            }}
          >
            <planet.icon className="w-6 h-6 text-white" />
            <span className="absolute right-full mr-2 text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pr-8">
              {planet.name}
            </span>
            <motion.div
              className="absolute inset-0 rounded-full bg-white opacity-0"
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 0.2 }}
            />
          </motion.a>
        ))}
        <div className="w-32 h-32 rounded-full border-2 border-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
};

export default PlanetaryNav;