import { motion } from 'motion/react';
import { Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';

const allMembers = [
  // Leads (shown on home too)
  { name: 'Fabiana Rojas', role: 'Presidenta', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80', linkedin: '#', social: '@laurag_ds' },
  { name: 'Danae ', role: 'Vicepresidenta', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80', linkedin: '#', social: '@felipe_bi' },
  { name: 'Danilo Estrella', role: 'Líder de RR. HH.', img: '/src/assets/images/danilo_estrella.svg', linkedin: 'https://www.linkedin.com/in/danilo-estrella-guerra-9b26a92a5', social: 'https://porfolio.danflylab.space' },
  { name: 'Lucero', role: 'Líder de Data Engineering', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80', linkedin: '#', social: '@mherrera_de' },
  
  // More members (total 20)
  { name: 'Andrés Mendoza', role: 'Analista de Datos', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80', linkedin: '#', social: '@amendoza' },
  { name: 'Sofía Rivas', role: 'ML Engineer', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80', linkedin: '#', social: '@sofia_ml' },
  { name: 'Carlos Ruiz', role: 'BI Developer', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80', linkedin: '#', social: '@cruiz_bi' },
  { name: 'Valentina Ortiz', role: 'Data Analyst', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80', linkedin: '#', social: '@vale_data' },
  { name: 'Diego Torres', role: 'Data Scientist', img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80', linkedin: '#', social: '@diego_ds' },
  { name: 'Camila Luna', role: 'Analytics Engineer', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80', linkedin: '#', social: '@camila_luna' },
  { name: 'Julián Peña', role: 'Data Architect', img: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=400&q=80', linkedin: '#', social: '@julian_arch' },
  { name: 'Elena Soler', role: 'BI Analyst', img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&q=80', linkedin: '#', social: '@elena_bi' },
  { name: 'Ricardo Marín', role: 'ML Researcher', img: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=400&q=80', linkedin: '#', social: '@ricardo_ml' },
  { name: 'Mariana Cruz', role: 'Data Visualization', img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80', linkedin: '#', social: '@mari_viz' },
  { name: 'Sebastián Vega', role: 'ETL Developer', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80', linkedin: '#', social: '@seb_etl' },
  { name: 'Paula Duarte', role: 'Business Analyst', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80', linkedin: '#', social: '@paula_ba' },
  { name: 'Nicolás Giraldo', role: 'Data Engineer', img: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=400&q=80', linkedin: '#', social: '@nico_de' },
  { name: 'Daniela Ríos', role: 'Statistical Analyst', img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80', linkedin: '#', social: '@dani_stats' },
  { name: 'Gabriel Soto', role: 'AI Specialist', img: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80', linkedin: '#', social: '@gab_ai' },
  { name: 'Natalia Rojas', role: 'Project Manager', img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80', linkedin: '#', social: '@nat_pm' },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header Section */}
      <section className="bg-slate-950 pt-32 pb-20 relative overflow-hidden">
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
              Un grupo diverso de 20 estudiantes y profesionales unidos por la curiosidad y el rigor analítico.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {allMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
              className="group bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden hover:shadow-2xl transition-all"
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <div className="flex gap-3">
                    <a href={member.linkedin} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand transition-colors">
                      <Linkedin size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-xs font-bold uppercase tracking-widest text-brand mb-4">{member.role}</p>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Mail size={14} className="text-brand" />
                  <span>{member.social}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
