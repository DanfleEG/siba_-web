import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Linkedin, Mail, Github, X } from 'lucide-react';

export interface MemberData {
  name: string;
  area: string;
  role: string;
  img: string;
  linkedin: string;
  github?: string;
  twitter?: string;
  social: string;
  career: string;
  description: string;
}

interface MemberCardProps {
  member: MemberData;
  index: number;
  key?: string | number;
}

export function MemberCard({ member, index }: MemberCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.05 }}
      onClick={toggleExpand}
      className={`group relative bg-slate-900 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border transition-all duration-500 shadow-2xl flex flex-col h-full cursor-pointer ${
        isExpanded ? 'border-brand ring-2 ring-brand/20' : 'border-slate-800 hover:border-brand/40'
      }`}
    >
      {/* Image Container */}
      <div className="aspect-[3/4] relative overflow-hidden flex-shrink-0">
        <img 
          src={member.img} 
          alt={member.name} 
          className={`w-full h-full object-cover transition-all duration-700 ${isExpanded ? 'scale-110 blur-[2px]' : 'group-hover:scale-105'}`}
          referrerPolicy="no-referrer"
        />
        
        {/* Interactive Overlay */}
        <div className={`absolute inset-0 bg-slate-950/90 backdrop-blur-md flex flex-col justify-end p-4 md:p-6 transition-transform duration-500 ease-out z-20 ${
          isExpanded ? 'translate-y-0' : 'translate-y-full'
        }`}>
          <button 
            onClick={toggleExpand}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <X size={16} />
          </button>

          <div className={`mb-2 md:mb-4 transform transition-transform duration-500 delay-75 ${isExpanded ? 'translate-y-0' : 'translate-y-4'}`}>
            <h3 className="text-base md:text-xl font-display font-bold text-white mb-0.5 md:mb-1 leading-tight">{member.name}</h3>
            <span className="text-[8px] md:text-[10px] font-bold text-brand uppercase tracking-[0.2em]">{member.career}</span>
          </div>
          
          <p className={`text-slate-400 text-[9px] md:text-xs leading-relaxed mb-3 md:mb-6 transition-opacity duration-500 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
            {member.description}
          </p>
          
          {/* Social Links Icons */}
          <div className={`flex gap-2 md:gap-3 transition-opacity duration-500 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
            {member.linkedin && (
              <a 
                href={member.linkedin} 
                onClick={(e) => e.stopPropagation()}
                className="w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-white/5 hover:bg-brand text-white flex items-center justify-center transition-all hover:-translate-y-1 border border-white/5"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} className="md:w-4.5 md:h-4.5" />
              </a>
            )}
            {member.github && (
              <a 
                href={member.github} 
                onClick={(e) => e.stopPropagation()}
                className="w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-white/5 hover:bg-brand text-white flex items-center justify-center transition-all hover:-translate-y-1 border border-white/5"
                aria-label="GitHub"
              >
                <Github size={16} className="md:w-4.5 md:h-4.5" />
              </a>
            )}
            <a 
              href={`mailto:${member.social.replace('@', '')}@siba.edu.co`} 
              onClick={(e) => e.stopPropagation()}
              className="w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-white/5 hover:bg-brand text-white flex items-center justify-center transition-all hover:-translate-y-1 border border-white/5"
              aria-label="Email"
            >
              <Mail size={16} className="md:w-4.5 md:h-4.5" />
            </a>
          </div>
        </div>

        {/* Persistent Bottom Bar */}
        <div className={`absolute bottom-0 left-0 right-0 p-3 md:p-6 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent transition-opacity duration-200 z-10 ${
          isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}>
          <div className="flex justify-between items-end">
            <div>
              <h3 className="text-[11px] md:text-xl font-bold text-white mb-0.5 md:mb-1 truncate max-w-[100px] md:max-w-full">{member.name}</h3>
              <div className="flex items-center gap-1 md:gap-2">
                <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-brand"></span>
                <p className="text-[7px] md:text-[10px] font-bold uppercase tracking-widest text-brand truncate max-w-[80px] md:max-w-full">{member.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
