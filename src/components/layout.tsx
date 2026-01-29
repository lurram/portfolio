
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { PERSONAL_INFO } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função para lidar com o clique em links de hash para garantir o scroll suave
  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Sobre', path: 'about' },
    { name: 'Habilidades', path: 'skills' },
    { name: 'Projetos', path: 'projects' }
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#0d5973]/30">
      {/* Navbar */}
      <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-[#111d21]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 h-16' : 'bg-transparent h-24'}`}>
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div 
            className="flex items-center gap-3 group cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="bg-[#0d5973] text-white p-2 rounded-lg group-hover:rotate-12 transition-transform">
              <span className="material-symbols-outlined text-xl">desenvolvedor</span>
            </div>
            <h1 className="font-display font-extrabold text-xl tracking-tighter text-[#0d5973] dark:text-white">
              {PERSONAL_INFO.name.split(' ')[0]} <span className="text-slate-400 font-medium">.dev</span>
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={`/${link.path}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.path);
                }}
                className={({ isActive }) => 
                  `text-sm font-semibold transition-all hover:text-[#0d5973] relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#0d5973] after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform ${
                    location.hash === `#${link.path}` ? 'text-[#0d5973] after:scale-x-100' : 'text-slate-600 dark:text-slate-300'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
              className="px-5 py-2.5 bg-[#0d5973] text-white rounded-lg text-sm font-bold hover:brightness-110 transition-all shadow-lg shadow-[#0d5973]/20"
            >
              Contato
            </a>
          </nav>

          <button className="md:hidden text-[#0d5973] dark:text-white">
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </header>

      <main className="grow pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="mt-20 py-20 bg-white dark:bg-[#0f191d] border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
               <div className="bg-[#0d5973] text-white p-1 rounded">
                <span className="material-symbols-outlined text-sm">desenvolvedor</span>
              </div>
              <span className="font-display font-extrabold text-lg tracking-tight">{PERSONAL_INFO.name}</span>
            </div>
            <p className="text-sm text-slate-500">© 2024 • Engenheiro de Computação</p>
          </div>

          <div className="flex gap-6">
            <a href="https://linkedin.com/in/lurramsantos" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#0d5973] transition-colors font-bold text-sm">LinkedIn</a>
            <a href="https://github.com/lurram" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#0d5973] transition-colors font-bold text-sm">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;