import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Search, 
  Filter,
  Calendar,
  Award,
  Tag as TagIcon
} from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'Predicción de Churn en Clientes Bancarios',
    desc: 'Modelo de machine learning para identificar clientes con alta probabilidad de abandono en una entidad financiera colombiana.',
    category: 'Data Science & ML',
    year: '2023',
    subsidized: true,
    img: 'https://images.unsplash.com/photo-1551288049-bbbda546697a?auto=format&fit=crop&w=800&q=80',
    tech: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas']
  },
  {
    id: 2,
    title: 'Dashboard de Logística para Retail',
    desc: 'Sistema de Business Intelligence para monitoreo en tiempo real de la cadena de suministro de una empresa retail con 12 puntos de venta.',
    category: 'Business Intelligence',
    year: '2023',
    subsidized: false,
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    tech: ['Power BI', 'SQL Server', 'Python', 'DAX']
  },
  {
    id: 3,
    title: 'Análisis de Sentimientos en Redes Sociales',
    desc: 'Herramienta de NLP para monitorear la percepción de marca en Twitter e Instagram para empresas del sector salud.',
    category: 'Data Science & ML',
    year: '2024',
    subsidized: true,
    img: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&q=80',
    tech: ['Python', 'NLTK', 'Transformers', 'FastAPI']
  },
  {
    id: 4,
    title: 'Pipeline de Datos para Institución Educativa',
    desc: 'Arquitectura de datos end-to-end para consolidar y analizar información académica de 8,000 estudiantes en una universidad regional.',
    category: 'Data Engineering',
    year: '2024',
    subsidized: false,
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    tech: ['Apache Airflow', 'dbt', 'PostgreSQL', 'Python']
  }
];

const categories = ['Todos', 'Data Science & ML', 'Business Intelligence', 'Data Engineering'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredProjects = activeCategory === 'Todos' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Header Section */}
      <section className="bg-slate-950 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <span className="text-brand font-bold text-sm uppercase tracking-widest mb-4 block">Portafolio</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              Nuestros <span className="text-brand">Proyectos</span>
            </h1>
            <p className="text-slate-400 text-xl max-w-2xl leading-relaxed">
              Investigación aplicada con impacto real. Cada proyecto refleja el nivel técnico y la capacidad analítica del semillero SIBA.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-12 mt-12">
            {[
              { label: 'Proyectos', value: '4' },
              { label: 'Subvencionados', value: '2' },
              { label: 'Áreas de trabajo', value: '4' }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-display font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 border-b border-slate-100 dark:border-slate-800 sticky top-20 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md z-30">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat 
                  ? 'bg-brand text-white shadow-lg shadow-brand/20' 
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 overflow-hidden hover:shadow-2xl transition-all"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  {project.subsidized && (
                    <div className="bg-brand/90 backdrop-blur-md text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5">
                      <Award size={12} />
                      Proyecto subvencionado
                    </div>
                  )}
                  <div className="bg-slate-950/60 backdrop-blur-md text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest ml-auto">
                    {project.year}
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-[10px] font-bold uppercase tracking-widest mb-4">
                  {project.category}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 dark:text-white group-hover:text-brand transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md text-[10px] font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-brand font-bold text-sm group/btn">
                  Ver más
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
