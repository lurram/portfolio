
import { SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { Project, Skill } from './components/types';



export const PERSONAL_INFO = {
  name: "Lurram Barbosa Santos",
  role: "Desenvolvedor Fullstack & Mobile",
  education: "Engenharia de Computação",
  languages: ["Português (Nativo)", "Inglês (Avançado)"],
  bio: "Crio soluções escaláveis e interfaces intuitivas, unindo boas práticas de engenharia e foco na experiência do usuário para transformar ideias em produtos funcionais.",
  location: "Brasil",
  email: "lurram.santos.dev@gmail.com",
  photoUrl: "../public/personal.jpg" 
};

export const SKILLS: Skill[] = [
  { name: "React", icon: SiReact, featured: true, description: "Interfaces web modernas e reativas." },
  { name: "React Native", icon: TbBrandReactNative, featured: true, description: "Apps nativos de alto desempenho para iOS e Android." },
  { name: "Node.js", icon: SiNodedotjs, featured: true, description: "Backend escalável e arquitetura de microserviços." },
  { name: "Next.js", icon: SiNextdotjs, featured: true, description: "Performance web, SSR e otimização SEO." },
  { name: "MongoDB", icon: SiMongodb, featured: false },
  { name: "MySQL", icon: SiMysql, featured: false },
  { name: "PostgreSQL", icon: SiPostgresql, featured: false },
  { name: "TypeScript", icon: SiTypescript, featured: true, description: "Código tipado, seguro e manutenível." },
  { name: "Tailwindcss", icon: SiTailwindcss, featured: false },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Embarque Certo",
    description: "Sistema de gerenciamento de passageiros e cargas para embarcações com App Mobile (React Native).",
    category: "Mobile",
    tags: ["React Native"],
    image: "/project-1.png"
  },
  {
    id: "2",
    title: "EcoTrack App",
    description: "Aplicativo mobile para monitoramento de pegada de carbono em tempo real com geolocalização e gráficos interativos.",
    category: "Mobile",
    tags: ["React Native", "Firebase", "TypeScript"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "3",
    title: "SaaS de Logística",
    description: "Plataforma web para gestão de frotas e entregas. Arquitetura robusta preparada para milhares de requisições simultâneas.",
    category: "Fullstack Web",
    tags: ["Next.js", "Node.js", "Docker"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop"
  }
];
