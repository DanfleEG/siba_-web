import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter } from 'lucide-react';
import { MemberCard, type MemberData } from './MemberCard';

const allMembers: MemberData[] = [
  // Dirección y Estrategia (Leads)
  { 
    name: 'Laura Gómez', 
    area: 'Dirección y Estrategia', 
    role: 'Directora de Data Science', 
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80', 
    linkedin: '#', 
    github: '#',
    social: '@laurag_ds',
    career: 'Ingeniería de Sistemas',
    description: 'Especialista en modelos predictivos aplicados a finanzas y optimización de procesos complejos.'
  },
  { 
    name: 'Felipe Castillo', 
    area: 'Dirección y Estrategia', 
    role: 'Coordinador de BI', 
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80', 
    linkedin: '#', 
    github: '#',
    social: '@felipe_bi',
    career: 'Administración de Empresas',
    description: 'Apasionado por la visualización de datos estratégica y el análisis de inteligencia de mercados.'
  },
  { 
    name: 'Isabella Vargas', 
    area: 'Dirección y Estrategia', 
    role: 'Líder de Analytics', 
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80', 
    linkedin: '#', 
    social: '@isav_analytics',
    career: 'Estadística',
    description: 'Experta en análisis multivariado y minería de datos estadísticos para la toma de decisiones críticas.'
  },
  { 
    name: 'Mateo Herrera', 
    area: 'Dirección y Estrategia', 
    role: 'Líder de Data Engineering', 
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80', 
    linkedin: '#', 
    github: '#',
    social: '@mherrera_de',
    career: 'Ciencias de la Computación',
    description: 'Diseñador de arquitecturas de datos de alto rendimiento y consultor en tecnologías de nube.'
  },
  
  // Asuntos Académicos
  { 
    name: 'Andrés Mendoza', 
    area: 'Asuntos Académicos', 
    role: 'Analista de Datos', 
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80', 
    linkedin: '#', 
    social: '@amendoza',
    career: 'Economía',
    description: 'Investigador en econometría aplicada con foco en el desarrollo de políticas públicas basadas en datos.'
  },
  { 
    name: 'Sofía Rivas', 
    area: 'Asuntos Académicos', 
    role: 'ML Engineer', 
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80', 
    linkedin: '#', 
    github: '#',
    social: '@sofia_ml',
    career: 'Matemáticas',
    description: 'Desarrolladora de soluciones de inteligencia artificial para el procesamiento de lenguaje natural (NLP).'
  },
  { 
    name: 'Carlos Ruiz', 
    area: 'Asuntos Académicos', 
    role: 'BI Developer', 
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80', 
    linkedin: '#', 
    social: '@cruiz_bi',
    career: 'Ingeniería Industrial',
    description: 'Optimizador de procesos operativos mediante el uso de inteligencia de negocios interactiva.'
  },
  { 
    name: 'Valentina Ortiz', 
    area: 'Asuntos Académicos', 
    role: 'Data Analyst', 
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80', 
    linkedin: '#', 
    social: '@vale_data',
    career: 'Sociología',
    description: 'Analista dedicada al estudio del comportamiento digital y tendencias culturales modernas.'
  },
  
  // Imagen y Relaciones Públicas
  { 
    name: 'Diego Torres', 
    area: 'Imagen y Relaciones Públicas', 
    role: 'Data Scientist', 
    img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80', 
    linkedin: '#', 
    social: '@diego_ds',
    career: 'Comunicación Social',
    description: 'Creativo especializado en la traducción de datos técnicos a narrativas visuales de alto impacto.'
  },
  { 
    name: 'Camila Luna', 
    area: 'Imagen y Relaciones Públicas', 
    role: 'Analytics Engineer', 
    img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80', 
    linkedin: '#', 
    social: '@camila_luna',
    career: 'Diseño Gráfico',
    description: 'Diseñadora de interfaces analíticas enfocada en el usuario y la simplicidad visual.'
  },
  { 
    name: 'Julián Peña', 
    area: 'Imagen y Relaciones Públicas', 
    role: 'Data Architect', 
    img: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=400&q=80', 
    linkedin: '#', 
    social: '@julian_arch',
    career: 'Marketing',
    description: 'Definidor de estrategias digitales para la expansión global de marcas tecnológicas.'
  },
  { 
    name: 'Elena Soler', 
    area: 'Imagen y Relaciones Públicas', 
    role: 'BI Analyst', 
    img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&q=80', 
    linkedin: '#', 
    social: '@elena_bi',
    career: 'Publicidad',
    description: 'Experta en segmentación de audiencias y optimización de conversión publicitaria.'
  },
  
  // Desarrollo de Proyectos
  { 
    name: 'Ricardo Marín', 
    area: 'Desarrollo de Proyectos', 
    role: 'ML Researcher', 
    img: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=400&q=80', 
    linkedin: '#', 
    github: '#',
    social: '@ricardo_ml',
    career: 'Ingeniería Electrónica',
    description: 'Investigador en procesamiento digital de bioseñales mediante algoritmos de aprendizaje profundo.'
  },
  { 
    name: 'Mariana Cruz', 
    area: 'Desarrollo de Proyectos', 
    role: 'Data Visualization', 
    img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80', 
    linkedin: '#', 
    social: '@mari_viz',
    career: 'Artes Visuales',
    description: 'Creadora de infografías interactivas y dinámicas para la democratización de la información.'
  },
  { 
    name: 'Sebastián Vega', 
    area: 'Desarrollo de Proyectos', 
    role: 'ETL Developer', 
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80', 
    linkedin: '#', 
    github: '#',
    social: '@seb_etl',
    career: 'Sistemas',
    description: 'Integrador de datos multiplataforma enfocado en la integridad y calidad del dato.'
  },
  { 
    name: 'Paula Duarte', 
    area: 'Desarrollo de Proyectos', 
    role: 'Business Analyst', 
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80', 
    linkedin: '#', 
    social: '@paula_ba',
    career: 'Finanzas',
    description: 'Analista de viabilidad económica con experiencia en modelos de simulación Monte Carlo.'
  },
  
  // Ex Miembros
  { 
    name: 'Nicolás Giraldo', 
    area: 'Ex Miembros', 
    role: 'Data Engineer (Ex)', 
    img: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=400&q=80', 
    linkedin: '#', 
    social: '@nico_de',
    career: 'Ingeniería',
    description: 'Lideró la estandarización de las bases de datos maestras del semillero durante 2021-2023.'
  },
  { 
    name: 'Daniela Ríos', 
    area: 'Ex Miembros', 
    role: 'Statistical Analyst (Ex)', 
    img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80', 
    linkedin: '#', 
    social: '@dani_stats',
    career: 'Estadística',
    description: 'Responsable de la validación estadística de los primeros informes institucionales de SIBA.'
  },
  { 
    name: 'Gabriel Soto', 
    area: 'Ex Miembros', 
    role: 'AI Specialist (Ex)', 
    img: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80', 
    linkedin: '#', 
    social: '@gab_ai',
    career: 'Sistemas',
    description: 'Introdujo las primeras redes neuronales convolucionales al workflow de investigación del equipo.'
  },
  { 
    name: 'Natalia Rojas', 
    area: 'Ex Miembros', 
    role: 'Project Manager (Ex)', 
    img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80', 
    linkedin: '#', 
    social: '@nat_pm',
    career: 'Gestión',
    description: 'Coordinadora de la expansión regional del semillero a otras facultades universitarias.'
  },
];

const categories = ['Todos', 'Dirección y Estrategia', 'Asuntos Académicos', 'Imagen y Relaciones Públicas', 'Desarrollo de Proyectos', 'Ex Miembros'];

export default function TeamPage() {
  const [activeTab, setActiveTab] = useState('Todos');

  const filteredMembers = useMemo(() => {
    if (activeTab === 'Todos') return allMembers;
    return allMembers.filter(m => m.area === activeTab);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header Section */}
      <section className="bg-slate-950 pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(#0088ff_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-brand font-bold text-sm uppercase tracking-widest mb-4 block">Nuestro Capital Humano</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              Conoce al <span className="text-brand">Equipo</span>
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed">
              Un grupo diverso de estudiantes y profesionales unidos por la curiosidad y el rigor analítico.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-4 md:py-6 sticky top-0 md:top-[72px] bg-slate-950/95 backdrop-blur-xl z-40 border-b border-slate-800 shadow-2xl transition-all">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-brand mr-2 border-r border-slate-800 pr-4 hidden lg:flex flex-shrink-0">
              <Filter size={16} />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Filtrar Equipo</span>
            </div>
            
            {/* Scrollable Container */}
            <div className="flex-1 overflow-x-auto no-scrollbar scroll-smooth">
              <div className="flex items-center justify-start md:justify-center gap-2 md:gap-3 pb-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`px-5 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all whitespace-nowrap flex-shrink-0 ${
                      activeTab === cat 
                        ? 'bg-brand text-white shadow-lg shadow-brand/40 ring-1 ring-brand/50' 
                        : 'bg-slate-900/50 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredMembers.map((member, i) => (
              <MemberCard key={member.name} member={member} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}
