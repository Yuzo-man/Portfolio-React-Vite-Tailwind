import React from "react";
import Navbar from './components/Navbar';
import ButtonGradient from "./assets/svg/ButtonGradient";
import backgroundSM from "./assets/background/sobre-mi.jpg";
import backgroundEst from "./assets/background/estudios2.jpg";
import { useApp } from "./context/AppContext";

import {
  SiReact, SiTypescript, SiJavascript, SiVuedotjs, SiNextdotjs,
  SiRedux, SiHtml5, SiCss, SiTailwindcss,
  SiPython, SiDjango, SiPhp, SiNodedotjs, SiDotnet,
  SiPostgresql, SiMysql, SiSqlite,
  SiGit, SiGithub, SiDocker, SiPostman,
  SiSalesforce, SiKotlin, SiAndroid,
} from 'react-icons/si';
import { FaMicrosoft, FaCode, FaServer, FaDatabase, FaCloud, FaCogs, FaWrench, FaExternalLinkAlt } from 'react-icons/fa';

/* ─── Static data (non-translatable) ─── */
const iconMap = {
  'React.js':          { icon: SiReact,       color: '#61DAFB' },
  'TypeScript':        { icon: SiTypescript,   color: '#3178C6' },
  'JavaScript ES6+':   { icon: SiJavascript,   color: '#F7DF1E' },
  'Vue.js':            { icon: SiVuedotjs,     color: '#42B883' },
  'Next.js':           { icon: SiNextdotjs,    color: '#e5e5e5' },
  'Redux':             { icon: SiRedux,        color: '#764ABC' },
  'HTML5':             { icon: SiHtml5,        color: '#E34F26' },
  'CSS3':              { icon: SiCss,          color: '#1572B6' },
  'Tailwind CSS':      { icon: SiTailwindcss,  color: '#06B6D4' },
  'Python':            { icon: SiPython,       color: '#3776AB' },
  'Django':            { icon: SiDjango,       color: '#44B78B' },
  'PHP Laravel':       { icon: SiPhp,          color: '#777BB4' },
  'Node.js':           { icon: SiNodedotjs,    color: '#339933' },
  '.NET':              { icon: SiDotnet,       color: '#512BD4' },
  'PostgreSQL':        { icon: SiPostgresql,   color: '#4169E1' },
  'MySQL':             { icon: SiMysql,        color: '#4479A1' },
  'SQLite':            { icon: SiSqlite,       color: '#7FB1C8' },
  'Azure Data Factory':{ icon: FaMicrosoft,    color: '#0078D4' },
  'Azure Databricks':  { icon: FaMicrosoft,    color: '#0078D4' },
  'Power BI':          { icon: FaMicrosoft,    color: '#F2C811' },
  'Git':               { icon: SiGit,          color: '#F05032' },
  'GitHub':            { icon: SiGithub,       color: '#e5e5e5' },
  'Docker':            { icon: SiDocker,       color: '#2496ED' },
  'Postman':           { icon: SiPostman,      color: '#FF6C37' },
  'Salesforce':        { icon: SiSalesforce,   color: '#00A1E0' },
  'Android Studio':    { icon: SiAndroid,      color: '#3DDC84' },
  'Kotlin':            { icon: SiKotlin,       color: '#7F52FF' },
};

const categoryConfig = {
  'Frontend':       { icon: FaCode,     color: 'text-cyan-500 dark:text-cyan-400',   border: 'hover:border-cyan-300 dark:hover:border-cyan-800' },
  'Backend':        { icon: FaServer,   color: 'text-green-600 dark:text-green-400', border: 'hover:border-green-300 dark:hover:border-green-800' },
  'Bases de Datos': { icon: FaDatabase, color: 'text-yellow-600 dark:text-yellow-400',border: 'hover:border-yellow-300 dark:hover:border-yellow-800' },
  'Cloud / AWS':    { icon: FaCloud,    color: 'text-orange-500 dark:text-orange-400',border: 'hover:border-orange-300 dark:hover:border-orange-800' },
  'DevOps / CI-CD': { icon: FaCogs,    color: 'text-blue-600 dark:text-blue-400',   border: 'hover:border-blue-300 dark:hover:border-blue-800' },
  'Herramientas':   { icon: FaWrench,  color: 'text-pink-600 dark:text-pink-400',   border: 'hover:border-pink-300 dark:hover:border-pink-800' },
};

const skillCategories = [
  { category: 'Frontend',       skills: ['React.js','Next.js','Vue.js','TypeScript','JavaScript ES6+','Redux','HTML5','CSS3','Tailwind CSS'] },
  { category: 'Backend',        skills: ['Python','Django','DRF','Node.js','.NET','PHP Laravel','API REST','JWT','Microservicios'] },
  { category: 'Bases de Datos', skills: ['PostgreSQL','MySQL','SQLite'] },
  { category: 'Cloud / AWS',    skills: ['Azure Data Factory','Azure Databricks','Databricks','Power BI','Pandas','NumPy'] },
  { category: 'DevOps / CI-CD', skills: ['Git','GitHub','Docker','Azure DevOps','Git Flow','CI/CD pipelines','Postman'] },
  { category: 'Herramientas',   skills: ['Salesforce','ServiceNow','Google Tag Manager','Android Studio','Kotlin'] },
];

// Static metadata merged with translations at render time
const expMeta = [
  { company: 'Care Assistance',       location: 'Santiago, Chile',    color: 'border-gold-500', dot: 'bg-gold-500' },
  { company: 'Coasin Logicalis',      location: 'Antofagasta, Chile', color: 'border-blue-500',   dot: 'bg-blue-500' },
  { company: 'Minera Zaldívar',       location: 'Antofagasta, Chile', color: 'border-yellow-500', dot: 'bg-yellow-500' },
  { company: 'Sociedad Fuelles Ltda', location: 'Antofagasta, Chile', color: 'border-green-500',  dot: 'bg-green-500' },
];

const projTech = [
  ['React.js','TypeScript','Redux','Next.js','Python','Salesforce'],
  ['Python','Azure Databricks','Azure Data Factory','Power BI'],
  ['Django','React.js','PostgreSQL'],
];

const personalMeta = [
  { tech: ['Django','React.js','PostgreSQL'], github: 'https://github.com/Yuzo-man', status: 'Completado' },
  { tech: ['Vue.js'],                         github: 'https://github.com/Yuzo-man', status: 'Prototipo' },
  { tech: ['Python'],                         github: 'https://github.com/Yuzo-man', status: 'En desarrollo' },
  { tech: ['Python'],                         github: 'https://github.com/Yuzo-man', status: 'Completado' },
];

const statusClasses = {
  'Completado':    'bg-green-100 text-green-800 border border-green-300 dark:bg-green-900/40 dark:text-green-400 dark:border-green-700',
  'Prototipo':     'bg-blue-100 text-blue-800 border border-blue-300 dark:bg-blue-900/40 dark:text-blue-400 dark:border-blue-700',
  'En desarrollo': 'bg-yellow-100 text-yellow-800 border border-yellow-300 dark:bg-yellow-900/40 dark:text-yellow-400 dark:border-yellow-700',
};

/* ─── Sub-components ─── */
const SectionTitle = ({ children }) => (
  <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white relative">
    <span className="relative">
      {children}
      <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-gold-500 to-cyan-500 rounded-full"></span>
    </span>
  </h2>
);

const SkillPill = ({ skill }) => {
  const d = iconMap[skill];
  const Icon = d?.icon;
  return (
    <span className="group flex items-center gap-1.5 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 text-sm px-3 py-1.5 rounded-full transition-all duration-200 cursor-default border border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500">
      {Icon && <Icon className="text-sm flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" style={{ color: d.color }} />}
      {skill}
    </span>
  );
};

const TechBadge = ({ tech }) => {
  const d = iconMap[tech];
  const Icon = d?.icon;
  return (
    <span className="flex items-center gap-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2.5 py-1 rounded-full border border-gray-200 dark:border-gray-600">
      {Icon && <Icon className="text-sm flex-shrink-0" style={{ color: d.color }} />}
      {tech}
    </span>
  );
};

/* ─── Main App ─── */
const App = () => {
  const { t } = useApp();

  const experiences = t.experience.jobs.map((job, i) => ({ ...job, ...expMeta[i] }));
  const projects    = t.projects.items.map((p, i) => ({ ...p, tech: projTech[i] }));
  const personalProjects = t.personalProjects.items.map((p, i) => ({ ...p, ...personalMeta[i] }));

  return (
    <div className="relative min-h-screen text-gray-900 dark:text-white">
      <div className="fixed inset-0 w-full h-full bg-gray-50 dark:bg-gray-900 z-0"></div>
      <ButtonGradient />

      <div className="relative z-10">
        <Navbar />

        {/* ── HERO ── */}
        <section id="inicio" className="min-h-screen flex flex-col justify-center items-center px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gold-50 dark:from-gray-900 dark:via-gray-900 dark:to-gold-950"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold-400 dark:bg-gold-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-400 dark:bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>

          {/* Fade hero bottom into next section */}
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-b from-transparent to-white dark:to-gray-900 pointer-events-none z-20"></div>

          <div className="relative z-10 max-w-3xl w-full">

            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 to-gold-700 dark:from-white dark:via-gold-200 dark:to-gold-400 bg-clip-text text-transparent">
                Pablo Cerda
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">Isasmendi</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-2 font-light">{t.hero.title}</p>
            <p className="text-gray-500 mb-10 text-sm px-4">{t.hero.subtitle}</p>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <a href="mailto:pablo.cerdaisas@gmail.com"
                className="bg-gold-600 hover:bg-gold-500 text-white px-7 py-3 rounded-full font-medium transition-all shadow-lg shadow-gold-200 dark:shadow-gold-900/50 hover:shadow-gold-300 dark:hover:shadow-gold-700/50">
                {t.nav.contactar}
              </a>
              <a href="https://github.com/Yuzo-man" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 hover:border-gray-900 dark:hover:border-gray-400 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-7 py-3 rounded-full font-medium transition-all">
                <SiGithub /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/pablo-alejandro-cerda-isasmendi-5713892a0/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 hover:border-gray-900 dark:hover:border-gray-400 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-7 py-3 rounded-full font-medium transition-all">
                💼 LinkedIn
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {t.hero.stats.map((s) => (
                <div key={s.value} className="bg-white/70 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-5 border border-gray-200 dark:border-gray-700 hover:border-gold-300 dark:hover:border-gold-700 transition-colors shadow-sm dark:shadow-none flex flex-col min-h-[6rem]">
                  <p className="text-3xl font-bold bg-gradient-to-r from-gold-600 to-gold-400 dark:from-gold-400 dark:to-cyan-400 bg-clip-text text-transparent">{s.value}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SOBRE MÍ ── */}
        <section id="sobre-mi" className="relative py-24 px-6 overflow-hidden">
          {/* Imagen de fondo con transición suave arriba y abajo */}
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundSM})` }}></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/88 to-white dark:from-gray-900 dark:via-gray-900/88 dark:to-gray-900"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <SectionTitle>{t.about.title}</SectionTitle>
            <div className="bg-white/80 dark:bg-gray-800/75 backdrop-blur-lg rounded-3xl p-8 border border-gray-200 dark:border-gray-700 hover:border-gold-300 dark:hover:border-gold-800 transition-colors shadow-sm dark:shadow-none">
              <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed text-justify">{t.about.p1}</p>
              <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed text-justify mt-4">
                {t.about.p2pre}
                <span className="text-gold-600 dark:text-gold-400 font-semibold">{t.about.p2tech}</span>
                {t.about.p2suf}
              </p>
              <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed text-justify mt-4">
                {t.about.p3pre}
                <span className="text-gold-600 dark:text-gold-400 font-semibold">{t.about.p3hi}</span>
                {t.about.p3suf}
              </p>
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-wrap gap-5 text-sm text-gray-500 dark:text-gray-400">
                <span>📍 Santiago, Chile</span>
                <a href="mailto:pablo.cerdaisas@gmail.com" className="hover:text-gold-600 dark:hover:text-gold-400 transition-colors">✉️ pablo.cerdaisas@gmail.com</a>
                <a href="tel:+56955227000" className="hover:text-gold-600 dark:hover:text-gold-400 transition-colors">📞 +56 9 5522 7000</a>
                <span>🌐 {t.about.english}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── HABILIDADES ── */}
        <section id="habilidades" className="py-24 px-6 bg-gray-100/60 dark:bg-gray-800/30">
          <div className="max-w-5xl mx-auto">
            <SectionTitle>{t.skills.title}</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {skillCategories.map((cat) => {
                const cfg = categoryConfig[cat.category];
                const CatIcon = cfg?.icon;
                return (
                  <div key={cat.category}
                    className={`bg-white/80 dark:bg-gray-800/70 backdrop-blur rounded-2xl p-6 border border-gray-200 dark:border-gray-700 transition-all duration-200 ${cfg?.border} shadow-sm dark:shadow-none`}>
                    <div className={`flex items-center gap-2 mb-4 ${cfg?.color}`}>
                      {CatIcon && <CatIcon className="text-lg" />}
                      <h3 className="font-semibold text-xs uppercase tracking-widest">{t.skills.cats[cat.category]}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill) => <SkillPill key={skill} skill={skill} />)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── EXPERIENCIA ── */}
        <section id="experiencia" className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <SectionTitle>{t.experience.title}</SectionTitle>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-gold-500 via-blue-500 to-green-500 hidden md:block"></div>
              <div className="space-y-6">
                {experiences.map((exp, i) => (
                  <div key={i} className="relative md:pl-12">
                    <div className={`absolute left-2 top-7 w-4 h-4 ${exp.dot} rounded-full border-2 border-gray-50 dark:border-gray-900 hidden md:block shadow`}></div>
                    <div className={`bg-white/80 dark:bg-gray-800/70 backdrop-blur rounded-2xl p-6 border-l-2 ${exp.color} border-t border-r border-b border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800/90 transition-all shadow-sm dark:shadow-none`}>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                        <div>
                          <h3 className="text-gray-900 dark:text-white font-bold text-lg">{exp.role}</h3>
                          <p className="text-gold-600 dark:text-gold-400 font-medium">{exp.company}</p>
                          <p className="text-gray-500 text-sm mt-0.5">📍 {exp.location}</p>
                        </div>
                        <span className="text-gray-600 dark:text-gray-400 text-xs whitespace-nowrap bg-gray-100 dark:bg-gray-700 px-3 py-1.5 rounded-full self-start border border-gray-200 dark:border-gray-600">
                          {exp.period}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {exp.bullets.map((b, j) => (
                          <li key={j} className="text-gray-600 dark:text-gray-300 text-sm flex gap-2">
                            <span className="text-gold-500 mt-0.5 flex-shrink-0">▸</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PROYECTOS PROFESIONALES ── */}
        <section id="proyectos" className="py-24 px-6 bg-gray-100/60 dark:bg-gray-800/30">
          <div className="max-w-5xl mx-auto">
            <SectionTitle>{t.projects.title}</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((proj, i) => (
                <div key={i} className="bg-white dark:bg-gray-800/70 backdrop-blur rounded-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden hover:border-gold-300 dark:hover:border-gold-700 hover:-translate-y-1 transition-all duration-200 shadow-sm dark:shadow-none group">
                  <div className="bg-gradient-to-r from-gold-50 to-gray-50 dark:from-gold-900 dark:to-gray-800 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                    <p className="text-gold-600 dark:text-gold-400 text-xs font-semibold uppercase tracking-wider mb-1">{proj.company}</p>
                    <h3 className="text-gray-900 dark:text-white font-bold text-base">{proj.title}</h3>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-grow">{proj.description}</p>
                    <div className="mt-4 mb-4 bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800 rounded-lg px-3 py-2">
                      <span className="text-green-700 dark:text-green-400 text-sm font-semibold">✓ {proj.highlight}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {proj.tech.map((t) => <TechBadge key={t} tech={t} />)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROYECTOS PERSONALES ── */}
        <section id="proyectos-personales" className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <SectionTitle>{t.personalProjects.title}</SectionTitle>
            <p className="text-center text-gray-500 dark:text-gray-400 text-sm mb-12 -mt-6">{t.personalProjects.subtitle}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {personalProjects.map((proj, i) => (
                <div key={i} className="bg-white dark:bg-gray-800/70 backdrop-blur rounded-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden hover:border-gold-300 dark:hover:border-gold-700 hover:-translate-y-1 transition-all duration-200 shadow-sm dark:shadow-none">
                  <div className="bg-gradient-to-r from-gray-50 to-gold-50/50 dark:from-gray-800 dark:to-gold-950/50 px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <SiGithub className="text-gray-400 text-sm" />
                        <span className="text-gray-400 text-xs">{t.personalProjects.personalLabel}</span>
                      </div>
                      <h3 className="text-gray-900 dark:text-white font-bold text-base">{proj.title}</h3>
                    </div>
                    <span className={`text-xs px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0 font-medium ${statusClasses[proj.status]}`}>
                      {t.personalProjects.statuses[proj.status]}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-grow">{proj.description}</p>
                    <div className="mt-5 mb-5 flex flex-wrap gap-2">
                      {proj.tech.map((t) => <TechBadge key={t} tech={t} />)}
                    </div>
                    <a href={proj.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 text-gray-700 dark:text-gray-200 text-sm px-4 py-2.5 rounded-lg transition-colors font-medium">
                      <SiGithub /> {t.personalProjects.viewGithub} <FaExternalLinkAlt className="text-xs text-gray-400" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EDUCACIÓN ── */}
        <section id="educacion" className="relative py-24 px-6 overflow-hidden">
          {/* Imagen de fondo con transición suave arriba y abajo */}
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundEst})` }}></div>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-gray-100/85 to-gray-100 dark:from-gray-900 dark:via-gray-900/85 dark:to-gray-900"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <SectionTitle>{t.education.title}</SectionTitle>
            <div className="space-y-5">
              {t.education.items.map((edu, i) => (
                <div key={i} className="bg-white/80 dark:bg-gray-800/75 backdrop-blur rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-gold-300 dark:hover:border-gold-700 transition-colors flex gap-4 shadow-sm dark:shadow-none">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl border ${i === 0 ? 'bg-gold-50 dark:bg-gold-900 border-gold-200 dark:border-gold-700' : 'bg-blue-50 dark:bg-blue-900 border-blue-200 dark:border-blue-700'}`}>
                    {edu.emoji}
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      <div>
                        <h3 className="text-gray-900 dark:text-white font-bold text-lg">{edu.degree}</h3>
                        <p className="text-gold-600 dark:text-gold-400 font-medium">{edu.institution}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{edu.location} · {edu.description}</p>
                      </div>
                      <span className="text-gray-500 dark:text-gray-400 text-xs whitespace-nowrap bg-gray-100 dark:bg-gray-700 px-3 py-1.5 rounded-full self-start border border-gray-200 dark:border-gray-600">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACTO ── */}
        <section id="contacto" className="py-24 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <SectionTitle>{t.contact.title}</SectionTitle>
            <p className="text-gray-500 dark:text-gray-400 mb-10">{t.contact.subtitle}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: '✉️', label: 'pablo.cerdaisas@gmail.com', href: 'mailto:pablo.cerdaisas@gmail.com' },
                { icon: '📞', label: '+56 9 5522 7000', href: 'tel:+56955227000' },
                { icon: '💼', label: 'LinkedIn', href: 'https://www.linkedin.com/in/pablo-alejandro-cerda-isasmendi-5713892a0/' },
                { icon: <SiGithub />, label: 'github.com/Yuzo-man', href: 'https://github.com/Yuzo-man' },
              ].map(({ icon, label, href }) => (
                <a key={href} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl p-4 transition-colors border border-gray-200 dark:border-gray-700 hover:border-gold-300 dark:hover:border-gold-700 shadow-sm dark:shadow-none">
                  <span className="text-gold-600 dark:text-gold-400 text-xl flex-shrink-0">{icon}</span>
                  <span className="text-gray-700 dark:text-gray-200 text-sm truncate">{label}</span>
                </a>
              ))}
            </div>
            <a href="mailto:pablo.cerdaisas@gmail.com"
              className="inline-block bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-white px-12 py-4 rounded-full font-semibold transition-all shadow-lg shadow-gold-200 dark:shadow-gold-900/50 text-lg">
              {t.contact.cta}
            </a>
          </div>
        </section>

        <footer className="bg-gray-100 dark:bg-gray-900 text-gray-400 dark:text-gray-600 py-6 text-center text-sm border-t border-gray-200 dark:border-gray-800">
          <p>&copy; {t.footer}</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
