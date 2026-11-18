# Portfolio Profesional — Gaston Deliyañis
### Desarrollador de Aplicaciones Móviles con IA • Berisso, Buenos Aires (CFL 404)

Portfolio web moderno, limpio y de alto impacto creado con **Vite.js**, **React**, **Three.js**, **Tailwind CSS** y **Lucide Icons**, basado en la estética **Dark UI** inspirada en [stilos.lacuevalab.com](https://stilos.lacuevalab.com/) y la telemetría de alto rendimiento inspirada en [nickho-motorsports.nl](https://nickho-motorsports.nl/).

---

## 🚀 Características Principales

1. **Escenario 3D Interactivo (Three.js)**:
   - Celular 3D interactivo en la sección Hero con rotación 360°, físicas de arrastre con inercia, y cámara trasera detallada con triple lente y flash.
   - Texturas dinámicas en el Canvas que simulan aplicaciones móviles reales proyectadas en pantalla para cada proyecto (NeuroPrompt con onda de audio neural, VisionScan con escáner de documentos OCR, FlowTask con tablero ágil y tareas predictivas).
   - Controles HUD en vivo: Pausar/Reanudar rotación, re-centrar posición y alternar aplicación en pantalla.

2. **Diseño Dark UI & Telemetría**:
   - Paleta cromática: Fondo negro profundo (`#0a0a0a`), gris carbón (`#121214`), y acentos neón (**Cian Neón**, **Violeta Neón**, **Verde Esmeralda**).
   - Barra de telemetría superior con estado en vivo, coordenadas geográficas de Berisso (`34°52'S 57°53'W`) y reloj digital sincronizado con la hora de Argentina (ART UTC-3).
   - Efecto de marca de agua tipográfica gigante con contorno de trazo (*stroke watermark*) al estilo póster tecnológico.
   - Cursor spotlight ambiental interactivo y bordes con degradados reactivos (*gradient borders*).

3. **Secciones de Contenido**:
   - **Hero**: Presentación, titulación técnica ("Desarrollador de aplicaciones móviles con IA"), ubicación en Berisso, afiliación actual al CFL 404, y métricas destacadas.
   - **Proyectos 3D**: Tarjetas interactivas con filtros por categoría (*Todos*, *Gemini AI*, *ChatGPT*, *Productividad*), modal emergente con arquitectura detallada y botón para cargar el proyecto directamente en el celular 3D.
   - **Habilidades (Hard & Soft Skills)**: Habilidades duras (Google Gemini, ChatGPT/OpenAI, Desarrollo Móvil, Paquete Office con Excel analítico) y habilidades blandas (Trabajo en equipo, Capacidad de adaptación, Organización, Comprensión de texto, Desarrollo de ideas).
   - **Formación & Trayectoria**: Detalle de cursada en el **Centro de Formación Laboral 404 (CFL 404)** de Berisso con modal del plan de estudios oficial.
   - **Contacto Directo**: Botón directo a WhatsApp con mensaje pre-redactado, copiado rápido de correo electrónico, y formulario de contacto interactivo con confetti y notificaciones toast.

---

## 🛠️ Tecnologías Utilizadas

- **Vite 5**: Entorno de desarrollo ultrarrápido y empaquetador de producción.
- **React 18**: Arquitectura modular de componentes.
- **Three.js**: Renderizado 3D WebGL con texturas dinámicas por Canvas 2D.
- **Tailwind CSS 3**: Estilos utilitarios con soporte para temas oscuros y efectos neón.
- **Lucide React**: Iconografía moderna y minimalista.
- **Canvas Confetti**: Celebración visual interactiva en envíos exitosos.

---

## 📦 Instrucciones de Ejecución

### Requisitos
- **Node.js** v18 o superior instalado.

### Instalación de dependencias (si no se han instalado)
```bash
npm install
```

### Ejecutar en modo desarrollo
```powershell
npm.cmd run dev
```
Abre tu navegador en `http://localhost:3000`.

### Compilar para producción
```powershell
npm.cmd run build
```
Generará los archivos optimizados listos para desplegar en la carpeta `dist/`.

### Previsualizar la compilación de producción
```powershell
npm.cmd run preview
```

---

## ✏️ Cómo personalizar los datos

Todos los textos, proyectos, enlaces, teléfono de WhatsApp y habilidades se gestionan de forma centralizada en el archivo:
`src/data/portfolioData.js`

Para actualizar tu número de WhatsApp, email o agregar nuevos proyectos, simplemente edita dicho archivo.
