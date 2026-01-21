================================================================================
RAFAEL IZQUIERDO - PORTFOLIO WEBSITE
================================================================================

DESCRIPCIÓN GENERAL
-------------------
Sitio web profesional y portfolio de Rafael Izquierdo, consultor estratégico 
para startups y pymes. La web está construida con tecnologías modernas y 
presenta información sobre servicios de consultoría, experiencia profesional, 
blog y portfolio de proyectos.

================================================================================
ESTRUCTURA DEL SITIO
================================================================================

PÁGINAS PRINCIPALES:
- / (Home): Página principal con secciones Hero, Quién soy, Lo que aporto, 
  A quién ayudo, Testimonios y Contacto
- /blog: Listado de artículos del blog con filtrado por etiquetas
- /blog/:postName: Artículos individuales del blog
- /cv: Currículum vitae completo con opción de impresión optimizada para A4
- /portfolio: Portfolio de proyectos (actualmente oculto de la navegación)
- /businessos: Landing page del servicio BusinessOS (visible en navegación)

SECCIONES DE LA HOME:
1. Hero: Presentación como consultor estratégico para startups y pymes
2. Quién soy (About): Descripción profesional y valores
3. Lo que aporto a tu empresa (Services): Servicios y roles
4. A quién ayudo (TargetAudience): Público objetivo y problemas que resuelve
5. Testimonios: Reseñas de clientes
6. Contacto: Información de contacto y formulario

================================================================================
SECCIÓN PORTFOLIO
================================================================================

La sección Portfolio está actualmente oculta de la navegación pero accesible 
en /portfolio. Contiene entradas cronológicas de proyectos con:
- Carrusel de imágenes y videos de YouTube
- Título del proyecto
- Año
- Descripción detallada

ENTRADAS ACTUALES:

1. 2020 - Ronda Pre-Seed: Entrada de EASO Ventures y Aceleración con BerriUp
   - V-Vision ganadora de la 11ª convocatoria de BerriUp
   - Financiación pre-seed y aceleración de 4 meses
   - Carrusel con imagen y video de YouTube

2. 2022 - V-Vision finalista en Púlsar by Roche + Wayra
   - Finalista del programa de aceleración en oftalmología y salud
   - Acceso al coworking de Wayra Madrid
   - Carrusel con imagen y video de YouTube

================================================================================
TECNOLOGÍAS UTILIZADAS
================================================================================

FRONTEND:
- React 18 con TypeScript
- Vite (build tool)
- Tailwind CSS
- shadcn/ui (componentes)
- Framer Motion (animaciones)
- Wouter (routing)
- TanStack Query (gestión de estado del servidor)

BACKEND:
- Node.js con Express
- TypeScript
- Drizzle ORM con PostgreSQL

================================================================================
ARCHIVOS CLAVE
================================================================================

PÁGINAS:
- client/src/pages/Home.tsx - Página principal
- client/src/pages/About.tsx - Sección "Quién soy"
- client/src/pages/Services.tsx - Sección "Lo que aporto"
- client/src/pages/TargetAudience.tsx - Sección "A quién ayudo"
- client/src/pages/CV.tsx - Página del currículum
- client/src/pages/Portfolio.tsx - Página del portfolio
- client/src/pages/Blog.tsx - Listado del blog
- client/src/pages/BlogPost.tsx - Artículos individuales

COMPONENTES:
- client/src/components/Header.tsx - Navegación principal
- client/src/components/Footer.tsx - Pie de página

CONFIGURACIÓN:
- client/src/App.tsx - Rutas y configuración principal
- client/src/index.css - Estilos globales y configuración de impresión

================================================================================
CARACTERÍSTICAS ESPECIALES
================================================================================

CV IMPRIMIBLE:
- Botón "Imprimir CV" en la página /cv
- Estilos optimizados para impresión en A4
- Oculta navegación y pie de página al imprimir
- Muestra cabecera con datos de contacto

PORTFOLIO CON CARRUSEL:
- Soporte para imágenes y videos de YouTube
- Navegación con flechas y puntos indicadores
- Efecto de elevación en los recursos multimedia
- Diseño alternado (izquierda/derecha)

BLOG:
- Artículos en formato Markdown
- Filtrado por etiquetas con lógica AND
- Sintaxis resaltada para código

================================================================================
SECCIÓN BUSINESSOS
================================================================================

Landing page completa del servicio BusinessOS accesible en /businessos.
Botón destacado en el header con colores de marca (Teal #1a5f7a + Orange #ff6b35).

SECCIONES DE BUSINESSOS:
1. Hero: Presentación con gradiente oscuro y branding
2. Highlights: 3 beneficios principales (menos tareas, más foco, ventas constantes)
3. Experience: "He estado en tu silla" - credenciales y experiencia
4. Services: Las 3 pilares (Back OS, Sales OS, Strategy OS) con:
   - Qué resuelvo
   - Qué te llevas
   - Ejemplos típicos
   - Caso de éxito V-Vision
5. Process: Cómo trabajamos juntos (Handshake, Plan, Trabajo conjunto)
6. Model: Setup + Suscripción mensual
7. CTA: "Agendar Handshake" con mailto
8. Footer propio

COLORES BUSINESSOS:
- Teal (Business): #1a5f7a
- Orange (OS): #ff6b35
- Dark BG Hero: #0a0e27
- Botón CTA: #ff6b35

================================================================================
ÚLTIMAS MODIFICACIONES
================================================================================

Fecha: Enero 2026

- Implementada sección BusinessOS completa con landing page y botón en header
- Creado archivo readme.txt con documentación del proyecto
- Añadida sección Portfolio con carrusel de imágenes/videos
- Entradas de portfolio ordenadas cronológicamente (2019, 2022)
- Título de la página: "Rafael Izquierdo | Consultor Estratégico"
- Actualizado copy del Hero y todas las secciones
- CV con cabecera visible al imprimir
- Bullets (•) en lugar de guiones en toda la web

================================================================================
