/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BarChart3,
  Database, 
  Cpu, 
  LineChart, 
  Users, 
  ArrowRight, 
  ChevronDown, 
  Moon, 
  Sun, 
  Github, 
  Linkedin, 
  Twitter,
  Mail,
  MapPin,
  Brain
} from 'lucide-react';
import Projects from './components/Projects';
import TeamPage from './components/Team';

// --- Components ---

const Navbar = ({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-4 bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 shadow-sm' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute -inset-1 bg-brand/20 rounded-full blur-sm group-hover:bg-brand/30 transition-all"></div>
            <img 
              src="https://cdn-icons-png.flaticon.com/512/2103/2103633.png" 
              alt="SIBA Logo" 
              className="relative w-10 h-10 object-contain dark:invert"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="font-display font-bold text-2xl tracking-tight dark:text-white group-hover:text-brand transition-colors">SIBA</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {[
            { name: 'Qué es SIBA', path: '/#qué-es-siba' },
            { name: 'Áreas', path: '/#áreas' },
            { name: 'Integrantes', path: '/integrantes' },
            { name: 'Proyectos', path: '/proyectos' }
          ].map((item) => (
            item.path.startsWith('/#') ? (
              <a 
                key={item.name} 
                href={item.path}
                className={`text-sm font-medium transition-colors ${
                  isScrolled || !isHome ? 'text-slate-600 dark:text-slate-400' : 'text-slate-300'
                } hover:text-brand dark:hover:text-brand`}
              >
                {item.name}
              </a>
            ) : (
              <Link 
                key={item.name} 
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.path ? 'text-brand' : (isScrolled || !isHome ? 'text-slate-600 dark:text-slate-400' : 'text-slate-300')
                } hover:text-brand dark:hover:text-brand`}
              >
                {item.name}
              </Link>
            )
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${
              isScrolled || !isHome ? 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400' : 'hover:bg-white/10 text-white'
            }`}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="hidden sm:block px-5 py-2 bg-brand text-white rounded-full text-sm font-semibold hover:bg-brand-dark transition-all shadow-lg shadow-brand/20">
            Contáctanos
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-bold uppercase tracking-widest mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
          Semillero de Investigación
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl md:text-8xl font-display font-bold text-white mb-6 tracking-tight"
        >
          SIBA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-400 mb-10 font-light leading-relaxed"
        >
          Donde los datos se convierten en decisiones. <br className="hidden md:block" />
          Semillero de investigación en Business Analytics — formando la próxima generación de analistas de datos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto px-8 py-4 bg-brand text-white rounded-full font-bold hover:bg-brand-dark transition-all flex items-center justify-center gap-2 group">
            Conocer más
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white rounded-full font-bold hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10">
            Nuestros Proyectos
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="qué-es-siba" className="section-container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brand font-bold text-sm uppercase tracking-widest mb-4 block">Sobre Nosotros</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 dark:text-white">
            ¿Qué es <span className="text-brand">SIBA</span>?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
            SIBA es el <span className="font-semibold text-slate-900 dark:text-white">Semillero de Investigación en Business Analytics</span>, un espacio académico donde estudiantes apasionados por los datos se reúnen para investigar, aprender y crear soluciones basadas en analítica de negocios.
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
            Trabajamos en proyectos de Data Science, Business Intelligence y Analytics aplicados a problemas reales, desarrollando competencias técnicas y pensamiento analítico crítico.
          </p>

          <div className="space-y-6">
            {[
              { icon: <Cpu size={20} />, title: 'Investigación aplicada', desc: 'Trabajamos en proyectos reales con impacto en empresas y organizaciones.' },
              { icon: <Users size={20} />, title: 'Comunidad de aprendizaje', desc: 'Aprende junto a pares apasionados por los datos y la analítica.' },
              { icon: <BarChart3 size={20} />, title: 'Desarrollo profesional', desc: 'Construye tu portafolio, habilidades técnicas y red de contactos.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand/10 text-brand flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold dark:text-white">{item.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" 
              alt="SIBA Team Group" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800">
            <div className="text-4xl font-display font-bold text-brand mb-1">+20</div>
            <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Proyectos realizados</div>
          </div>
          <div className="absolute -top-4 -left-4 bg-brand text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
            Desde 2021
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Areas = () => {
  const areas = [
    { 
      icon: <BarChart3 />, 
      title: 'Business Intelligence', 
      desc: 'Transformamos datos en decisiones estratégicas. Diseñamos dashboards, KPIs y reportes que impulsan el negocio.' 
    },
    { 
      icon: <Database />, 
      title: 'Data Science & ML', 
      desc: 'Construimos modelos predictivos y algoritmos de machine learning aplicados a problemas reales de negocio.' 
    },
    { 
      icon: <Cpu />, 
      title: 'Data Engineering', 
      desc: 'Diseñamos pipelines de datos robustos, arquitecturas de almacenamiento y procesos ETL escalables.' 
    },
    { 
      icon: <LineChart />, 
      title: 'Analytics & Estrategia', 
      desc: 'Aplicamos análisis estadístico avanzado para descubrir patrones y generar insights accionables.' 
    }
  ];

  return (
    <section id="áreas" className="bg-slate-50 dark:bg-slate-900/50 py-20 md:py-32">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand font-bold text-sm uppercase tracking-widest mb-4 block">Lo que hacemos</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 dark:text-white">Nuestras Áreas</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Exploramos las disciplinas clave del ecosistema de datos para formar analistas integrales.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white dark:bg-slate-950 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-brand/30 dark:hover:border-brand/30 transition-all hover:shadow-xl group"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {area.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 dark:text-white">{area.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                {area.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  const members = [
    { name: 'Laura Gómez', role: 'Directora de Data Science', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80' },
    { name: 'Felipe Castillo', role: 'Coordinador de BI', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80' },
    { name: 'Isabella Vargas', role: 'Líder de Analytics', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80' },
    { name: 'Mateo Herrera', role: 'Líder de Data Engineering', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80' }
  ];

  return (
    <section id="integrantes" className="section-container">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <span className="text-brand font-bold text-sm uppercase tracking-widest mb-4 block">Quiénes somos</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 dark:text-white">Nuestro Equipo</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Personas apasionadas por los datos, comprometidas con la investigación y el aprendizaje continuo.
          </p>
        </div>
        <div className="flex gap-4">
          <Link 
            to="/integrantes" 
            className="px-6 py-3 bg-brand/10 text-brand rounded-full font-bold hover:bg-brand hover:text-white transition-all flex items-center gap-2 group"
          >
            Ver todos los integrantes
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {members.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group"
          >
            <div className="aspect-[3/4] rounded-3xl overflow-hidden mb-4 relative">
              <img 
                src={member.img} 
                alt={member.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="flex gap-3">
                  <Linkedin size={18} className="text-white cursor-pointer hover:text-brand" />
                  <Twitter size={18} className="text-white cursor-pointer hover:text-brand" />
                </div>
              </div>
            </div>
            <h4 className="font-bold text-lg dark:text-white">{member.name}</h4>
            <p className="text-xs font-bold uppercase tracking-widest text-brand">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/2103/2103633.png" 
                alt="SIBA Logo" 
                className="w-10 h-10 object-contain invert"
                referrerPolicy="no-referrer"
              />
              <span className="font-display font-bold text-2xl tracking-tight text-white">SIBA</span>
            </div>
            <p className="max-w-sm mb-8 leading-relaxed">
              Semillero de Investigación en Business Analytics. Transformando datos en decisiones con impacto real.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-white">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-white">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Navegación</h5>
            <ul className="space-y-4 text-sm">
              <li><a href="#qué-es-siba" className="hover:text-brand transition-colors">Qué es SIBA</a></li>
              <li><a href="#áreas" className="hover:text-brand transition-colors">Áreas</a></li>
              <li><a href="#integrantes" className="hover:text-brand transition-colors">Integrantes</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Proyectos</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contacto</h5>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand" />
                <span>contacto@siba.edu.co</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-brand" />
                <span>Edificio de Ingeniería, Lab 402</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2025 SIBA — Semillero de Investigación en Business Analytics.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand"></span>
            Hecho con datos y pasión
          </div>
        </div>
      </div>
    </footer>
  );
};

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Areas />
      <Team />
    </>
  );
};

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <Router>
      <div className="min-h-screen transition-colors duration-300">
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/proyectos" element={<Projects />} />
            <Route path="/integrantes" element={<TeamPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
