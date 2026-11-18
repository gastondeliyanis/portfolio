import React, { useState } from 'react';
import SpotlightCursor from './components/SpotlightCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ExperienceEducation from './components/ExperienceEducation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';

export default function App() {
  const [currentAppIndex, setCurrentAppIndex] = useState(0);
  const [toast, setToast] = useState({
    visible: false,
    title: '',
    message: '',
    type: 'success'
  });

  const showToast = (title, message, type = 'success') => {
    setToast({ visible: true, title, message, type });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 4000);
  };

  const closeToast = () => {
    setToast((prev) => ({ ...prev, visible: false }));
  };

  return (
    <div className="min-h-screen bg-darkBg text-zinc-100 font-sans selection:bg-neonCyan selection:text-black relative">
      {/* Interactive Ambient Spotlight Cursor */}
      <SpotlightCursor />

      {/* Floating Notifications */}
      <Toast toast={toast} onClose={closeToast} />

      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="pt-20">
        <Hero
          currentAppIndex={currentAppIndex}
          setCurrentAppIndex={setCurrentAppIndex}
          onShowToast={showToast}
        />

        <Projects
          onSelectProject={(idx) => setCurrentAppIndex(idx)}
          onShowToast={showToast}
        />

        <Skills />

        <ExperienceEducation />

        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
