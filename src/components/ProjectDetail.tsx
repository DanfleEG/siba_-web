import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Users, 
  Wrench, 
  CheckCircle2, 
  Target, 
  Lightbulb, 
  BarChart4,
  ChevronRight,
  Calendar,
  Award
} from 'lucide-react';
import { type Project } from '../types';

// This would normally come from an API or a shared data file
const projectsData: Record<string, Project> = {
  'prediccion-churn': {
    id: 'prediccion-churn',
    title: 'Predicción de Churn en Clientes Bancarios',
    shortDesc: 'Modelo de machine learning para identificar clientes con alta probabilidad de abandono en una entidad financiera colombiana.',
    longDesc: 'Este proyecto nació de una necesidad real planteada por una entidad financiera aliada del semillero. El equipo de SIBA desarrolló un pipeline completo de ciencia de datos, desde la extracción de datos hasta el despliegue de un modelo predictivo en producción. El proyecto fue reconocido en el congreso universitario de investigación 2023 y sirvió como base para una publicación académica en proceso.',
    problem: 'Una entidad bancaria colombiana enfrentaba una tasa de abandono del 18% anual en su cartera de clientes, sin capacidad de anticipar qué clientes estaban en riesgo de irse antes de que ocurriera. Esto generaba pérdidas significativas en ingresos recurrentes y costos elevados de adquisición de nuevos clientes.',
    methodology: 'Se aplicó un proceso CRISP-DM completo: recolección y limpieza de datos transaccionales de 50,000 clientes, análisis exploratorio para identificar variables predictoras clave (frecuencia de uso, saldo promedio, número de productos), ingeniería de características, y entrenamiento de modelos de clasificación (Logistic Regression, Random Forest, XGBoost). Se usó validación cruzada estratificada y optimización de hiperparámetros con GridSearchCV.',
    results: 'El modelo XGBoost final alcanzó un AUC-ROC de 0.91 y una precisión del 87% en la identificación de clientes en riesgo. La implementación del sistema de alertas tempranas permitió al equipo comercial intervenir proactivamente, reduciendo la tasa de churn proyectada en un 23% en el primer trimestre de piloto.',
    category: 'Data Science & ML',
    year: '2023',
    subsidized: true,
    img: 'https://images.unsplash.com/photo-1551288049-bbbda546697a?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bbbda546697a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
    ],
    tech: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'Matplotlib', 'SQL'],
    team: [
      { name: 'Valentina Torres', role: 'Lead Data Scientist' },
      { name: 'Andrés Jiménez', role: 'Data Analyst' },
      { name: 'Laura Gómez', role: 'ML Engineer' }
    ]
  },
  'dashboard-logistica': {
    id: 'dashboard-logistica',
    title: 'Dashboard de Logística para Retail',
    shortDesc: 'Sistema de Business Intelligence para monitoreo en tiempo real de la cadena de suministro de una empresa retail.',
    longDesc: 'Optimización de la cadena de suministro mediante visualización avanzada de datos. El proyecto permitió centralizar información dispersa en múltiples hojas de cálculo en una única fuente de verdad interactiva.',
    problem: 'Falta de visibilidad sobre los cuellos de botella en la distribución y discrepancias en los niveles de inventario entre tiendas físicas y almacén central.',
    methodology: 'Extracción de datos de SAP mediante Python, limpieza y modelado estrella en SQL Server, y diseño de dashboards interactivos en Power BI enfocados en UX para tomadores de decisiones.',
    results: 'Reducción del 15% en los tiempos de despacho y mejora de la exactitud del inventario en un 98%.',
    category: 'Business Intelligence',
    year: '2023',
    subsidized: false,
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
    ],
    tech: ['Power BI', 'SQL Server', 'Python', 'DAX'],
    team: [
      { name: 'Felipe Castillo', role: 'BI Coordinator' },
      { name: 'Carlos Ruiz', role: 'BI Developer' }
    ]
  }
};

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projectsData[projectId || ''];

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-950 pt-32 flex flex-col items-center justify-center text-white px-6">
        <h1 className="text-4xl font-bold mb-4">Proyecto no encontrado</h1>
        <Link to="/proyectos" className="text-brand hover:underline flex items-center gap-2">
          <ArrowLeft size={20} /> Volver a proyectos
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      {/* Header Section */}
      <section className="pt-32 pb-12 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-8 overflow-x-auto no-scrollbar whitespace-nowrap">
            <Link to="/proyectos" className="hover:text-white transition-colors">Proyectos</Link>
            <ChevronRight size={14} />
            <span className="text-slate-400 truncate">{project.title}</span>
          </nav>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="px-3 py-1 bg-brand/10 text-brand text-[10px] font-bold uppercase tracking-widest rounded-full border border-brand/20">
              {project.category}
            </span>
            {project.subsidized && (
              <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-widest rounded-full border border-emerald-500/20 flex items-center gap-1.5">
                <Award size={12} />
                Proyecto subvencionado
              </span>
            )}
            <span className="px-3 py-1 bg-slate-800 text-slate-400 text-[10px] font-bold uppercase tracking-widest rounded-full">
              {project.year}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight max-w-4xl">
            {project.title}
          </h1>
          
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed mb-10">
            {project.shortDesc}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="px-4 py-2 bg-slate-900 border border-slate-800 text-slate-400 rounded-xl text-xs font-bold hover:border-brand/40 transition-colors">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-800 aspect-[21/9]">
          <img 
            src={project.img} 
            alt={project.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Content Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Sobre el proyecto */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-8 bg-brand rounded-full"></div>
                <h2 className="text-3xl font-display font-bold text-white">Sobre el proyecto</h2>
              </div>
              <p className="text-lg leading-relaxed text-slate-400">
                {project.longDesc}
              </p>
            </div>

            {/* Problema */}
            <div className="bg-slate-900/50 rounded-3xl p-8 border border-slate-800 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Target size={120} className="text-brand" />
              </div>
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                  <Target size={20} />
                </div>
                <h2 className="text-2xl font-display font-bold text-white">Problema que aborda</h2>
              </div>
              <p className="text-slate-400 leading-relaxed relative z-10">
                {project.problem}
              </p>
            </div>

            {/* Metodología */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-8 bg-brand rounded-full"></div>
                <h2 className="text-3xl font-display font-bold text-white">Metodología</h2>
              </div>
              <p className="text-lg leading-relaxed text-slate-400">
                {project.methodology}
              </p>
            </div>

            {/* Resultados */}
            <div className="bg-emerald-500/5 rounded-3xl p-8 border border-emerald-500/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <CheckCircle2 size={120} className="text-emerald-400" />
              </div>
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                  <BarChart4 size={20} />
                </div>
                <h2 className="text-2xl font-display font-bold text-white">Resultados e impacto</h2>
              </div>
              <p className="text-slate-400 leading-relaxed relative z-10">
                {project.results}
              </p>
            </div>

            {/* Visualizaciones */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-8 bg-brand rounded-full"></div>
                <h2 className="text-3xl font-display font-bold text-white">Visualizaciones</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.gallery.map((img, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl aspect-video">
                    <img 
                      src={img} 
                      alt={`Viz ${i}`} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              {/* Team Widget */}
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl">
                <div className="flex items-center gap-2 mb-8">
                  <Users size={18} className="text-brand" />
                  <h3 className="text-lg font-bold text-white">Equipo del proyecto</h3>
                </div>
                <div className="space-y-6">
                  {project.team.map((member, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-brand/10 text-brand flex items-center justify-center font-bold text-xs group-hover:bg-brand group-hover:text-white transition-colors">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white group-hover:text-brand transition-colors">{member.name}</div>
                        <div className="text-[10px] text-slate-500 uppercase tracking-widest">{member.role}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="my-8 border-t border-slate-800"></div>

                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Herramientas</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-slate-800/50 text-slate-400 rounded-lg text-[10px] font-bold">
                      {t}
                    </span>
                  ))}
                </div>

                <Link 
                  to="/proyectos" 
                  className="mt-8 w-full py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all group"
                >
                  <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                  Ver todos los proyectos
                </Link>
              </div>

              {/* Call to Action */}
              <div className="bg-brand rounded-3xl p-8 text-white shadow-lg shadow-brand/20 relative overflow-hidden group">
                <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:rotate-12 transition-transform">
                  <Lightbulb size={120} />
                </div>
                <h3 className="text-xl font-bold mb-2 relative z-10">¿Tienes una idea?</h3>
                <p className="text-slate-100 text-sm mb-6 relative z-10 leading-relaxed">
                  En SIBA estamos abiertos a colaboraciones y nuevos retos analíticos.
                </p>
                <button className="bg-white text-brand px-6 py-3 rounded-xl font-bold text-sm relative z-10 hover:shadow-xl transition-all active:scale-95">
                  Contáctanos
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
