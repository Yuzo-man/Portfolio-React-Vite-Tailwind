import React from "react";
import Navbar from './components/Navbar';
import ButtonGradient from "./assets/svg/ButtonGradient";
import backgroundSM from "./assets/background/sobre-mi.jpg";
import backgroundEst from "./assets/background/estudios2.jpg";

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React.js", "Angular", "TypeScript", "JavaScript ES6+", "Vue.js", "Next.js", "Redux", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Python", "Django", "DRF", "Java Spring Boot", "PHP Laravel", "Node.js", "NestJS", "API REST", "JWT", "OAuth2", "Microservicios"],
  },
  {
    category: "Bases de Datos",
    skills: ["PostgreSQL", "MySQL", "SQLite", "Databricks"],
  },
  {
    category: "Cloud / AWS",
    skills: ["AWS S3", "AWS Lambda", "Azure Data Factory", "Azure Databricks", "Power BI", "Pandas", "NumPy"],
  },
  {
    category: "DevOps / CI-CD",
    skills: ["Git", "GitHub", "Azure DevOps", "Git Flow", "Docker", "Postman", "Swagger", "CI/CD pipelines"],
  },
  {
    category: "Herramientas",
    skills: ["Salesforce", "ServiceNow", "Google Tag Manager", "Android Studio", "Kotlin", "Odoo", "Shopify"],
  },
];

const experiences = [
  {
    role: "Desarrollador Full Stack Semi Senior",
    company: "Care Assistance",
    location: "Santiago, Chile",
    period: "Ago 2025 – Mar 2026",
    bullets: [
      "Corregí +20 errores críticos en la plataforma web del sector salud, asegurando estabilidad y continuidad operacional en producción.",
      "Implementé +10 nuevas funcionalidades end-to-end con React.js, TypeScript, Redux y microservicios Python, incluyendo integración con AWS S3 y Lambda para conexión con APIs externas.",
      "Integré 5+ plataformas externas vía APIs REST (OAuth 2, webhooks) documentadas con Postman y Swagger. Administré Salesforce, implementé Google Tag Manager y desarrollé app Android nativa con Kotlin.",
      "Trabajé con Next.js (App Router, SSR) para páginas con datos en tiempo real usando Redux y Trunks para manejo de estado.",
    ],
  },
  {
    role: "Soporte Técnico Nivel 1",
    company: "Coasin Logicalis",
    location: "Antofagasta, Chile",
    period: "Jun 2025 – Ago 2025",
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
    bullets: [
      "Creé plataforma end-to-end para gestión y control ISO 9001 con Django, React.js y PostgreSQL, optimizando el proceso en un 98% respecto al manejo previo en Google Drive.",
      "Realicé levantamiento de requerimientos, diseño de arquitectura y documentación técnica completa de usuario y sistema.",
    ],
  },
];

const projects = [
  {
    title: "Plataforma Web Sector Salud",
    company: "Care Assistance",
    tech: ["React.js", "TypeScript", "Redux", "Next.js", "Python", "AWS S3", "AWS Lambda", "Salesforce"],
    description:
      "Corrección de +20 errores críticos e implementación de +10 funcionalidades en plataforma del sector salud. Integración con AWS S3, Lambda, Salesforce y 5+ APIs externas con OAuth2 y webhooks.",
    highlight: "+10 funcionalidades implementadas",
  },
  {
    title: "Automatización ETL & Dashboard KPI",
    company: "Minera Zaldívar",
    tech: ["Python", "Databricks", "Azure Data Factory", "Power BI"],
    description:
      "Pipelines ETL automatizados para consolidación de datos desde múltiples plataformas mineras, con dashboards KPI en Power BI. Eliminó el proceso manual de consolidación en Excel.",
    highlight: "~80% reducción en tiempo de datos",
  },
  {
    title: "Plataforma de Gestión ISO 9001",
    company: "Sociedad Fuelles Limitada",
    tech: ["Django", "React.js", "PostgreSQL"],
    description:
      "Plataforma end-to-end para gestión y control de calidad ISO 9001, reemplazando completamente el flujo previo en Google Drive con una solución robusta y documentada.",
    highlight: "98% optimización del proceso",
  },
];

const App = () => {
  return (
    <div className="relative min-h-screen text-white scroll-smooth">
      <div className="fixed inset-0 w-full h-full bg-gray-900 z-0"></div>
      <ButtonGradient />

      <div className="relative z-10">
        <Navbar />

        {/* ── HERO ── */}
        <section id="inicio" className="min-h-screen flex flex-col justify-center items-center px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900"></div>
          <div className="relative z-10 max-w-3xl w-full">
            <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Disponible para nuevas oportunidades
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white leading-tight">
              Pablo Cerda Isasmendi
            </h1>
            <p className="text-2xl text-gray-300 mb-2">Desarrollador Full Stack</p>
            <p className="text-gray-400 mb-10">
              Ingeniero en Computación e Informática &middot; Santiago, Chile &middot; Inglés C1
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <a
                href="mailto:pablo.cerdaisas@gmail.com"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Contactar
              </a>
              <a
                href="https://github.com/Yuzo-man"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-500 hover:border-purple-400 text-gray-300 hover:text-purple-400 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/pablo-cerda-isasmendi"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-500 hover:border-purple-400 text-gray-300 hover:text-purple-400 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                LinkedIn
              </a>
            </div>

            {/* Logros rápidos */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gray-800 bg-opacity-80 backdrop-blur rounded-2xl p-5 border border-gray-700">
                <p className="text-3xl font-bold text-purple-400">+20</p>
                <p className="text-sm text-gray-400 mt-1">Bugs críticos resueltos en producción</p>
              </div>
              <div className="bg-gray-800 bg-opacity-80 backdrop-blur rounded-2xl p-5 border border-gray-700">
                <p className="text-3xl font-bold text-purple-400">98%</p>
                <p className="text-sm text-gray-400 mt-1">Optimización de procesos ISO 9001</p>
              </div>
              <div className="bg-gray-800 bg-opacity-80 backdrop-blur rounded-2xl p-5 border border-gray-700">
                <p className="text-3xl font-bold text-purple-400">~80%</p>
                <p className="text-sm text-gray-400 mt-1">Reducción de tiempo en ETL minería</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── SOBRE MÍ ── */}
        <section id="sobre-mi" className="relative py-20 px-6">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: `url(${backgroundSM})` }}
          ></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Sobre mí</h2>
            <div className="bg-gray-800 bg-opacity-75 backdrop-blur-lg rounded-3xl p-8 border border-gray-700">
              <p className="text-gray-200 text-lg leading-relaxed text-justify">
                Soy Desarrollador Full Stack e Ingeniero en Computación e Informática (UCN, 2024) con más de 1 año de
                experiencia diseñando, codificando, probando y manteniendo aplicaciones web en entornos productivos
                reales.
              </p>
              <p className="text-gray-200 text-lg leading-relaxed text-justify mt-4">
                Me especializo en{" "}
                <span className="text-purple-400 font-semibold">
                  React.js, TypeScript, Python/Django y Node.js
                </span>
                , con conocimiento en Java Spring Boot y PHP Laravel. Tengo experiencia en microservicios, APIs
                RESTful, JWT/OAuth2, AWS y en el sector salud (Care Assistance).
              </p>
              <p className="text-gray-200 text-lg leading-relaxed text-justify mt-4">
                Cuento con{" "}
                <span className="text-purple-400 font-semibold">Inglés avanzado (C1)</span> y estoy
                comprometido con la calidad de código, buenas prácticas y el trabajo colaborativo en equipo.
              </p>
              <div className="mt-6 flex flex-wrap gap-5 text-sm text-gray-400">
                <span>📍 Santiago, Chile</span>
                <a href="mailto:pablo.cerdaisas@gmail.com" className="hover:text-purple-400 transition-colors">
                  ✉️ pablo.cerdaisas@gmail.com
                </a>
                <a href="tel:+56955227000" className="hover:text-purple-400 transition-colors">
                  📞 +56 9 5522 7000
                </a>
                <span>🌐 Inglés C1</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── HABILIDADES ── */}
        <section id="habilidades" className="py-20 px-6 bg-gray-800 bg-opacity-40">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Habilidades Técnicas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {skillCategories.map((cat) => (
                <div
                  key={cat.category}
                  className="bg-gray-800 bg-opacity-70 backdrop-blur rounded-2xl p-6 border border-gray-700"
                >
                  <h3 className="text-purple-400 font-semibold text-xs uppercase tracking-widest mb-4">
                    {cat.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-gray-700 hover:bg-purple-700 text-gray-200 text-sm px-3 py-1 rounded-full transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EXPERIENCIA ── */}
        <section id="experiencia" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Experiencia Profesional</h2>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-purple-800 hidden md:block"></div>
              <div className="space-y-6">
                {experiences.map((exp, i) => (
                  <div key={i} className="relative md:pl-12">
                    <div className="absolute left-2 top-7 w-4 h-4 bg-purple-500 rounded-full border-2 border-gray-900 hidden md:block"></div>
                    <div className="bg-gray-800 bg-opacity-70 backdrop-blur rounded-2xl p-6 border border-gray-700">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                        <div>
                          <h3 className="text-white font-bold text-lg">{exp.role}</h3>
                          <p className="text-purple-400 font-medium">{exp.company}</p>
                          <p className="text-gray-500 text-sm">{exp.location}</p>
                        </div>
                        <span className="text-gray-400 text-sm whitespace-nowrap bg-gray-700 px-3 py-1 rounded-full self-start">
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

        {/* ── PROYECTOS ── */}
        <section id="proyectos" className="py-20 px-6 bg-gray-800 bg-opacity-40">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Proyectos Destacados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((proj, i) => (
                <div
                  key={i}
                  className="bg-gray-800 bg-opacity-70 backdrop-blur rounded-2xl p-6 border border-gray-700 flex flex-col"
                >
                  <p className="text-purple-400 text-xs font-semibold uppercase tracking-wider mb-2">
                    {proj.company}
                  </p>
                  <h3 className="text-white font-bold text-lg mb-3">{proj.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed flex-grow">{proj.description}</p>
                  <div className="mt-4 mb-4 bg-gray-900 bg-opacity-60 rounded-lg px-3 py-2">
                    <span className="text-green-400 text-sm font-semibold">✓ {proj.highlight}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {proj.tech.map((t) => (
                      <span key={t} className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EDUCACIÓN ── */}
        <section id="educacion" className="relative py-20 px-6">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: `url(${backgroundEst})` }}
          ></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Educación y Certificaciones</h2>
            <div className="space-y-5">
              <div className="bg-gray-800 bg-opacity-75 backdrop-blur rounded-2xl p-6 border border-gray-700">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div>
                    <h3 className="text-white font-bold text-lg">Ingeniería en Computación e Informática</h3>
                    <p className="text-purple-400 font-medium">Universidad Católica del Norte</p>
                    <p className="text-gray-400 text-sm mt-1">
                      Antofagasta, Chile · Memoria: automatización de pipelines ETL con Python, Databricks y Azure
                      Data Factory.
                    </p>
                  </div>
                  <span className="text-gray-400 text-sm whitespace-nowrap bg-gray-700 px-3 py-1 rounded-full self-start">
                    Mar 2021 – Dic 2024
                  </span>
                </div>
              </div>
              <div className="bg-gray-800 bg-opacity-75 backdrop-blur rounded-2xl p-6 border border-gray-700">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div>
                    <h3 className="text-white font-bold text-lg">
                      Full Stack JavaScript Developer | Data Analysis con Python
                    </h3>
                    <p className="text-purple-400 font-medium">Desafío Latam</p>
                    <p className="text-gray-400 text-sm mt-1">
                      Chile · Full Stack: JavaScript, React.js, Node.js. Data Analysis: Python, Pandas, NumPy,
                      visualización estadística.
                    </p>
                  </div>
                  <span className="text-gray-400 text-sm whitespace-nowrap bg-gray-700 px-3 py-1 rounded-full self-start">
                    2025
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACTO ── */}
        <section id="contacto" className="py-20 px-6 bg-gray-800 bg-opacity-40">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Contacto</h2>
            <p className="text-gray-400 mb-10">¿Tienes un proyecto o una oportunidad? ¡Conversemos!</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <a
                href="mailto:pablo.cerdaisas@gmail.com"
                className="flex items-center justify-center gap-3 bg-gray-700 hover:bg-gray-600 rounded-xl p-4 transition-colors"
              >
                <span className="text-purple-400 text-xl">✉️</span>
                <span className="text-gray-200 text-sm">pablo.cerdaisas@gmail.com</span>
              </a>
              <a
                href="tel:+56955227000"
                className="flex items-center justify-center gap-3 bg-gray-700 hover:bg-gray-600 rounded-xl p-4 transition-colors"
              >
                <span className="text-purple-400 text-xl">📞</span>
                <span className="text-gray-200 text-sm">+56 9 5522 7000</span>
              </a>
              <a
                href="https://linkedin.com/in/pablo-cerda-isasmendi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-gray-700 hover:bg-gray-600 rounded-xl p-4 transition-colors"
              >
                <span className="text-purple-400 text-xl">💼</span>
                <span className="text-gray-200 text-sm">linkedin.com/in/pablo-cerda-isasmendi</span>
              </a>
              <a
                href="https://github.com/Yuzo-man"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-gray-700 hover:bg-gray-600 rounded-xl p-4 transition-colors"
              >
                <span className="text-purple-400 text-xl">🐙</span>
                <span className="text-gray-200 text-sm">github.com/Yuzo-man</span>
              </a>
            </div>
            <a
              href="mailto:pablo.cerdaisas@gmail.com"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 rounded-xl font-semibold transition-colors text-lg"
            >
              Enviar mensaje
            </a>
          </div>
        </section>

        <footer className="bg-gray-900 text-gray-500 py-6 text-center text-sm border-t border-gray-800">
          <p>&copy; 2025 Pablo Cerda Isasmendi. Todos los derechos reservados.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
