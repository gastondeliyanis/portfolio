import React, { useState } from 'react';
import {
  GraduationCap,
  Award,
  MapPin,
  Calendar,
  CheckCircle,
  BookOpen,
  FileText,
  X,
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ExperienceEducation() {
  const { formation } = portfolioData;
  const [showCurriculumModal, setShowCurriculumModal] = useState(false);

  const cflCurriculum = [
    {
      module: "Módulo 1: Fundamentos & Arquitectura Móvil",
      topics: "Estructura de aplicaciones, componentes reactivos, ciclo de vida, estado global y navegación fluida."
    },
    {
      module: "Módulo 2: Integración de Modelos de IA",
      topics: "Conexión con Google Gemini API y OpenAI ChatGPT, streaming de respuestas, prompts estructurados y tokens."
    },
    {
      module: "Módulo 3: UI/UX Modo Oscuro & Rendimiento",
      topics: "Diseño de Dark UI de alto impacto, ergonomía visual, consumo de batería en OLED y optimización de carga."
    },
    {
      module: "Módulo 4: Trabajo en Equipo & Metodologías Ágiles",
      topics: "Control de versiones con Git, sprints colaborativos, resolución de conflictos y entregas estructuradas."
    }
  ];

  return (
    <section id="formacion" className="py-24 relative border-t border-zinc-800/60 bg-darkBg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Context & Overview */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 font-mono text-xs uppercase tracking-widest text-neonCyan px-3.5 py-1.5 rounded-full bg-neonCyan/10 border border-neonCyan/30">
              <GraduationCap className="w-3.5 h-3.5 text-neonCyan" />
              <span>Trayectoria & Educación</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Formación en <span className="text-neonCyan glow-text-cyan">CFL 404</span> & Especialización
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              En constante capacitación profesional en el Centro de Formación Laboral 404 de Berisso, adquiriendo competencias avanzadas para la creación de soluciones móviles impulsadas por inteligencia artificial de última generación.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setShowCurriculumModal(true)}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold text-black bg-gradient-to-r from-neonCyan to-teal-400 hover:shadow-neon-cyan transition-all hover:scale-105"
              >
                <BookOpen className="w-4 h-4" />
                <span>Ver Plan de Formación CFL 404</span>
              </button>

              <a
                href="#contacto"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold text-zinc-300 glass-panel hover:text-white hover:border-neonPurple/50 transition-all"
              >
                <span>Hablemos de Oportunidades</span>
              </a>
            </div>
          </div>

          {/* Right Column: Timeline Cards */}
          <div className="lg:col-span-7 space-y-6">
            {formation.map((item, idx) => (
              <div
                key={item.title}
                className="gradient-border p-6 relative group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-neonCyan transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-xs text-neonEmerald bg-neonEmerald/10 px-3 py-1 rounded-full border border-neonEmerald/30">
                      {item.tag}
                    </span>
                    <span className="font-mono text-xs text-zinc-400 bg-zinc-900 px-2.5 py-1 rounded-full border border-zinc-800">
                      {item.period}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400 mb-3">
                  <span className="text-neonPurple font-semibold">{item.institution}</span>
                  <span>•</span>
                  <span className="flex items-center space-x-1 text-zinc-500">
                    <MapPin className="w-3 h-3 text-neonEmerald" />
                    <span>{item.location}</span>
                  </span>
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  {item.description}
                </p>

                {item.current && (
                  <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono">
                    <span className="text-neonEmerald flex items-center space-x-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Cursado Activo en Berisso</span>
                    </span>
                    <button
                      onClick={() => setShowCurriculumModal(true)}
                      className="text-neonCyan hover:underline flex items-center space-x-1"
                    >
                      <span>Ver temario</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CFL 404 Curriculum Modal */}
      {showCurriculumModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-darkCard border border-zinc-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh] gradient-border">
            <button
              onClick={() => setShowCurriculumModal(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-zinc-800/80 text-zinc-400 hover:text-white flex items-center justify-center border border-zinc-700 transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center space-x-2 font-mono text-xs uppercase tracking-widest text-neonEmerald px-3 py-1 rounded-full bg-neonEmerald/10 border border-neonEmerald/30 mb-2">
                  <span>Programa Oficial</span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Centro de Formación Laboral 404 (Berisso)
                </h3>
                <p className="text-sm font-mono text-neonCyan mt-1">
                  Desarrollo de Aplicaciones Móviles con Inteligencia Artificial
                </p>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed">
                Formación orientada a capacitar desarrolladores en la creación de aplicaciones modernas, resolviendo problemas reales a través de modelos de lenguaje, interfaces reactivas y trabajo en equipo.
              </p>

              <div className="space-y-3">
                <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-400 font-bold">
                  Módulos y Competencias Adquiridas
                </h4>
                <div className="space-y-2.5">
                  {cflCurriculum.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs font-mono"
                    >
                      <h5 className="font-bold text-white mb-1 flex items-center space-x-2">
                        <CheckCircle className="w-3.5 h-3.5 text-neonEmerald" />
                        <span>{m.module}</span>
                      </h5>
                      <p className="text-zinc-400 font-sans text-xs pl-5">
                        {m.topics}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex justify-end">
                <button
                  onClick={() => setShowCurriculumModal(false)}
                  className="px-6 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold text-black bg-gradient-to-r from-neonCyan to-teal-400 hover:shadow-neon-cyan transition-all"
                >
                  Entendido
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
