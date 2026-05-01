import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowLeft, Filter, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import LifeCard from './LifeCard';
import { lifeActivities } from '../data/life';

const categories = [
  'Todos',
  'Congreso',
  'Feria',
  'Taller',
  'Integración',
  'Reunión',
  'Behind the scenes'
];

export default function LifePage() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredActivities = lifeActivities.filter(activity => {
    const matchesCategory = activeCategory === 'Todos' || activity.type === activeCategory;
    const matchesSearch = activity.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         activity.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-950 pt-32 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="max-w-3xl">
          <Link to="/" className="inline-flex items-center gap-2 text-brand text-sm font-bold mb-8 hover:underline group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Volver al inicio
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-brand/10 rounded-2xl text-brand">
              <Sparkles size={24} />
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white">
              Vida del <span className="text-brand">Semillero</span>
            </h1>
          </div>
          <p className="text-xl text-slate-400 leading-relaxed">
            Explora nuestra trayectoria, eventos y los momentos que definen nuestra identidad como comunidad analítica.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="sticky top-20 z-40 bg-slate-950/80 backdrop-blur-xl border-y border-slate-800 mb-12">
        <div className="max-w-7xl mx-auto px-6 py-6 ring-slate-900">
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">
            <div className="flex items-center gap-4 w-full lg:w-auto overflow-x-auto no-scrollbar pb-2 lg:pb-0">
              <div className="flex items-center gap-2 text-brand mr-2 border-r border-slate-800 pr-4 hidden md:flex flex-shrink-0">
                <Filter size={16} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Filtrar</span>
              </div>
              <div className="flex gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all whitespace-nowrap flex-shrink-0 ${
                      activeCategory === cat 
                        ? 'bg-brand text-white shadow-lg shadow-brand/40 ring-1 ring-brand/50' 
                        : 'bg-slate-900/50 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative w-full lg:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input 
                type="text"
                placeholder="Buscar actividades..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 text-white pl-12 pr-4 py-3 rounded-2xl focus:outline-none focus:border-brand/40 transition-colors text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredActivities.map((activity, i) => (
              <LifeCard key={activity.id} activity={activity} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredActivities.length === 0 && (
          <div className="py-20 text-center">
            <div className="text-slate-500 mb-4 flex justify-center">
              <Search size={48} opacity={0.2} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No se encontraron actividades</h3>
            <p className="text-slate-400">Prueba cambiando los filtros o el término de búsqueda.</p>
          </div>
        )}
      </section>
    </div>
  );
}
