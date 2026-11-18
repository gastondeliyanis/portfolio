import React, { useState } from 'react';
import { Send, MessageSquare, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

const GithubIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 0 0 1.53-1.53A1.53 1.53 0 0 0 6.46 5.7a1.53 1.53 0 0 0-1.53 1.53 1.53 1.53 0 0 0 1.53 1.53m1.4 9.74v-8.37H5.06v8.37z" />
  </svg>
);

export default function Contact({ onShowToast }) {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      if (onShowToast) {
        onShowToast('Campos requeridos', 'Por favor completa tu nombre, correo y mensaje.', 'error');
      }
      return;
    }

    setSubmitting(true);

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#00f2fe', '#a855f7', '#10b981']
    });

    setTimeout(() => {
      setSubmitting(false);
      if (onShowToast) {
        onShowToast(
          '¡Mensaje Enviado!',
          `Gracias ${formData.name}, te responderé a la brevedad.`
        );
      }
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  const whatsappUrl = `https://wa.me/${personal.whatsappNumber}?text=${encodeURIComponent(
    'Hola Gaston, vi tu portfolio de desarrollo móvil con IA y me gustaría conversar contigo.'
  )}`;

  return (
    <section id="contacto" className="py-24 relative border-t border-zinc-800/60 bg-darkCard/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 font-mono text-xs uppercase tracking-widest text-neonEmerald px-3.5 py-1.5 rounded-full bg-neonEmerald/10 border border-neonEmerald/30">
            <MessageSquare className="w-3.5 h-3.5 text-neonEmerald" />
            <span>Contacto Directo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            ¿Listo para crear tu <span className="text-neonCyan glow-text-cyan">Próxima App con IA?</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Escríbeme para colaborar en proyectos móviles, ideas de inteligencia artificial o consultar disponibilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-8 rounded-2xl border border-zinc-800 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="w-3 h-3 rounded-full bg-neonEmerald animate-ping" />
                <span className="font-mono text-xs uppercase tracking-wider text-neonEmerald font-semibold">
                  Disponible para colaborar
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">{personal.name}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Desarrollador enfocado en aplicaciones móviles con inteligencia artificial. Radicado en Berisso, Buenos Aires.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-zinc-800/80 text-sm font-mono">
                <div className="flex items-center space-x-3 text-zinc-300">
                  <MapPin className="w-4 h-4 text-neonEmerald flex-shrink-0" />
                  <span>{personal.location}</span>
                </div>

                <div className="flex items-center justify-between text-zinc-300">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-neonCyan flex-shrink-0" />
                    <a
                      href={`mailto:${personal.contactEmail}`}
                      className="hover:text-neonCyan transition-colors underline-offset-4 hover:underline"
                    >
                      {personal.contactEmail}
                    </a>
                  </div>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(personal.contactEmail);
                      if (onShowToast) onShowToast('Email Copiado', 'Dirección de correo copiada al portapapeles');
                    }}
                    className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-700 transition-colors"
                  >
                    Copiar
                  </button>
                </div>

                <div className="flex items-center space-x-3 text-zinc-300">
                  <Phone className="w-4 h-4 text-neonPurple flex-shrink-0" />
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-neonPurple transition-colors"
                  >
                    WhatsApp: {personal.whatsappDisplay}
                  </a>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl font-mono text-xs uppercase tracking-wider font-bold text-black bg-gradient-to-r from-neonEmerald to-teal-400 hover:shadow-neon-emerald flex items-center justify-center space-x-2 transition-all hover:scale-[1.02]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Contactar por WhatsApp</span>
                </a>

                <div className="flex space-x-3">
                  <a
                    href={personal.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-neonCyan text-zinc-300 hover:text-white font-mono text-xs flex items-center justify-center space-x-2 transition-all"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personal.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-neonPurple text-zinc-300 hover:text-white font-mono text-xs flex items-center justify-center space-x-2 transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="gradient-border p-8 bg-darkCard/80 backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-2 font-mono">
                Enviar un mensaje
              </h3>
              <p className="text-xs text-zinc-400 mb-6">
                Completa este formulario y me pondré en contacto contigo a la brevedad.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                      Tu Nombre <span className="text-neonCyan">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ej: Laura Gómez"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 focus:border-neonCyan focus:ring-1 focus:ring-neonCyan text-sm text-white placeholder-zinc-600 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                      Correo Electrónico <span className="text-neonCyan">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@correo.com"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 focus:border-neonCyan focus:ring-1 focus:ring-neonCyan text-sm text-white placeholder-zinc-600 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Asunto
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Ej: Oportunidad de Proyecto / Práctica en Berisso"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 focus:border-neonPurple focus:ring-1 focus:ring-neonPurple text-sm text-white placeholder-zinc-600 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Mensaje <span className="text-neonCyan">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntame sobre tu proyecto o consulta..."
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 focus:border-neonEmerald focus:ring-1 focus:ring-neonEmerald text-sm text-white placeholder-zinc-600 outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-xl font-mono text-xs uppercase tracking-widest font-bold text-black bg-gradient-to-r from-neonCyan via-teal-400 to-neonEmerald hover:shadow-neon-cyan hover:scale-[1.01] transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? 'Enviando...' : 'Enviar Mensaje Ahora'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
