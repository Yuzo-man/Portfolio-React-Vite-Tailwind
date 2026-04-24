export const translations = {
  es: {
    nav: {
      inicio: 'Inicio', sobreMi: 'Sobre mí', habilidades: 'Habilidades',
      experiencia: 'Experiencia', proyectos: 'Proyectos',
      proyectosPersonales: 'Proyectos Personales', educacion: 'Educación',
      contacto: 'Contacto', contactar: 'Contactar',
    },
    hero: {
      badge: 'Disponible para nuevas oportunidades',
      title: 'Desarrollador Full Stack',
      subtitle: 'Ingeniero en Computación e Informática · Santiago, Chile · Inglés C1',
      stats: [
        { value: '+10',  label: 'Funcionalidades entregadas en producción' },
        { value: '98%',  label: 'Optimización de procesos ISO 9001' },
        { value: '~80%', label: 'Reducción de tiempo en ETL minería' },
      ],
    },
    about: {
      title: 'Sobre mí',
      p1: 'Soy Desarrollador Full Stack e Ingeniero en Computación e Informática (UCN, 2024) con más de 1 año de experiencia diseñando, codificando, probando y manteniendo aplicaciones web en entornos productivos reales.',
      p2pre: 'Me especializo en ',
      p2tech: 'React.js, TypeScript, Python/Django y Node.js',
      p2suf: ', con conocimiento en Java Spring Boot y PHP Laravel. Experiencia en microservicios, APIs RESTful, JWT/OAuth2, AWS y sector salud.',
      p3pre: 'Cuento con ',
      p3hi: 'Inglés avanzado (C1)',
      p3suf: ' y estoy comprometido con la calidad de código, buenas prácticas y el trabajo colaborativo en equipo.',
      english: 'Inglés C1',
    },
    skills: {
      title: 'Habilidades Técnicas',
      cats: { Frontend: 'Frontend', Backend: 'Backend', 'Bases de Datos': 'Bases de Datos', 'Cloud / AWS': 'Cloud / AWS', 'DevOps / CI-CD': 'DevOps / CI-CD', Herramientas: 'Herramientas' },
    },
    experience: {
      title: 'Experiencia Profesional',
      jobs: [
        {
          role: 'Desarrollador Full Stack Semi Senior',
          period: 'Ago 2025 – Mar 2026',
          bullets: [
            'Garanticé la estabilidad y continuidad operacional de la plataforma de salud en producción, resolviendo +20 incidencias críticas e implementando mejoras que elevaron la confiabilidad del sistema.',
            'Desarrollé +10 funcionalidades end-to-end con React.js, TypeScript, Redux y microservicios Python, integrando AWS S3 y Lambda para la conexión con APIs externas.',
            'Integré 5+ plataformas externas vía APIs REST (OAuth 2, webhooks) documentadas con Postman y Swagger. Administré Salesforce, implementé Google Tag Manager y desarrollé app Android nativa con Kotlin.',
            'Implementé páginas con Next.js (App Router, SSR) para visualización de datos en tiempo real desde API interna y Salesforce, usando Redux para manejo de estado.',
          ],
        },
        {
          role: 'Soporte Técnico Nivel 1',
          period: 'Jun 2025 – Ago 2025',
          bullets: [
            'Resolví 20+ tickets de soporte de software y red en ServiceNow, priorizando por SLA.',
            'Documenté causas raíz y soluciones para reducir incidencias recurrentes del equipo.',
          ],
        },
        {
          role: 'Analista de Datos (Memorista)',
          period: 'Sep 2024 – Dic 2024',
          bullets: [
            'Automaticé reporte de consolidación de datos optimizando ~80% el tiempo de recaudación desde múltiples plataformas, eliminando el proceso manual en Excel.',
            'Desarrollé pipelines ETL con Python en Databricks, automatización con Azure Data Factory y dashboards KPI en Power BI para gerencia.',
          ],
        },
        {
          role: 'Desarrollador Web Full Stack',
          period: 'Ene 2024 – Sep 2024',
          bullets: [
            'Creé plataforma end-to-end para gestión y control ISO 9001 con Django, React.js y PostgreSQL, optimizando el proceso en un 98% respecto al manejo previo en Google Drive.',
            'Realicé levantamiento de requerimientos, diseño de arquitectura y documentación técnica completa de usuario y sistema.',
          ],
        },
      ],
    },
    projects: {
      title: 'Proyectos Profesionales',
      items: [
        { title: 'Plataforma Web Sector Salud', company: 'Care Assistance', description: 'Desarrollo de +10 funcionalidades end-to-end y estabilización de plataforma del sector salud en producción. Integración con AWS S3, Lambda, Salesforce y 5+ APIs externas vía OAuth2 y webhooks.', highlight: '+10 funcionalidades entregadas en producción' },
        { title: 'Automatización ETL & Dashboard KPI', company: 'Minera Zaldívar', description: 'Pipelines ETL automatizados para consolidación de datos desde múltiples plataformas mineras, con dashboards KPI en Power BI. Eliminó el proceso manual en Excel.', highlight: '~80% reducción en tiempo de datos' },
        { title: 'Plataforma de Gestión ISO 9001', company: 'Sociedad Fuelles Limitada', description: 'Plataforma end-to-end para gestión y control de calidad ISO 9001, reemplazando el flujo previo en Google Drive con una solución robusta y documentada.', highlight: '98% optimización del proceso' },
      ],
    },
    personalProjects: {
      title: 'Proyectos Personales',
      subtitle: 'Proyectos propios desarrollados en GitHub',
      viewGithub: 'Ver en GitHub',
      personalLabel: 'Proyecto personal',
      statuses: { Completado: 'Completado', Prototipo: 'Prototipo', 'En desarrollo': 'En desarrollo' },
      items: [
        { title: 'Sistema de Digitalización ISO 9001', description: 'Plataforma web end-to-end para gestión y control de calidad ISO 9001 desarrollada para Fuelles Ltda. Autenticación, roles, módulos de documentos y reportes.' },
        { title: 'CibeSeg – Desbloqueo de Equipos', description: 'Prototipo de herramienta web para la gestión y desbloqueo de equipos de ciberseguridad. Interfaz intuitiva con panel de control y flujo de autenticación.' },
        { title: 'Gestión de Flota Vehicular', description: 'Sistema de control y administración de flota vehicular en Python. Seguimiento operacional, asignación de vehículos, reportes y dashboards de control.' },
        { title: 'Herramientas de Toma de Requerimientos', description: 'Conjunto de herramientas para sistematizar el levantamiento, documentación y gestión de requerimientos de software en proyectos de TI.' },
      ],
    },
    education: {
      title: 'Educación y Certificaciones',
      items: [
        { degree: 'Ingeniería en Computación e Informática', institution: 'Universidad Católica del Norte', location: 'Antofagasta, Chile', description: 'Memoria: automatización de pipelines ETL con Python, Databricks y Azure Data Factory.', period: 'Mar 2021 – Dic 2024', emoji: '🎓' },
        { degree: 'Full Stack JavaScript Developer | Data Analysis con Python', institution: 'Desafío Latam', location: 'Chile', description: 'Full Stack: JavaScript, React.js, Node.js. Data Analysis: Python, Pandas, NumPy, visualización estadística.', period: '2025', emoji: '📜' },
      ],
    },
    contact: {
      title: 'Contacto',
      subtitle: '¿Tienes un proyecto o una oportunidad? ¡Conversemos!',
      cta: 'Enviar mensaje',
    },
    footer: '2025 Pablo Cerda Isasmendi. Todos los derechos reservados.',
  },

  en: {
    nav: {
      inicio: 'Home', sobreMi: 'About', habilidades: 'Skills',
      experiencia: 'Experience', proyectos: 'Projects',
      proyectosPersonales: 'Personal Projects', educacion: 'Education',
      contacto: 'Contact', contactar: 'Contact',
    },
    hero: {
      badge: 'Available for new opportunities',
      title: 'Full Stack Developer',
      subtitle: 'Computer & Information Engineer · Santiago, Chile · C1 English',
      stats: [
        { value: '+10',  label: 'Features delivered in production' },
        { value: '98%',  label: 'ISO 9001 process optimization' },
        { value: '~80%', label: 'ETL time reduction in mining' },
      ],
    },
    about: {
      title: 'About Me',
      p1: 'I am a Full Stack Developer and Computer & Information Engineer (UCN, 2024) with over 1 year of experience designing, coding, testing, and maintaining web applications in real production environments.',
      p2pre: 'I specialize in ',
      p2tech: 'React.js, TypeScript, Python/Django, and Node.js',
      p2suf: ', with knowledge in Java Spring Boot and PHP Laravel. Experience with microservices, RESTful APIs, JWT/OAuth2, AWS, and the healthcare sector.',
      p3pre: 'I have ',
      p3hi: 'advanced English (C1)',
      p3suf: ' and I am committed to code quality, best practices, and collaborative teamwork.',
      english: 'C1 English',
    },
    skills: {
      title: 'Technical Skills',
      cats: { Frontend: 'Frontend', Backend: 'Backend', 'Bases de Datos': 'Databases', 'Cloud / AWS': 'Cloud / AWS', 'DevOps / CI-CD': 'DevOps / CI-CD', Herramientas: 'Tools' },
    },
    experience: {
      title: 'Professional Experience',
      jobs: [
        {
          role: 'Semi Senior Full Stack Developer',
          period: 'Aug 2025 – Mar 2026',
          bullets: [
            'Ensured stability and operational continuity of the healthcare platform in production, resolving +20 critical incidents and implementing improvements that increased system reliability.',
            'Developed +10 end-to-end features with React.js, TypeScript, Redux, and Python microservices, integrating AWS S3 and Lambda for external API connections.',
            'Integrated 5+ external platforms via REST APIs (OAuth 2, webhooks) documented with Postman and Swagger. Managed Salesforce, implemented Google Tag Manager, and developed a native Android app with Kotlin.',
            'Built pages with Next.js (App Router, SSR) for real-time data visualization from internal API and Salesforce, using Redux for state management.',
          ],
        },
        {
          role: 'Level 1 Technical Support',
          period: 'Jun 2025 – Aug 2025',
          bullets: [
            'Resolved 20+ software and network support tickets in ServiceNow, prioritizing by SLA.',
            'Documented root causes and solutions to reduce recurring incidents for the team.',
          ],
        },
        {
          role: 'Data Analyst (Thesis)',
          period: 'Sep 2024 – Dec 2024',
          bullets: [
            'Automated data consolidation reports, optimizing ~80% of data collection time from multiple platforms and eliminating manual Excel processing.',
            'Developed ETL pipelines with Python on Databricks, automation with Azure Data Factory, and KPI dashboards in Power BI for management.',
          ],
        },
        {
          role: 'Full Stack Web Developer',
          period: 'Jan 2024 – Sep 2024',
          bullets: [
            'Created an end-to-end ISO 9001 quality management platform with Django, React.js, and PostgreSQL, optimizing the process by 98% compared to the previous Google Drive workflow.',
            'Conducted requirements gathering, architecture design, and complete technical documentation for users and the system.',
          ],
        },
      ],
    },
    projects: {
      title: 'Professional Projects',
      items: [
        { title: 'Healthcare Web Platform', company: 'Care Assistance', description: 'Development of +10 end-to-end features and stabilization of the healthcare platform in production. Integration with AWS S3, Lambda, Salesforce, and 5+ external APIs via OAuth2 and webhooks.', highlight: '+10 features delivered in production' },
        { title: 'ETL Automation & KPI Dashboard', company: 'Minera Zaldívar', description: 'Automated ETL pipelines for data consolidation from multiple mining platforms, with KPI dashboards in Power BI. Eliminated manual Excel consolidation process.', highlight: '~80% reduction in data processing time' },
        { title: 'ISO 9001 Management Platform', company: 'Sociedad Fuelles Limitada', description: 'End-to-end platform for ISO 9001 quality management, completely replacing the previous Google Drive workflow with a robust and well-documented solution.', highlight: '98% process optimization' },
      ],
    },
    personalProjects: {
      title: 'Personal Projects',
      subtitle: 'Personal projects developed on GitHub',
      viewGithub: 'View on GitHub',
      personalLabel: 'Personal project',
      statuses: { Completado: 'Completed', Prototipo: 'Prototype', 'En desarrollo': 'In progress' },
      items: [
        { title: 'ISO 9001 Digitalization System', description: 'End-to-end web platform for ISO 9001 quality management developed for Fuelles Ltd. Authentication, roles, document modules, and reports.' },
        { title: 'CibeSeg – Equipment Unlocking', description: 'Prototype web tool for the management and unlocking of cybersecurity equipment. Intuitive interface with control panel and authentication flow.' },
        { title: 'Fleet Management Platform', description: 'Vehicle fleet control and management system in Python. Operational tracking, vehicle assignment, reports, and control dashboards.' },
        { title: 'Requirements Gathering Tools', description: 'Set of tools for systematizing the gathering, documentation, and management of software requirements in IT projects.' },
      ],
    },
    education: {
      title: 'Education & Certifications',
      items: [
        { degree: 'Computer & Information Engineering', institution: 'Universidad Católica del Norte', location: 'Antofagasta, Chile', description: 'Thesis: automation of ETL pipelines with Python, Databricks, and Azure Data Factory.', period: 'Mar 2021 – Dec 2024', emoji: '🎓' },
        { degree: 'Full Stack JavaScript Developer | Data Analysis with Python', institution: 'Desafío Latam', location: 'Chile', description: 'Full Stack: JavaScript, React.js, Node.js. Data Analysis: Python, Pandas, NumPy, statistical visualization.', period: '2025', emoji: '📜' },
      ],
    },
    contact: {
      title: 'Contact',
      subtitle: 'Do you have a project or an opportunity? Let\'s talk!',
      cta: 'Send message',
    },
    footer: '2025 Pablo Cerda Isasmendi. All rights reserved.',
  },
};
