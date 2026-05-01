import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import LifeCard from './LifeCard';
import { lifeActivities } from '../data/life';

export default function SemilleroLife() {
  // Show only first 4 on home section
  const previewActivities = lifeActivities.slice(0, 4);

  return (
    <section id="vida" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-brand/10 rounded-lg text-brand">
                <Sparkles size={20} />
              </div>
              <span className="text-brand font-bold text-sm uppercase tracking-widest block">Comunidad</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Vida del <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-emerald-400">Semillero</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Más que datos y algoritmos, somos una comunidad dinámica. Explora nuestras actividades, eventos y el día a día de nuestros investigadores.
            </p>
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-4">
            <Link to="/vida" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-bold text-sm group">
              Ver toda la vida del semillero
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="flex gap-2">
              <div className="w-10 h-1 bg-brand rounded-full"></div>
              <div className="w-20 h-1 bg-slate-800 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {previewActivities.map((activity, i) => (
            <LifeCard key={activity.id} activity={activity} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />
          
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">¿Quieres ser parte de nuestra historia?</h3>
            <p className="text-slate-400">
              Únete a nuestras próximas actividades y empieza tu camino en el mundo de la analítica de datos aplicada.
            </p>
          </div>
          
          <div className="relative z-10 flex flex-shrink-0">
            <button className="px-8 py-4 bg-brand text-white rounded-2xl font-bold hover:shadow-xl hover:shadow-brand/20 transition-all active:scale-95">
              ¡Quiero unirme!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
