import type React from "react";
import { CgSmartphone } from "react-icons/cg";
import { RxOpenInNewWindow } from "react-icons/rx";
import { SiStackbit } from "react-icons/si";
import Layout from "../src/components/layout";
import CopyButton from "./components/copy-email";
import ScrollReveal from "./components/scrollReveal";
import WhatsAppSender from "./components/send-mensage";
import { PERSONAL_INFO, PROJECTS, SKILLS } from "./constants";

const App: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 space-y-32">
        {/* Hero Section */}
        <section
          id="about"
          className="py-20 flex flex-col-reverse lg:flex-row items-center gap-16"
        >
          <ScrollReveal className="flex-1 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                <span className="inline-block px-4 py-1.5 bg-[#0d5973]/10 text-[#0d5973] dark:bg-[#0d5973]/20 dark:text-white text-xs font-black uppercase tracking-[0.2em] rounded-full">
                  {PERSONAL_INFO.education}
                </span>
                <span className="inline-block px-4 py-1.5 bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 text-xs font-black uppercase tracking-[0.2em] rounded-full">
                  Fullstack & Mobile
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.05] text-slate-900 dark:text-white">
                Olá, eu sou o{" "}
                <span className="text-[#0d5973] dark:text-[#148fb8]">
                  {PERSONAL_INFO.name.split(" ")[0]}
                </span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#projects"
                className="flex items-center gap-2 px-8 py-4 bg-[#0d5973] text-white rounded-2xl font-bold hover:shadow-2xl hover:shadow-[#0d5973]/40 transition-all hover:-translate-y-1"
              >
                Explorar Projetos
              </a>

              <a
                href="/curriculo.pdf"
                className="flex items-center gap-2 px-8 py-4 bg-white text-[#0d5973] rounded-2xl font-bold hover:shadow-2xl hover:shadow-[#0d5973]/40 transition-all hover:-translate-y-1"
              >
                Currículo
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl font-bold hover:shadow-2xl hover:shadow-[#0d5973]/40 transition-all hover:-translate-y-1"
              >
                Entrar em Contato
              </a>
            </div>

            <div className="pt-8 space-y-4">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Stack de Especialidade
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                {SKILLS.filter((s) => s.featured).map((s) => (
                  <span
                    key={s.name}
                    className="text-xl font-black tracking-tighter font-display uppercase"
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal
            delay={200}
            className="w-full lg:w-[450px] relative group"
          >
            <div className="aspect-4/5 rounded-3xl overflow-hidden bg-slate-200 dark:bg-slate-800 shadow-2xl relative z-10">
              <img
                src="/personal.jpg"
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0d5973]/40 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#0d5973]/20 rounded-full blur-3xl z-0"></div>
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-[#0d5973]/30 rounded-full blur-3xl z-0 animate-pulse"></div>
            <div className="absolute -right-6 top-1/4 -translate-y-1/2 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl z-20 hidden md:block border border-slate-100 dark:border-slate-700">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="size-2 bg-emerald-500 rounded-full animate-pulse"></span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase">
                    Disponível para Projetos
                  </span>
                </div>
                <p className="text-xs font-black">
                  Fullstack & Mobile Developer
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Skills Section - Bento Style */}
        <section id="skills" className="space-y-12">
          <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-4xl font-extrabold tracking-tight font-display">
                Minhas Habilidades
              </h3>
              <p className="text-slate-500 dark:text-slate-400">
                Expertise técnica do FullStack e Mobile.
              </p>
            </div>
            <div className="h-px grow bg-slate-200 dark:bg-slate-800 mx-10 hidden md:block"></div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <ScrollReveal className="col-span-2 p-8 bg-[#0d5973] text-white rounded-3xl flex flex-col justify-between shadow-xl shadow-[#0d5973]/20 hover:scale-[1.02] transition-transform">
              <SiStackbit className="material-symbols-outlined text-4xl" />
              <div>
                <h4 className="text-2xl font-bold mb-2">
                  Ecossistema Fullstack
                </h4>
                <p className="text-white/80 text-sm">
                  Construção de APIs robustas com Node.js e interfaces dinâmicas
                  com React/Next.js.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal
              delay={100}
              className="col-span-2 p-8 bg-slate-900 text-white rounded-3xl flex flex-col justify-between shadow-xl hover:scale-[1.02] transition-transform"
            >
              <CgSmartphone className="material-symbols-outlined text-4xl" />
              <div>
                <h4 className="text-2xl font-bold mb-2">
                  Desenvolvimento Mobile
                </h4>
                <p className="text-white/80 text-sm">
                  Criação de experiências nativas fluidas para iOS e Android com
                  React Native.
                </p>
              </div>
            </ScrollReveal>

            {SKILLS.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <ScrollReveal
                  key={skill.name}
                  delay={150 + index * 50}
                  className="p-6 bg-white dark:bg-[#1a2b32] rounded-3xl flex flex-col items-center justify-center gap-4 border border-slate-100 dark:border-slate-800 hover:border-[#0d5973] transition-all cursor-default shadow-sm hover:shadow-md group"
                >
                  <div className="size-14 rounded-2xl bg-[#0d5973]/5 dark:bg-[#0d5973]/20 flex items-center justify-center group-hover:bg-[#0d5973] group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#0d5973]/20 transition-all duration-300">
                    <Icon
                      className="text-3xl text-[#0d5973] dark:text-[#148fb8] group-hover:text-white transition-colors duration-300"
                      size={24}
                    />
                  </div>
                  <span className="font-bold text-sm tracking-tight text-center group-hover:text-[#0d5973] dark:group-hover:text-[#148fb8] transition-colors">
                    {skill.name}
                  </span>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-16">
          <ScrollReveal className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h3 className="text-4xl font-extrabold tracking-tight font-display">
              Projetos em Destaque
            </h3>
            <div className="flex gap-4">
              <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700">
                Mobile
              </span>
              <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700">
                Fullstack
              </span>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PROJECTS.map((project, index) => (
              <ScrollReveal
                key={project.id}
                delay={index * 100}
                className="group cursor-pointer"
              >
                <div className="aspect-video relative bg-slate-100 dark:bg-slate-800 rounded-4xl overflow-hidden mb-6 border border-slate-200 dark:border-slate-800 group-hover:border-[#0d5973] transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-[#0d5973]/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <a
                      href={project.link}
                      className="px-6 py-3 bg-white text-black font-bold rounded-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex items-center gap-2"
                    >
                      Ver Detalhes
                      <span>
                        <RxOpenInNewWindow className="material-symbols-outlined text-sm" />
                      </span>
                    </a>
                  </div>
                </div>
                <div className="space-y-3 px-2">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded">
                      {project.category}
                    </span>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-black uppercase tracking-widest text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-2xl font-extrabold group-hover:text-[#0d5973] transition-colors tracking-tight">
                    {project.title}
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="relative">
          <ScrollReveal className="relative py-20 overflow-hidden rounded-[3rem] bg-[#0d5973] text-white px-8 md:px-20">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 size-96 bg-white/10 blur-[100px] rounded-full"></div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl text-center lg:text-left space-y-6">
                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-tight">
                  Impulsione sua ideia <br className="hidden md:block" /> com
                  tecnologia de ponta.
                </h2>
                <p className="text-white/80 text-xl md:pr-10">
                  Seja para um app mobile disruptivo ou uma plataforma web
                  escalável, estou pronto para transformar seu desafio em
                  realidade.
                </p>
              </div>

              <div className="flex flex-col justify-center lg:justify-start gap-4 w-full max-w-md">
                <CopyButton textToCopy={PERSONAL_INFO.email} />
                <WhatsAppSender defaultMessage="Olá! Gostaria de mais informações." />
              </div>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </Layout>
  );
};

export default App;
