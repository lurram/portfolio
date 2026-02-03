
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
  photoUrl: "../public/personal.jpg",
  phone: "+55 96 991779011"
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
    image: "/project-1.png",
    link: 'https://github.com/lurram/embarque-certo'
  },
  {
    id: "2",
    title: "Barbershop",
    description: "Website com intuito de organizar e gerenciar o atendimento de barbearias cadastradas no banco de dados.",
    category: "FullStack Web",
    tags: ["Next.js", "PostgreSQL", "TypeScript", "Tailwindcss", ],
    image: "/project-2.png",
    link: 'https://github.com/lurram/barbershop'
  },
  {
    id: "3",
    title: "Website EST Informática",
    description: "Website informativo da empresa EST Informática.",
    category: "Fullstack Web",
    tags: ["Vite", "Tailwindcss"],
    image: "/project-3.png",
    link: 'https://github.com/lurram/est-informatica'
  }
];
