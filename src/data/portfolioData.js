export const portfolioData = {
  personal: {
    name: "Gaston Deliyañis",
    shortName: "Gaston.Dev",
    tagline: "Desarrollador de Aplicaciones Móviles con IA",
    location: "Berisso, Buenos Aires, Argentina",
    institution: "CFL 404",
    statusBadge: "Cursando en CFL 404 • Berisso",
    bio: "Especializado en la creación de aplicaciones móviles inteligentes, integrando modelos de lenguaje de vanguardia como Gemini y ChatGPT para resolver problemas cotidianos con interfaces oscuras modernas y de alto impacto.",
    contactEmail: "gastondeliyanis@example.com",
    whatsappNumber: "5492210000000", // Editable
    whatsappDisplay: "+54 9 221 (Berisso)",
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
    stats: [
      { value: "IA + Mobile", label: "Enfoque Técnico" },
      { value: "CFL 404", label: "Centro de Formación" },
      { value: "100%", label: "Dedicación y Pasión" },
    ]
  },

  skills: {
    hard: [
      {
        name: "Google Gemini AI",
        category: "Inteligencia Artificial",
        level: "Avanzado",
        description: "Integración de modelos multimodales, prompts estructurados y flujos de análisis de datos.",
        icon: "Bot",
        color: "text-neonCyan",
        borderColor: "border-neonCyan/40",
        badgeBg: "bg-neonCyan/10 text-neonCyan"
      },
      {
        name: "ChatGPT & OpenAI API",
        category: "Inteligencia Artificial",
        level: "Avanzado",
        description: "Automatización de respuestas, agentes conversacionales y desarrollo asistido por IA.",
        icon: "Cpu",
        color: "text-neonPurple",
        borderColor: "border-neonPurple/40",
        badgeBg: "bg-neonPurple/10 text-neonPurple"
      },
      {
        name: "Desarrollo Móvil",
        category: "Arquitectura & UI/UX",
        level: "Intermedio / En formación",
        description: "Diseño de interfaces intuitivas orientadas al usuario con integración de servicios en tiempo real.",
        icon: "Smartphone",
        color: "text-neonEmerald",
        borderColor: "border-neonEmerald/40",
        badgeBg: "bg-neonEmerald/10 text-neonEmerald"
      },
      {
        name: "Paquete Office & Productividad",
        category: "Gestión de Datos",
        level: "Avanzado",
        description: "Dominio de Excel analítico, Word técnico, PowerPoint y herramientas colaborativas.",
        icon: "FileSpreadsheet",
        color: "text-blue-400",
        borderColor: "border-blue-400/40",
        badgeBg: "bg-blue-400/10 text-blue-400"
      }
    ],
    soft: [
      {
        title: "Trabajo en Equipo",
        desc: "Capacidad para colaborar proactivamente, escuchar perspectivas diversas y aportar al objetivo común.",
        icon: "Users"
      },
      {
        title: "Capacidad de Adaptación",
        desc: "Rápida asimilación ante nuevas tecnologías, entornos cambiantes y metodologías ágiles de trabajo.",
        icon: "RefreshCw"
      },
      {
        title: "Organización y Metodología",
        desc: "Planificación estructurada de tiempos, entregas puntuales y orden riguroso en el código.",
        icon: "CheckCircle2"
      },
      {
        title: "Comprensión de Texto y Requisitos",
        desc: "Habilidad para desglosar especificaciones complejas y transformarlas en soluciones de software claras.",
        icon: "BookOpen"
      },
      {
        title: "Desarrollo y Creación de Ideas",
        desc: "Pensamiento crítico, creatividad e iniciativa constante para diseñar soluciones innovadoras con IA.",
        icon: "Lightbulb"
      }
    ]
  },

  projects: [
    {
      id: "neuroprompt",
      title: "NeuroPrompt AI Assistant",
      subtitle: "Asistente Móvil Inteligente con Gemini & ChatGPT",
      category: "Mobile AI",
      year: "2026",
      tag: "Gemini Pro",
      description: "Aplicación móvil interactiva con capacidades de voz e IA generativa que asiste al usuario en consultas diarias, generación de resúmenes y automatización de notas.",
      tech: ["Gemini API", "React Native", "Tailwind", "Node.js"],
      accentColor: "#00f2fe",
      screenColor: "#00f2fe",
      demoScreen: {
        appName: "NeuroPrompt v2.4",
        screenTitle: "Asistente Activo",
        metrics: "+140 Prompts",
        statSubtitle: "99.4% precisión de respuesta",
        actionBtn: "ANALIZAR VOZ"
      }
    },
    {
      id: "visionscan",
      title: "VisionScan Document AI",
      subtitle: "Escaneo Visual & Procesamiento Semántico Móvil",
      category: "Computer Vision",
      year: "2026",
      tag: "Vision IA",
      description: "Herramienta móvil para digitalizar documentos y fotografías, extrayendo tablas a formato Excel y generando resúmenes automáticos usando modelos multimodales.",
      tech: ["ChatGPT-4o", "Computer Vision", "Office Export", "REST API"],
      accentColor: "#a855f7",
      screenColor: "#a855f7",
      demoScreen: {
        appName: "VisionScan Pro",
        screenTitle: "Lector Multimodal",
        metrics: "85 Docs Procesados",
        statSubtitle: "Exportación directa a Office",
        actionBtn: "ESCANEAR DOC"
      }
    },
    {
      id: "flowtask",
      title: "FlowTask AI Manager",
      subtitle: "Gestión Ágil de Proyectos y Productividad",
      category: "Productividad",
      year: "2026",
      tag: "Productividad",
      description: "App móvil diseñada para equipos de trabajo que clasifica tareas por prioridad con IA predictiva, facilitando la toma de decisiones y organización de metas.",
      tech: ["Mobile App", "ChatGPT API", "Analytics", "Dark UI"],
      accentColor: "#10b981",
      screenColor: "#10b981",
      demoScreen: {
        appName: "FlowTask Mobile",
        screenTitle: "Tablero Inteligente",
        metrics: "24 Tareas Al Día",
        statSubtitle: "+35% eficiencia de equipo",
        actionBtn: "CREAR TAREA IA"
      }
    }
  ],

  formation: [
    {
      period: "2025 - Presente",
      title: "Desarrollo de Aplicaciones Móviles con IA",
      institution: "Centro de Formación Laboral 404 (CFL 404)",
      location: "Berisso, Buenos Aires",
      description: "Programa intensivo enfocado en arquitectura de software móvil, desarrollo de interfaces interactivas, integración de APIs de Inteligencia Artificial (ChatGPT, Gemini) y metodologías ágiles de trabajo en equipo.",
      current: true,
      tag: "En curso"
    },
    {
      period: "Formación Continua",
      title: "Prompt Engineering & Soluciones de IA",
      institution: "Especialización Autodidacta & Laboratorios Prácticos",
      location: "Buenos Aires, Argentina",
      description: "Capacitación continua en orquestación de prompts para desarrollo, depuración de código mediante IA y automatización de tareas con herramientas de oficina.",
      current: false,
      tag: "Especialización"
    }
  ]
};
