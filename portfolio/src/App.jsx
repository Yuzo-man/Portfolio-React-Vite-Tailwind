import React from "react";
import Navbar from './components/Navbar';
import ButtonGradient from "./assets/svg/ButtonGradient";
import backgroundSM from "./assets/background/sobre-mi.jpg";
import backgroundEst from "./assets/background/estudios2.jpg";

import {
  SiReact, SiAngular, SiTypescript, SiJavascript, SiVuedotjs, SiNextdotjs,
  SiRedux, SiHtml5, SiCss, SiTailwindcss,
  SiPython, SiDjango, SiPhp, SiNodedotjs, SiNestjs, SiSpring,
  SiPostgresql, SiMysql, SiSqlite,
  SiGit, SiGithub, SiDocker, SiPostman,
  SiSalesforce, SiKotlin, SiShopify, SiAndroid,
} from 'react-icons/si';
import {
  FaAws, FaMicrosoft, FaCode, FaServer, FaDatabase, FaCloud, FaCogs, FaWrench, FaExternalLinkAlt,
} from 'react-icons/fa';

const iconMap = {
  'React.js':          { icon: SiReact,          color: '#61DAFB' },
  'Angular':           { icon: SiAngular,         color: '#DD0031' },
  'TypeScript':        { icon: SiTypescript,      color: '#3178C6' },
  'JavaScript ES6+':   { icon: SiJavascript,      color: '#F7DF1E' },
  'Vue.js':            { icon: SiVuedotjs,        color: '#42B883' },
  'Next.js':           { icon: SiNextdotjs,       color: '#e5e5e5' },
  'Redux':             { icon: SiRedux,           color: '#764ABC' },
  'HTML5':             { icon: SiHtml5,           color: '#E34F26' },
  'CSS3':              { icon: SiCss,             color: '#1572B6' },
  'Tailwind CSS':      { icon: SiTailwindcss,     color: '#06B6D4' },
  'Python':            { icon: SiPython,          color: '#3776AB' },
  'Django':            { icon: SiDjango,          color: '#44B78B' },
  'PHP Laravel':       { icon: SiPhp,             color: '#777BB4' },
  'Node.js':           { icon: SiNodedotjs,       color: '#339933' },
  'NestJS':            { icon: SiNestjs,          color: '#E0234E' },
  'Java Spring Boot':  { icon: SiSpring,          color: '#6DB33F' },
  'PostgreSQL':        { icon: SiPostgresql,      color: '#4169E1' },
  'MySQL':             { icon: SiMysql,           color: '#4479A1' },
  'SQLite':            { icon: SiSqlite,          color: '#7FB1C8' },
  'AWS S3':            { icon: FaAws,             color: '#FF9900' },
  'AWS Lambda':        { icon: FaAws,             color: '#FF9900' },
  'Azure Data Factory':{ icon: FaMicrosoft,        color: '#0078D4' },
  'Azure Databricks':  { icon: FaMicrosoft,        color: '#0078D4' },
  'Power BI':          { icon: FaMicrosoft,        color: '#F2C811' },
  'Git':               { icon: SiGit,             color: '#F05032' },
  'GitHub':            { icon: SiGithub,          color: '#e5e5e5' },
  'Docker':            { icon: SiDocker,          color: '#2496ED' },
  'Postman':           { icon: SiPostman,         color: '#FF6C37' },
  'Salesforce':        { icon: SiSalesforce,      color: '#00A1E0' },
  'Android Studio':    { icon: SiAndroid,         color: '#3DDC84' },
  'Kotlin':            { icon: SiKotlin,          color: '#7F52FF' },
  'Shopify':           { icon: SiShopify,         color: '#96BF48' },
};

const categoryConfig = {
  'Frontend':       { icon: FaCode,     color: 'text-cyan-400',   border: 'border-cyan-800' },
  'Backend':        { icon: FaServer,   color: 'text-green-400',  border: 'border-green-800' },
  'Bases de Datos': { icon: FaDatabase, color: 'text-yellow-400', border: 'border-yellow-800' },
  'Cloud / AWS':    { icon: FaCloud,    color: 'text-orange-400', border: 'border-orange-800' },
  'DevOps / CI-CD': { icon: FaCogs,    color: 'text-blue-400',   border: 'border-blue-800' },
  'Herramientas':   { icon: FaWrench,  color: 'text-pink-400',   border: 'border-pink-800' },
};

const skillCategories = [
  { category: "Frontend",       skills: ["React.js", "Angular", "TypeScript", "JavaScript ES6+", "Vue.js", "Next.js", "Redux", "HTML5", "CSS3", "Tailwind CSS"] },
  { category: "Backend",        skills: ["Python", "Django", "DRF", "Java Spring Boot", "PHP Laravel", "Node.js", "NestJS", "API REST", "JWT", "OAuth2", "Microservicios"] },
  { category: "Bases de Datos", skills: ["PostgreSQL", "MySQL", "SQLite", "Databricks"] },
  { category: "Cloud / AWS",    skills: ["AWS S3", "AWS Lambda", "Azure Data Factory", "Azure Databricks", "Power BI", "Pandas", "NumPy"] },
  { category: "DevOps / CI-CD", skills: ["Git", "GitHub", "Azure DevOps", "Git Flow", "Docker", "Postman", "Swagger", "CI/CD pipelines"] },
  { category: "Herramientas",   skills: ["Salesforce", "ServiceNow", "Google Tag Manager", "Android Studio", "Kotlin", "Odoo", "Shopify"] },
];

const experiences = [
  {
    role: "Desarrollador Full Stack Semi Senior",
    company: "Care Assistance",
    location: "Santiago, Chile",
    period: "Ago 2025 – Mar 2026",
    color: "border-purple-500",
    dot: "bg-purple-500",
    bullets: [
      "Garanticé la estabilidad y continuidad operacional de la plataforma de salud en producción, resolviendo +20 incidencias críticas e implementando mejoras que elevaron la confiabilidad del sistema.",
      "Desarrollé +10 funcionalidades end-to-end con React.js, TypeScript, Redux y microservicios Python, integrando AWS S3 y Lambda para la conexión con APIs externas.",
      "Integré 5+ plataformas externas vía APIs REST (OAuth 2, webhooks) documentadas con Postman y Swagger. Administré Salesforce, implementé Google Tag Manager y desarrollé app Android nativa con Kotlin.",
      "Implementé páginas con Next.js (App Router, SSR) para visualización de datos en tiempo real desde API interna y Salesforce, usando Redux para manejo de estado.",
    ],
  },
  {
    role: "Soporte Técnico Nivel 1",
    company: "Coasin Logicalis",
    location: "Antofagasta, Chile",
    period: "Jun 2025 – Ago 2025",
    color: "border-blue-500",
    dot: "bg-blue-500",
    bullets: [
      "Resolví 20+ tickets de soporte de software y red en ServiceNow, priorizando por SLA.",
      "Documenté causas raíz y soluciones para reducir incidencias recurrentes del equipo.",
    ],
  },
  {
    role: "Analista de Datos (Memorista)",
    company: "Minera Zaldívar",
    location: "Antofagasta, Chile",
    period: "Sep 2024 – Dic 2024",
    color: "border-yellow-500",
    dot: "bg-yellow-500",
    bullets: [
      "Automaticé reporte de consolidación de datos optimizando ~80% el tiempo de recaudación desde múltiples plataformas, eliminando el proceso manual en Excel.",
      "Desarrollé pipelines ETL con Python en Databricks, automatización con Azure Data Factory y dashboards KPI en Power BI para gerencia.",
    ],
  },
  {
    role: "Desarrollador Web Full Stack",
    company: "Sociedad Fuelles Limitada",
    location: "Antofagasta, Chile",
    period: "Ene 2024 – Sep 2024",
    color: "border-green-500",
    dot: "bg-green-500",
    bullets: [
      "Creé plataforma end-to-end para gestión y control ISO 9001 con Django, React.js y PostgreSQL, optimizando el proceso en un 98% respecto al manejo previo en Google Drive.",
      "Realicé levantamiento de requerimientos, diseño de arquitectura y documentación técnica completa de usuario y sistema.",
    ],
  },
];

const professionalProjects = [
  {
    title: "Plataforma Web Sector Salud",
    company: "Care Assistance",
    tech: ["React.js", "TypeScript", "Redux", "Next.js", "Python", "AWS S3", "AWS Lambda", "Salesforce"],
    description: "Desarrollo de +10 funcionalidades end-to-end y estabilización de plataforma del sector salud en producción. Integración con AWS S3, Lambda, Salesforce y 5+ APIs externas vía OAuth2 y webhooks.",
    highlight: "+10 funcionalidades entregadas en producción",
  },
  {
    title: "Automatización ETL & Dashboard KPI",
    company: "Minera Zaldívar",
    tech: ["Python", "Azure Databricks", "Azure Data Factory", "Power BI"],
    description: "Pipelines ETL automatizados para consolidación de datos desde múltiples plataformas mineras, con dashboards KPI en Power BI. Eliminó el proceso manual en Excel.",
    highlight: "~80% reducción en tiempo de datos",
  },
  {
    title: "Plataforma de Gestión ISO 9001",
    company: "Sociedad Fuelles Limitada",
    tech: ["Django", "React.js", "PostgreSQL"],
    description: "Plataforma end-to-end para gestión y control de calidad ISO 9001, reemplazando completamente el flujo previo en Google Drive con una solución robusta y documentada.",
    highlight: "98% optimización del proceso",
  },
];

const personalProjects = [
  {
    title: "Sistema de Digitalización ISO 9001",
    description: "Plataforma web end-to-end para gestión y control de calidad ISO 9001 desarrollada para Fuelles Ltda. Autenticación, roles, módulos de documentos y reportes.",
    tech: ["Django", "React.js", "PostgreSQL"],
    // Actualiza esta URL con el link exacto a tu repositorio
    github: "https://github.com/Yuzo-man",
    status: "Completado",
    statusColor: "bg-green-900 text-green-400 border border-green-700",
  },
  {
    title: "CibeSeg – Desbloqueo de Equipos",
    description: "Prototipo de herramienta web para la gestión y desbloqueo de equipos de ciberseguridad. Interfaz intuitiva con panel de control y flujo de autenticación.",
    tech: ["Vue.js"],
    github: "https://github.com/Yuzo-man",
    status: "Prototipo",
    statusColor: "bg-blue-900 text-blue-400 border border-blue-700",
  },
  {
    title: "Gestión de Flota Vehicular",
    description: "Sistema de control y administración de flota vehicular en Python. Seguimiento operacional, asignación de vehículos, reportes y dashboards de control.",
    tech: ["Python"],
    github: "https://github.com/Yuzo-man",
    status: "En desarrollo",
    statusColor: "bg-yellow-900 text-yellow-400 border border-yellow-700",
  },
  {
    title: "Herramientas de Toma de Requerimientos",
    description: "Conjunto de herramientas para sistematizar el levantamiento, documentación y gestión de requerimientos de software en proyectos de TI.",
    tech: ["Python"],
    github: "https://github.com/Yuzo-man",
    status: "Completado",
    statusColor: "bg-purple-900 text-purple-400 border border-purple-700",
  },
];

const SkillPill = ({ skill }) => {
  const iconData = iconMap[skill];
  const Icon = iconData?.icon;
  return (
    <span className="group flex items-center gap-1.5 bg-gray-700 hover:bg-gray-600 text-gray-300 text-sm px-3 py-1.5 rounded-full transition-all duration-200 cursor-default border border-gray-600 hover:border-gray-500">
      {Icon && (
        <Icon
          className="text-sm flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity"
          style={{ color: iconData.color }}
        />
      )}
      {skill}
    </span>
  );
};

const TechBadge = ({ tech }) => {
  const iconData = iconMap[tech];
  const Icon = iconData?.icon;
  return (
    <span className="flex items-center gap-1.5 bg-gray-700 text-gray-300 text-xs px-2.5 py-1 rounded-full border border-gray-600">
      {Icon && <Icon className="text-sm flex-shrink-0" style={{ color: iconData.color }} />}
      {tech}
    </span>
  );
};

const App = () => {
  return (
    <div className="relative min-h-screen text-white">
      <div className="fixed inset-0 w-full h-full bg-gray-900 z-0"></div>
      <ButtonGradient />

      <div className="relative z-10">
        <Navbar />

        {/* ── HERO ── */}
        <section id="inicio" className="min-h-screen flex flex-col justify-center items-center px-6 text-center relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-purple-950 opacity-80"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>

          <div className="relative z-10 max-w-3xl w-full">
            <p className="text-purple-400 text-xs font-semibold uppercase tracking-widest mb-6 border border-purple-800 bg-purple-950 bg-opacity-50 inline-block px-4 py-1.5 rounded-full">
              Disponible para nuevas oportunidades
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                Pablo Cerda
              </span>
              <br />
              <span className="text-white">Isasmendi</span>
            </h1>
            <p className="text-xl text-gray-300 mb-2 font-light">Desarrollador Full Stack</p>
            <p className="text-gray-500 mb-10 text-sm">
              Ingeniero en Computación e Informática &middot; Santiago, Chile &middot; Inglés C1
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <a href="mailto:pablo.cerdaisas@gmail.com"
                className="bg-purple-600 hover:bg-purple-500 text-white px-7 py-3 rounded-full font-medium transition-all duration-200 shadow-lg shadow-purple-900/50 hover:shadow-purple-700/50">
                Contactar
              </a>
              <a href="https://github.com/Yuzo-man" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-7 py-3 rounded-full font-medium transition-all duration-200">
                <SiGithub /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/pablo-alejandro-cerda-isasmendi-5713892a0/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-7 py-3 rounded-full font-medium transition-all duration-200">
                💼 LinkedIn
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gray-800 bg-opacity-60 backdrop-blur-sm rounded-2xl p-5 border border-gray-700 hover:border-purple-700 transition-colors">
                <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">+10</p>
                <p className="text-sm text-gray-400 mt-1">Funcionalidades entregadas en producción</p>
              </div>
              <div className="bg-gray-800 bg-opacity-60 backdrop-blur-sm rounded-2xl p-5 border border-gray-700 hover:border-purple-700 transition-colors">
                <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">98%</p>
                <p className="text-sm text-gray-400 mt-1">Optimización de procesos ISO 9001</p>
              </div>
              <div className="bg-gray-800 bg-opacity-60 backdrop-blur-sm rounded-2xl p-5 border border-gray-700 hover:border-purple-700 transition-colors">
                <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">~80%</p>
                <p className="text-sm text-gray-400 mt-1">Reducción de tiempo en ETL minería</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── SOBRE MÍ ── */}
        <section id="sobre-mi" className="relative py-24 px-6">
          <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${backgroundSM})` }}></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <SectionTitle>Sobre mí</SectionTitle>
            <div className="bg-gray-800 bg-opacity-75 backdrop-blur-lg rounded-3xl p-8 border border-gray-700 hover:border-purple-800 transition-colors">
              <p className="text-gray-200 text-lg leading-relaxed text-justify">
                Soy Desarrollador Full Stack e Ingeniero en Computación e Informática (UCN, 2024) con más de 1 año de
                experiencia diseñando, codificando, probando y manteniendo aplicaciones web en entornos productivos reales.
              </p>
              <p className="text-gray-200 text-lg leading-relaxed text-justify mt-4">
                Me especializo en{" "}
                <span className="text-purple-400 font-semibold">React.js, TypeScript, Python/Django y Node.js</span>,
                con conocimiento en Java Spring Boot y PHP Laravel. Experiencia en microservicios, APIs RESTful,
                JWT/OAuth2, AWS y sector salud.
              </p>
              <p className="text-gray-200 text-lg leading-relaxed text-justify mt-4">
                Cuento con <span className="text-purple-400 font-semibold">Inglés avanzado (C1)</span> y estoy
                comprometido con la calidad de código, buenas prácticas y el trabajo colaborativo en equipo.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-700 flex flex-wrap gap-5 text-sm text-gray-400">
                <span>📍 Santiago, Chile</span>
                <a href="mailto:pablo.cerdaisas@gmail.com" className="hover:text-purple-400 transition-colors">✉️ pablo.cerdaisas@gmail.com</a>
                <a href="tel:+56955227000" className="hover:text-purple-400 transition-colors">📞 +56 9 5522 7000</a>
                <span>🌐 Inglés C1</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── HABILIDADES ── */}
        <section id="habilidades" className="py-24 px-6 bg-gray-800 bg-opacity-30">
          <div className="max-w-5xl mx-auto">
            <SectionTitle>Habilidades Técnicas</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {skillCategories.map((cat) => {
                const config = categoryConfig[cat.category];
                const CatIcon = config?.icon;
                return (
                  <div key={cat.category}
                    className={`bg-gray-800 bg-opacity-70 backdrop-blur rounded-2xl p-6 border border-gray-700 hover:border-opacity-100 transition-all duration-200 ${config?.border}`}>
                    <div className={`flex items-center gap-2 mb-4 ${config?.color}`}>
                      {CatIcon && <CatIcon className="text-lg" />}
                      <h3 className="font-semibold text-xs uppercase tracking-widest">{cat.category}</h3>
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
            <SectionTitle>Experiencia Profesional</SectionTitle>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-purple-600 via-blue-600 to-green-600 hidden md:block"></div>
              <div className="space-y-6">
                {experiences.map((exp, i) => (
                  <div key={i} className="relative md:pl-12">
                    <div className={`absolute left-2 top-7 w-4 h-4 ${exp.dot} rounded-full border-2 border-gray-900 hidden md:block ring-2 ring-offset-2 ring-offset-gray-900 ring-opacity-50`}
                      style={{ ringColor: 'currentColor' }}></div>
                    <div className={`bg-gray-800 bg-opacity-70 backdrop-blur rounded-2xl p-6 border-l-2 ${exp.color} border-t border-r border-b border-gray-700 hover:bg-opacity-90 transition-all duration-200`}>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                        <div>
                          <h3 className="text-white font-bold text-lg">{exp.role}</h3>
                          <p className="text-purple-400 font-medium">{exp.company}</p>
                          <p className="text-gray-500 text-sm flex items-center gap-1 mt-0.5">
                            <span>📍</span>{exp.location}
                          </p>
                        </div>
                        <span className="text-gray-400 text-xs whitespace-nowrap bg-gray-700 px-3 py-1.5 rounded-full self-start border border-gray-600">
                          {exp.period}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {exp.bullets.map((b, j) => (
                          <li key={j} className="text-gray-300 text-sm flex gap-2">
                            <span className="text-purple-400 mt-0.5 flex-shrink-0">▸</span>
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
        <section id="proyectos" className="py-24 px-6 bg-gray-800 bg-opacity-30">
          <div className="max-w-5xl mx-auto">
            <SectionTitle>Proyectos Profesionales</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {professionalProjects.map((proj, i) => (
                <div key={i} className="bg-gray-800 bg-opacity-70 backdrop-blur rounded-2xl border border-gray-700 flex flex-col overflow-hidden hover:border-purple-700 hover:-translate-y-1 transition-all duration-200 group">
                  <div className="bg-gradient-to-r from-purple-900 to-gray-800 px-6 py-4 border-b border-gray-700">
                    <p className="text-purple-400 text-xs font-semibold uppercase tracking-wider mb-1">{proj.company}</p>
                    <h3 className="text-white font-bold text-base">{proj.title}</h3>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-gray-300 text-sm leading-relaxed flex-grow">{proj.description}</p>
                    <div className="mt-4 mb-4 bg-green-950 border border-green-800 rounded-lg px-3 py-2">
                      <span className="text-green-400 text-sm font-semibold">✓ {proj.highlight}</span>
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
            <SectionTitle>Proyectos Personales</SectionTitle>
            <p className="text-center text-gray-400 text-sm mb-12 -mt-6">Proyectos propios desarrollados en GitHub</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {personalProjects.map((proj, i) => (
                <div key={i} className="bg-gray-800 bg-opacity-70 backdrop-blur rounded-2xl border border-gray-700 flex flex-col overflow-hidden hover:border-purple-700 hover:-translate-y-1 transition-all duration-200">
                  <div className="bg-gradient-to-r from-gray-800 to-purple-950 px-6 py-4 border-b border-gray-700 flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <SiGithub className="text-gray-400 text-sm" />
                        <span className="text-gray-400 text-xs">Proyecto personal</span>
                      </div>
                      <h3 className="text-white font-bold text-base">{proj.title}</h3>
                    </div>
                    <span className={`text-xs px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0 font-medium ${proj.statusColor}`}>
                      {proj.status}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-gray-300 text-sm leading-relaxed flex-grow">{proj.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2 mb-5">
                      {proj.tech.map((t) => <TechBadge key={t} tech={t} />)}
                    </div>
                    <a href={proj.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 border border-gray-600 hover:border-gray-500 text-gray-200 text-sm px-4 py-2.5 rounded-lg transition-colors font-medium">
                      <SiGithub /> Ver en GitHub <FaExternalLinkAlt className="text-xs text-gray-400" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EDUCACIÓN ── */}
        <section id="educacion" className="relative py-24 px-6 bg-gray-800 bg-opacity-30">
          <div className="absolute inset-0 bg-cover bg-center opacity-5" style={{ backgroundImage: `url(${backgroundEst})` }}></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <SectionTitle>Educación y Certificaciones</SectionTitle>
            <div className="space-y-5">
              <div className="bg-gray-800 bg-opacity-75 backdrop-blur rounded-2xl p-6 border border-gray-700 hover:border-purple-700 transition-colors flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-900 rounded-xl flex items-center justify-center text-2xl border border-purple-700">
                  🎓
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div>
                      <h3 className="text-white font-bold text-lg">Ingeniería en Computación e Informática</h3>
                      <p className="text-purple-400 font-medium">Universidad Católica del Norte</p>
                      <p className="text-gray-400 text-sm mt-1">Antofagasta, Chile · Memoria: automatización de pipelines ETL con Python, Databricks y Azure Data Factory.</p>
                    </div>
                    <span className="text-gray-400 text-xs whitespace-nowrap bg-gray-700 px-3 py-1.5 rounded-full self-start border border-gray-600">Mar 2021 – Dic 2024</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 bg-opacity-75 backdrop-blur rounded-2xl p-6 border border-gray-700 hover:border-purple-700 transition-colors flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center text-2xl border border-blue-700">
                  📜
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div>
                      <h3 className="text-white font-bold text-lg">Full Stack JavaScript Developer | Data Analysis con Python</h3>
                      <p className="text-purple-400 font-medium">Desafío Latam</p>
                      <p className="text-gray-400 text-sm mt-1">Chile · Full Stack: JavaScript, React.js, Node.js. Data Analysis: Python, Pandas, NumPy, visualización estadística.</p>
                    </div>
                    <span className="text-gray-400 text-xs whitespace-nowrap bg-gray-700 px-3 py-1.5 rounded-full self-start border border-gray-600">2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACTO ── */}
        <section id="contacto" className="py-24 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <SectionTitle>Contacto</SectionTitle>
            <p className="text-gray-400 mb-10">¿Tienes un proyecto o una oportunidad? ¡Conversemos!</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: '✉️', label: 'pablo.cerdaisas@gmail.com', href: 'mailto:pablo.cerdaisas@gmail.com' },
                { icon: '📞', label: '+56 9 5522 7000', href: 'tel:+56955227000' },
                { icon: '💼', label: 'LinkedIn', href: 'https://www.linkedin.com/in/pablo-alejandro-cerda-isasmendi-5713892a0/' },
                { icon: <SiGithub />, label: 'github.com/Yuzo-man', href: 'https://github.com/Yuzo-man' },
              ].map(({ icon, label, href }) => (
                <a key={href} href={href} target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 rounded-xl p-4 transition-colors border border-gray-700 hover:border-purple-700">
                  <span className="text-purple-400 text-xl flex-shrink-0">{icon}</span>
                  <span className="text-gray-200 text-sm truncate">{label}</span>
                </a>
              ))}
            </div>
            <a href="mailto:pablo.cerdaisas@gmail.com"
              className="inline-block bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white px-12 py-4 rounded-full font-semibold transition-all duration-200 shadow-lg shadow-purple-900/50 text-lg">
              Enviar mensaje
            </a>
          </div>
        </section>

        <footer className="bg-gray-900 text-gray-600 py-6 text-center text-sm border-t border-gray-800">
          <p>&copy; 2025 Pablo Cerda Isasmendi. Todos los derechos reservados.</p>
        </footer>
      </div>
    </div>
  );
};

const SectionTitle = ({ children }) => (
  <h2 className="text-3xl font-bold text-center mb-12 text-white relative">
    <span className="relative">
      {children}
      <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></span>
    </span>
  </h2>
);

export default App;
