import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, description, tech, link, icon, idx, setIsHovered }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: idx * 0.2 }}
      animate={{ y: [0, -12, 0] }}
      whileHover={{ y: -20, scale: 1.02, transition: { duration: 0.3 } }}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
      className="glass-shard p-8 flex flex-col h-full relative group overflow-hidden cursor-none"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-electric-indigo/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      <div className="p-3 bg-obsidian/50 rounded-2xl w-min mb-6 border border-glass-white group-hover:border-cyan-neon/50 transition-colors duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10">
        {icon}
      </div>
      
      <h3 className="text-2xl font-bold mb-3 font-mono group-hover:text-cyan-neon transition-colors duration-300 relative z-10">{title}</h3>
      <p className="text-slate-400 text-sm mb-8 flex-grow leading-relaxed font-mono relative z-10">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-8 relative z-10">
        {tech.map((t, i) => (
          <span key={i} className="text-xs font-mono px-3 py-1 rounded-full bg-electric-indigo/10 text-cyan-neon border border-electric-indigo/20">
            {t}
          </span>
        ))}
      </div>
      
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="mt-auto flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white group-hover:text-cyan-neon transition-colors pt-4 border-t border-glass-border/30 cursor-none relative z-10"
      >
        <Github className="w-5 h-5" />
        View Repository
        <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-2" />
      </a>
    </motion.div>
  );
};

export default ProjectCard;
