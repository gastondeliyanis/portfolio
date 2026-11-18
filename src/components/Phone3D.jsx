import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCw, Smartphone, Sparkles, Move } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Phone3D({ currentAppIndex, setCurrentAppIndex, onShowToast }) {
  const mountRef = useRef(null);
  const [isRotating, setIsRotating] = useState(true);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const phoneGroupRef = useRef(null);
  const screenMeshRef = useRef(null);
  const animFrameIdRef = useRef(null);
  const isRotatingRef = useRef(isRotating);

  // Sync ref with state
  useEffect(() => {
    isRotatingRef.current = isRotating;
  }, [isRotating]);

  // Function to render dynamic canvas texture for the phone screen
  const generateScreenTexture = (project) => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, 1024);
    gradient.addColorStop(0, '#09090b');
    gradient.addColorStop(0.5, '#111115');
    gradient.addColorStop(1, '#050507');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 1024);

    // Subtle background mesh/grid on screen
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
    ctx.lineWidth = 1;
    for (let x = 32; x < 512; x += 32) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 1024);
      ctx.stroke();
    }

    // Status bar
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 22px Inter, sans-serif';
    ctx.fillText('9:41', 48, 64);

    // Status Icons (Signal & Battery)
    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.arc(430, 56, 6, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#a1a1aa';
    ctx.lineWidth = 2;
    ctx.strokeRect(445, 48, 24, 14);
    ctx.fillStyle = '#10b981';
    ctx.fillRect(448, 51, 14, 8);

    const accent = project.accentColor || '#00f2fe';

    // Top Category / Tag badge
    ctx.fillStyle = accent;
    ctx.font = 'bold 15px JetBrains Mono, monospace';
    ctx.fillText(`● ${project.category.toUpperCase()} • CFL 404`, 48, 115);

    // App Header Title
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 30px Inter, sans-serif';
    ctx.fillText(project.demoScreen.appName, 48, 155);

    // Screen specific layout
    if (project.id === 'neuroprompt') {
      // Chat Bubble 1 (User)
      ctx.fillStyle = '#1f1f25';
      ctx.beginPath();
      ctx.roundRect ? ctx.roundRect(140, 200, 324, 80, 18) : ctx.rect(140, 200, 324, 80);
      ctx.fill();
      ctx.fillStyle = '#e4e4e7';
      ctx.font = '16px Inter, sans-serif';
      ctx.fillText('Generar resumen de móvil con IA', 160, 235);
      ctx.fillStyle = '#71717a';
      ctx.font = '13px JetBrains Mono, monospace';
      ctx.fillText('Prompt de voz • 9:41 AM', 160, 260);

      // Chat Bubble 2 (Gemini AI response)
      ctx.fillStyle = '#141419';
      ctx.beginPath();
      ctx.roundRect ? ctx.roundRect(48, 300, 416, 175, 18) : ctx.rect(48, 300, 416, 175);
      ctx.fill();
      ctx.strokeStyle = 'rgba(0, 242, 254, 0.4)';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = accent;
      ctx.font = 'bold 14px JetBrains Mono, monospace';
      ctx.fillText('⚡ GEMINI PRO MODEL RESPONSE', 72, 335);

      ctx.fillStyle = '#f4f4f5';
      ctx.font = '17px Inter, sans-serif';
      ctx.fillText('✓ Arquitectura reactiva lista', 72, 370);
      ctx.fillText('✓ Integración multimodal activa', 72, 400);
      ctx.fillText('✓ Latencia: 42ms • Alta velocidad', 72, 430);

      // Neural Audio Wave Visualizer Card
      ctx.fillStyle = '#18181f';
      ctx.beginPath();
      ctx.roundRect ? ctx.roundRect(48, 500, 416, 170, 20) : ctx.rect(48, 500, 416, 170);
      ctx.fill();

      ctx.strokeStyle = accent;
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      ctx.moveTo(70, 595);
      ctx.bezierCurveTo(140, 510, 200, 670, 280, 540);
      ctx.bezierCurveTo(330, 480, 390, 640, 440, 590);
      ctx.stroke();

      ctx.fillStyle = '#a1a1aa';
      ctx.font = '14px JetBrains Mono, monospace';
      ctx.fillText('ONDA DE AUDIO / RECONOCIMIENTO', 72, 540);
      ctx.fillStyle = accent;
      ctx.font = 'bold 18px Inter, sans-serif';
      ctx.fillText('+140 Tokens/s Procesados', 72, 645);

    } else if (project.id === 'visionscan') {
      // Document Viewfinder Box
      ctx.fillStyle = '#141419';
      ctx.beginPath();
      ctx.roundRect ? ctx.roundRect(48, 200, 416, 260, 20) : ctx.rect(48, 200, 416, 260);
      ctx.fill();
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.5)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Targeting brackets
      ctx.strokeStyle = accent;
      ctx.lineWidth = 4;
      // Top Left
      ctx.beginPath(); ctx.moveTo(70, 250); ctx.lineTo(70, 225); ctx.lineTo(100, 225); ctx.stroke();
      // Top Right
      ctx.beginPath(); ctx.moveTo(410, 250); ctx.lineTo(410, 225); ctx.lineTo(380, 225); ctx.stroke();
      // Bottom Left
      ctx.beginPath(); ctx.moveTo(70, 410); ctx.lineTo(70, 435); ctx.lineTo(100, 435); ctx.stroke();
      // Bottom Right
      ctx.beginPath(); ctx.moveTo(410, 410); ctx.lineTo(410, 435); ctx.lineTo(380, 435); ctx.stroke();

      // Laser Scan Line
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.85)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(80, 330);
      ctx.lineTo(432, 330);
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 18px Inter, sans-serif';
      ctx.fillText('DOCUMENTO DETECTADO', 130, 290);
      ctx.fillStyle = '#a1a1aa';
      ctx.font = '15px JetBrains Mono, monospace';
      ctx.fillText('TABLA EXCEL - CFL 404 BERISSO', 110, 375);

      // OCR Stats
      ctx.fillStyle = '#18181f';
      ctx.beginPath();
      ctx.roundRect ? ctx.roundRect(48, 480, 416, 180, 20) : ctx.rect(48, 480, 416, 180);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 32px Inter, sans-serif';
      ctx.fillText('99.4% Precisión', 72, 540);
      ctx.fillStyle = '#10b981';
      ctx.font = '15px JetBrains Mono, monospace';
      ctx.fillText('Extracción directa a .xlsx & Office', 72, 580);
      ctx.fillStyle = '#71717a';
      ctx.font = '13px Inter, sans-serif';
      ctx.fillText('85 documentos analizados con ChatGPT-4o', 72, 620);

    } else {
      // FlowTask Project UI
      ctx.fillStyle = '#141419';
      ctx.beginPath();
      ctx.roundRect ? ctx.roundRect(48, 200, 416, 140, 20) : ctx.rect(48, 200, 416, 140);
      ctx.fill();
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.4)';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = '#a1a1aa';
      ctx.font = '14px JetBrains Mono, monospace';
      ctx.fillText('SPRINT VIGENTE • CFL 404', 72, 240);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 26px Inter, sans-serif';
      ctx.fillText('88% Tareas Realizadas', 72, 280);

      // Progress Bar
      ctx.fillStyle = '#27272a';
      ctx.fillRect(72, 305, 368, 12);
      ctx.fillStyle = accent;
      ctx.fillRect(72, 305, 368 * 0.88, 12);

      // Task Item 1
      ctx.fillStyle = '#18181f';
      ctx.beginPath();
      ctx.roundRect ? ctx.roundRect(48, 360, 416, 140, 18) : ctx.rect(48, 360, 416, 140);
      ctx.fill();

      ctx.fillStyle = accent;
      ctx.font = 'bold 13px JetBrains Mono, monospace';
      ctx.fillText('PRIORIDAD MÁXIMA IA', 72, 395);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 18px Inter, sans-serif';
      ctx.fillText('Optimizar Interfaz Dark UI Móvil', 72, 430);
      ctx.fillStyle = '#71717a';
      ctx.font = '14px Inter, sans-serif';
      ctx.fillText('Asignado a: Gaston Deliyañis (Berisso)', 72, 465);

      // Task Item 2
      ctx.fillStyle = '#18181f';
      ctx.beginPath();
      ctx.roundRect ? ctx.roundRect(48, 520, 416, 140, 18) : ctx.rect(48, 520, 416, 140);
      ctx.fill();
      ctx.fillStyle = '#00f2fe';
      ctx.font = 'bold 13px JetBrains Mono, monospace';
      ctx.fillText('INTEGRACIÓN GEMINI & OPENAI', 72, 555);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 18px Inter, sans-serif';
      ctx.fillText('Conexión de APIs en tiempo real', 72, 590);
      ctx.fillStyle = '#10b981';
      ctx.font = '14px Inter, sans-serif';
      ctx.fillText('✓ Testeado con éxito', 72, 625);
    }

    // Interactive Button on Screen
    const btnGrad = ctx.createLinearGradient(48, 710, 464, 785);
    btnGrad.addColorStop(0, accent);
    btnGrad.addColorStop(1, '#a855f7');
    ctx.fillStyle = btnGrad;
    ctx.beginPath();
    ctx.roundRect ? ctx.roundRect(48, 710, 416, 75, 22) : ctx.rect(48, 710, 416, 75);
    ctx.fill();

    ctx.fillStyle = '#0a0a0a';
    ctx.font = 'bold 22px JetBrains Mono, monospace';
    ctx.textAlign = 'center';
    ctx.fillText(project.demoScreen.actionBtn, 256, 756);
    ctx.textAlign = 'start'; // reset

    // Home Indicator Bar
    ctx.fillStyle = '#52525b';
    ctx.beginPath();
    ctx.roundRect ? ctx.roundRect(176, 980, 160, 6, 3) : ctx.rect(176, 980, 160, 6);
    ctx.fill();

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    return texture;
  };

  // Setup Three.js scene
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth;
    const height = container.clientHeight || 520;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.3);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    rendererRef.current = renderer;

    container.replaceChildren(renderer.domElement);

    // Ambient Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2.2);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);

    // Accent Neon Lights
    const cyanLight = new THREE.PointLight(0x00f2fe, 4.0, 30);
    cyanLight.position.set(4, 4, 4);
    scene.add(cyanLight);

    const purpleLight = new THREE.PointLight(0xa855f7, 3.5, 30);
    purpleLight.position.set(-4, -4, 4);
    scene.add(purpleLight);

    const emeraldLight = new THREE.PointLight(0x10b981, 2.0, 30);
    emeraldLight.position.set(0, -6, 3);
    scene.add(emeraldLight);

    // Phone Container Group
    const phoneGroup = new THREE.Group();
    scene.add(phoneGroup);
    phoneGroupRef.current = phoneGroup;

    // Dimensions
    const phoneWidth = 2.45;
    const phoneHeight = 4.95;
    const phoneDepth = 0.22;

    // Phone Chassis (Titanium Dark Metallic)
    const phoneGeo = new THREE.BoxGeometry(phoneWidth, phoneHeight, phoneDepth);
    const phoneMat = new THREE.MeshStandardMaterial({
      color: 0x16161a,
      metalness: 0.9,
      roughness: 0.2,
    });
    const phoneMesh = new THREE.Mesh(phoneGeo, phoneMat);
    phoneGroup.add(phoneMesh);

    // Metallic Outer Edge Rim (Bevel look)
    const rimGeo = new THREE.BoxGeometry(phoneWidth + 0.03, phoneHeight + 0.03, phoneDepth * 0.95);
    const rimMat = new THREE.MeshStandardMaterial({
      color: 0x27272a,
      metalness: 0.95,
      roughness: 0.12
    });
    const rimMesh = new THREE.Mesh(rimGeo, rimMat);
    phoneGroup.add(rimMesh);

    // Screen Mesh with canvas texture
    const currentProject = portfolioData.projects[currentAppIndex];
    const initialTexture = generateScreenTexture(currentProject);
    const screenGeo = new THREE.PlaneGeometry(2.32, 4.8);
    const screenMat = new THREE.MeshBasicMaterial({
      map: initialTexture,
    });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.set(0, 0, phoneDepth / 2 + 0.015);
    phoneGroup.add(screenMesh);
    screenMeshRef.current = screenMesh;

    // Front Camera Notch / Dynamic Island
    const notchGeo = new THREE.BoxGeometry(0.65, 0.16, 0.06);
    const notchMat = new THREE.MeshBasicMaterial({ color: 0x050505 });
    const notchMesh = new THREE.Mesh(notchGeo, notchMat);
    notchMesh.position.set(0, phoneHeight / 2 - 0.18, phoneDepth / 2 + 0.025);
    phoneGroup.add(notchMesh);

    // Rear Camera Bump & Lenses (Visible when rotated 360°)
    const camBumpGeo = new THREE.BoxGeometry(0.95, 0.95, 0.08);
    const camBumpMat = new THREE.MeshStandardMaterial({
      color: 0x1f1f23,
      metalness: 0.85,
      roughness: 0.25
    });
    const camBump = new THREE.Mesh(camBumpGeo, camBumpMat);
    camBump.position.set(-phoneWidth / 4, phoneHeight / 4, -phoneDepth / 2 - 0.04);
    phoneGroup.add(camBump);

    // 3 Camera Lenses with glowing dark glass
    const lensPositions = [
      [-phoneWidth / 4 - 0.22, phoneHeight / 4 + 0.22],
      [-phoneWidth / 4 - 0.22, phoneHeight / 4 - 0.22],
      [-phoneWidth / 4 + 0.22, phoneHeight / 4]
    ];
    lensPositions.forEach(([lx, ly]) => {
      const lensGeo = new THREE.CylinderGeometry(0.14, 0.14, 0.06, 24);
      const lensMat = new THREE.MeshStandardMaterial({
        color: 0x09090b,
        metalness: 0.95,
        roughness: 0.05
      });
      const lensMesh = new THREE.Mesh(lensGeo, lensMat);
      lensMesh.rotation.x = Math.PI / 2;
      lensMesh.position.set(lx, ly, -phoneDepth / 2 - 0.08);
      phoneGroup.add(lensMesh);
    });

    // Inertia Physics & Mouse/Touch Drag
    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };
    let velX = 0;
    let velY = 0;

    const onMouseDown = (e) => {
      isDragging = true;
      prevMouse = { x: e.clientX, y: e.clientY };
      velX = 0;
      velY = 0;
    };

    const onMouseMove = (e) => {
      if (!isDragging || !phoneGroupRef.current) return;
      const deltaX = e.clientX - prevMouse.x;
      const deltaY = e.clientY - prevMouse.y;
      
      velX = deltaX * 0.007;
      velY = deltaY * 0.007;
      
      phoneGroupRef.current.rotation.y += velX;
      phoneGroupRef.current.rotation.x += velY;
      prevMouse = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onTouchStart = (e) => {
      if (e.touches.length > 0) {
        isDragging = true;
        prevMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        velX = 0;
        velY = 0;
      }
    };

    const onTouchMove = (e) => {
      if (!isDragging || !phoneGroupRef.current || e.touches.length === 0) return;
      const deltaX = e.touches[0].clientX - prevMouse.x;
      const deltaY = e.touches[0].clientY - prevMouse.y;
      
      velX = deltaX * 0.007;
      velY = deltaY * 0.007;

      phoneGroupRef.current.rotation.y += velX;
      phoneGroupRef.current.rotation.x += velY;
      prevMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    container.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // Resize Handler
    const onResize = () => {
      if (!container || !rendererRef.current) return;
      const w = container.clientWidth;
      const h = container.clientHeight || 520;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };

    window.addEventListener('resize', onResize);

    // Render loop with smooth damping
    let clock = new THREE.Clock();
    const animate = () => {
      animFrameIdRef.current = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      if (phoneGroupRef.current) {
        // Apply inertia velocity
        if (!isDragging) {
          phoneGroupRef.current.rotation.y += velX;
          phoneGroupRef.current.rotation.x += velY;
          velX *= 0.92;
          velY *= 0.92;

          // Auto-rotate if enabled and not actively spinning from drag
          if (isRotatingRef.current && Math.abs(velX) < 0.001) {
            phoneGroupRef.current.rotation.y += 0.005;
          }
        }

        // Gentle floating oscillation
        phoneGroupRef.current.position.y = Math.sin(elapsedTime * 1.5) * 0.08;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animFrameIdRef.current);
      window.removeEventListener('resize', onResize);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);

      if (rendererRef.current && rendererRef.current.domElement) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  // Update screen texture whenever currentAppIndex changes
  useEffect(() => {
    if (!screenMeshRef.current) return;
    const project = portfolioData.projects[currentAppIndex];
    const newTexture = generateScreenTexture(project);
    if (newTexture) {
      if (screenMeshRef.current.material.map) {
        screenMeshRef.current.material.map.dispose();
      }
      screenMeshRef.current.material.map = newTexture;
      screenMeshRef.current.material.needsUpdate = true;
    }
  }, [currentAppIndex]);

  const toggleRotation = () => {
    const newState = !isRotating;
    setIsRotating(newState);
    if (onShowToast) {
      onShowToast(
        'Rotación 3D',
        newState ? 'Rotación interactiva activada' : 'Rotación pausada para vista estática'
      );
    }
  };

  const resetView = () => {
    if (phoneGroupRef.current) {
      phoneGroupRef.current.rotation.set(0, 0, 0);
      if (onShowToast) {
        onShowToast('Vista Reajustada', 'El teléfono volvió a su posición frontal original.');
      }
    }
  };

  const handleNextApp = () => {
    const nextIdx = (currentAppIndex + 1) % portfolioData.projects.length;
    setCurrentAppIndex(nextIdx);
    if (onShowToast) {
      onShowToast('App en Pantalla', `Cargando interfaz de ${portfolioData.projects[nextIdx].title}`);
    }
  };

  const activeProject = portfolioData.projects[currentAppIndex];

  return (
    <div className="gradient-border p-2 shadow-glow-lg relative overflow-hidden group">
      {/* Top HUD Controls */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between px-4 py-2.5 bg-darkBg/85 backdrop-blur-md rounded-xl border border-zinc-800 text-xs font-mono text-zinc-300">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-neonEmerald animate-pulse"></span>
          <span className="font-semibold text-white">Interactive Mobile 3D</span>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={resetView}
            title="Centrar Posición"
            className="px-2.5 py-1.5 rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-400 hover:text-white transition-all text-[11px]"
          >
            Centrar
          </button>

          <button
            onClick={toggleRotation}
            title={isRotating ? 'Pausar Rotación' : 'Reanudar Rotación'}
            className={`p-2 rounded-lg border transition-all ${
              isRotating
                ? 'border-neonCyan/40 text-neonCyan bg-neonCyan/10 shadow-neon-cyan'
                : 'border-zinc-700 text-zinc-400 hover:text-white bg-zinc-900'
            }`}
          >
            <RotateCw className="w-4 h-4" />
          </button>

          <button
            onClick={handleNextApp}
            title="Cambiar Aplicación Móvil"
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-neonPurple/40 bg-neonPurple/10 text-neonPurple hover:bg-neonPurple/20 transition-all font-mono text-xs"
          >
            <Smartphone className="w-4 h-4" />
            <span className="hidden sm:inline">Cambiar App</span>
          </button>
        </div>
      </div>

      {/* Three.js Canvas Container */}
      <div
        ref={mountRef}
        className="w-full h-[460px] sm:h-[520px] rounded-xl overflow-hidden cursor-grab active:cursor-grabbing relative"
      />

      {/* Bottom HUD Info Bar */}
      <div className="absolute bottom-4 left-4 right-4 z-20 px-4 py-3 bg-darkBg/90 backdrop-blur-md rounded-xl border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
        <div className="text-left w-full sm:w-auto">
          <div className="flex items-center space-x-2">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: activeProject.accentColor }}
            ></span>
            <span className="font-bold text-white text-sm">
              {activeProject.title}
            </span>
          </div>
          <p className="text-zinc-400 text-[11px] mt-0.5 line-clamp-1">
            {activeProject.subtitle}
          </p>
        </div>

        <div className="flex items-center space-x-2 text-[10px] text-zinc-400 self-end sm:self-center">
          <Move className="w-3.5 h-3.5 text-neonCyan animate-pulse" />
          <span className="px-2.5 py-1 rounded bg-zinc-800/80 border border-zinc-700">
            Arrastra para rotar 360°
          </span>
        </div>
      </div>
    </div>
  );
}
