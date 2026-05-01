import React from 'react';
import { motion } from 'motion/react';
import { 
  Instagram, 
  Facebook, 
  Linkedin, 
  ExternalLink,
  Calendar,
  Play
} from 'lucide-react';
import { LifeActivity } from '../types';

// Custom TikTok icon since Lucide doesn't have it
const TikTokIcon = ({ size = 18 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

interface LifeCardProps {
  activity: LifeActivity;
  index: number;
  key?: string | number;
}

export default function LifeCard({ activity, index }: LifeCardProps) {
  const getPlatformIcon = () => {
    switch (activity.platform) {
      case 'Instagram': return <Instagram size={18} />;
      case 'Facebook': return <Facebook size={18} />;
      case 'LinkedIn': return <Linkedin size={18} />;
      case 'TikTok': return <TikTokIcon size={18} />;
      default: return <ExternalLink size={18} />;
    }
  };

  const getPlatformLabel = () => {
    return `Ver en ${activity.platform}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-slate-900/40 rounded-3xl overflow-hidden border border-slate-800 hover:border-brand/40 transition-all duration-500 flex flex-col h-full hover:shadow-2xl hover:shadow-brand/5"
    >
      {/* Thumbnail Container */}
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={activity.thumbnail} 
          alt={activity.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors" />
        
        {/* Type Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-slate-950/80 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-widest rounded-full border border-white/10">
            {activity.type}
          </span>
        </div>

        {/* Play Overlay (for video feel) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
            <Play size={20} fill="currentColor" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-3">
          <Calendar size={12} className="text-brand" />
          {activity.date}
        </div>
        
        <h3 className="text-lg font-bold text-white mb-2 line-clamp-1 group-hover:text-brand transition-colors">
          {activity.title}
        </h3>
        
        <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
          {activity.description}
        </p>

        <div className="mt-auto">
          <a 
            href={activity.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-brand text-white rounded-xl text-xs font-bold transition-all group/btn w-full justify-center"
          >
            {getPlatformIcon()}
            <span>{getPlatformLabel()}</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
