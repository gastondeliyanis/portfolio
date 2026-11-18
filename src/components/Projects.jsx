import React, { useState } from 'react';
import {
  Smartphone,
  Sparkles,
  Bot,
  Eye,
  CheckCircle2,
  X,
  ExternalLink,
  Code2,
  Cpu,
  Layers,
  ArrowRight
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects({ onSelectProject, onShowToast }) {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [selectedModalProject, setSelectedModalProject] = useState(null);

  const categories = ['Todos', 'Gemini AI', 'ChatGPT', 'Productividad'];

  const filteredProjects = activeFilter === 'Todos'
    ? projects
    : projects.filter((p) => {
        if (activeFilter === 'Gemini AI') return p.tag.includes('Gemini') || p.tech.some(t => t.includes('Gemini'));
        if (activeFilter === 'ChatGPT') return p.tag.includes('Vision') || p.tech.some(t => t.includes('ChatGPT'));
        if (activeFilter === 'Productividad') return p.category === 'Productividad' || p.tech.some(t => t.includes('Office'));
        return true;
      });

  const handlePreviewInPhone = (index, title) => {
    onSelectProject(index);
    if (onShowToast) {
      onShowToast('Cargado en Celular 3D', `La aplicación "${title}" se está proyectando en el celular 3D.`);
    }
    const heroEl = document.getElementById('inicio');
    if (heroEl) {
      heroEl.scrollIntoView({ behavior: 'smooth' });
    }
    if (selectedModalProject) {
      setSelectedModalProject(null);
    }
  };

  return (
    <section id="proyectos" className="py-24 relative border-t border-zinc-800/60 bg-darkBg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 font-mono text-xs uppercase tracking-widest text-neonPurple px-3.5 py-1.5 rounded-full bg-neonPurple/10 border border-neonPurple/30">
            <Sparkles className="w-3.5 h-3.5 text-neonPurple" />
            <span>Casos Prácticos & Desarrollo Móvil</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Proyectos con <span className="text-neonCyan glow-text-cyan">Inteligencia Artificial</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Aplicaciones desarrolladas con enfoque en rendimiento, interfaces oscuras y asistentes inteligentes integrados con modelos de lenguaje y visión computacional.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-zinc-100 text-black font-bold shadow-neon-cyan'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => {
            const originalIndex = projects.findIndex((p) => p.id === project.id);
            return (
              <div
                key={project.id}
                className="gradient-border p-6 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300 bg-darkCard/80 backdrop-blur-sm"
              >
                <div>
                  {/* Visual Thumbnail Card */}
                  <div
                    onClick={() => setSelectedModalProject(project)}
                    className="relative h-48 rounded-xl overflow-hidden mb-6 bg-zinc-900/90 border border-zinc-800 flex flex-col items-center justify-center p-6 text-center cursor-pointer group-hover:border-zinc-700 transition-all"
                  >
                    <div
                      className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity"
                      style={{
                        background: `radial-gradient(circle at center, ${project.accentColor}, transparent 70%)`
                      }}
                    />

                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 shadow-lg transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${project.accentColor}20`,
                        border: `1px solid ${project.accentColor}60`,
                        color: project.accentColor
                      }}
                    >
                      {project.id === 'neuroprompt' && <Bot className="w-7 h-7" />}
                      {project.id === 'visionscan' && <Eye className="w-7 h-7" />}
                      {project.id === 'flowtask' && <CheckCircle2 className="w-7 h-7" />}
                    </div>

                    <span
                      className="font-mono text-xs font-bold"
                      style={{ color: project.accentColor }}
                    >
                      {project.category}
                    </span>

                    <span className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-black/80 text-zinc-300 border border-zinc-700">
                      {project.year}
                    </span>

                    <div className="absolute bottom-2 text-[10px] font-mono text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity flex items-center space-x-1">
                      <span>Click para ver caso de estudio</span>
                      <ArrowRight className="w-3 h-3 text-neonCyan" />
                    </div>
                  </div>

                  {/* Project Title & Description */}
                  <h3
                    onClick={() => setSelectedModalProject(project)}
                    className="text-xl font-bold mb-2 text-white group-hover:text-neonCyan transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-2 mb-6 font-mono text-[11px]">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-300 border border-zinc-800 hover:border-zinc-700 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-zinc-800/80">
                    <button
                      onClick={() => handlePreviewInPhone(originalIndex, project.title)}
                      className="text-xs font-mono font-semibold flex items-center space-x-1.5 transition-colors group-hover:translate-x-1 duration-200"
                      style={{ color: project.accentColor }}
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                      <span>Ver en Celular 3D</span>
                    </button>

                    <button
                      onClick={() => setSelectedModalProject(project)}
                      className="text-[11px] font-mono text-zinc-400 hover:text-white transition-colors underline-offset-4 hover:underline"
                    >
                      Detalles
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-darkCard border border-zinc-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh] gradient-border">
            {/* Close Button */}
            <button
              onClick={() => setSelectedModalProject(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-zinc-800/80 text-zinc-400 hover:text-white flex items-center justify-center border border-zinc-700 transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-6">
              {/* Modal Header */}
              <div>
                <span
                  className="font-mono text-xs font-bold uppercase tracking-wider"
                  style={{ color: selectedModalProject.accentColor }}
                >
                  {selectedModalProject.category} • {selectedModalProject.year}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {selectedModalProject.title}
                </h3>
                <p className="text-sm font-mono text-zinc-400 mt-1">
                  {selectedModalProject.subtitle}
                </p>
              </div>

              {/* Description */}
              <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <h4 className="font-mono text-xs uppercase tracking-wider text-neonCyan mb-2 font-bold">
                  Objetivo del Proyecto
                </h4>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {selectedModalProject.description}
                </p>
              </div>

              {/* Architecture & AI Pipeline */}
              <div className="space-y-3">
                <h4 className="font-mono text-xs uppercase tracking-wider text-neonPurple font-bold">
                  Arquitectura & Integración de Inteligencia Artificial
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800">
                    <span className="text-zinc-400 block mb-1">Modelo de IA:</span>
                    <span className="text-white font-semibold">
                      {selectedModalProject.tag}
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800">
                    <span className="text-zinc-400 block mb-1">Interfaz Móvil:</span>
                    <span className="text-white font-semibold">
                      Dark UI • React / Native
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800">
                    <span className="text-zinc-400 block mb-1">Métricas Clave:</span>
                    <span className="text-neonEmerald font-semibold">
                      {selectedModalProject.demoScreen.metrics}
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800">
                    <span className="text-zinc-400 block mb-1">Impacto:</span>
                    <span className="text-neonCyan font-semibold">
                      {selectedModalProject.demoScreen.statSubtitle}
                    </span>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-400 mb-2 font-bold">
                  Stack Tecnológico
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedModalProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg bg-zinc-800 text-zinc-200 border border-zinc-700 font-mono text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3 border-t border-zinc-800">
                <button
                  onClick={() => {
                    const originalIdx = projects.findIndex(
                      (p) => p.id === selectedModalProject.id
                    );
                    handlePreviewInPhone(originalIdx, selectedModalProject.title);
                  }}
                  className="flex-1 py-3 px-4 rounded-xl font-mono text-xs uppercase tracking-wider font-bold text-black bg-gradient-to-r from-neonCyan via-teal-400 to-neonEmerald hover:shadow-neon-cyan flex items-center justify-center space-x-2 transition-all"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Proyectar en Celular 3D</span>
                </button>

                <button
                  onClick={() => setSelectedModalProject(null)}
                  className="py-3 px-6 rounded-xl font-mono text-xs uppercase tracking-wider text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
