# G | T | N — Gestión Técnica Notarial

![Status](https://img.shields.io/badge/Status-Production-success)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white)

**GTN** es una landing page profesional de alta precisión diseñada para servicios de consultoría técnica notarial y legal. El sitio destaca por una estética minimalista ("Brutalismo Elegante") y una arquitectura orientada a la soberanía tecnológica y la privacidad.

## Stack Tecnológico

* **Frontend:** React.js con Vite.
* **Estilos:** Tailwind CSS (Custom Theme: *Verde Musgo*, *Crema Oliva*, *Dorado Mate*).
* **Animaciones:** Framer Motion (interacciones fluidas y micro-interacciones).
* **Iconografía:** Lucide React (líneas finas de 1px para mantener la estética técnica).
* **Despliegue:** Optimizado para entornos estáticos (Netlify/Vercel).

## Características Principales

### 1. Navegación Híbrida Inteligente
Implementación de un sistema de navegación dual:
- **Desktop:** Menú horizontal de alta visibilidad.
- **Mobile:** Sistema de overlay con detección activa de *viewport* vía JavaScript para evitar conflictos de especificidad CSS.

### 2. Manifiesto de Soberanía Tecnológica
Sección central que comunica la filosofía del proyecto: "Tecnología Transparente". Enfocado en sistemas abiertos, encriptación y control total del usuario sobre sus datos.

### 3. Service Cards Dinámicas
Componentes de acordeón responsivos que desglosan cada servicio en tres ejes:
- **Problema:** Diagnóstico inicial.
- **Intervención:** Solución técnica aplicada.
- **Resultado:** Valor agregado tangible.

### 4. Tech Stack de Privacidad
Exhibición de herramientas soberanas integradas en el flujo de trabajo:
- **Proton Suite** (Comunicación encriptada).
- **VeraCrypt** (Cifrado de discos).
- **PDF24 Local** (Procesamiento local sin nube).
- **Syncthing** (Sincronización P2P).


## Instalación y Desarrollo

1. Clonar el repositorio:
   ```bash 
   git clone [https://github.com/e-legal032/legal-ops-web.git](https://github.com/e-legal032/legal-ops-web.git)
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Iniciar servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Construir para producción:
   ```bash
   npm run build
   ```

## Estructura de Archivos Clave
- /src/components/HeroGraphic.jsx: Gráfico técnico SVG animado.

- /src/components/ServiceCard.jsx: Lógica de acordeón y grid responsivo.

- /src/components/TechStack.jsx: Grilla de herramientas con escalado dinámico.

- /src/translations.js: Diccionario centralizado para soporte bilingüe (ES/EN).

## Despliegue (Deployment)

El proyecto está optimizado para ser desplegado en plataformas de **Static Site Hosting** (Netlify, Vercel o GitHub Pages).

### Requisitos Previos para Producción
Antes de cada despliegue, ejecutar el comando de optimización de assets:
```bash
npm run build
```
Esto generará una carpeta dist/ con el código minificado, optimización de árboles (tree-shaking) y compresión de SVGs.

### Configuración en Netlify (Recomendado)
Para un despliegue exitoso, configurar los siguientes parámetros en el panel de control de Netlify:

- Build Command: npm run build

- Publish directory: dist

Node Version: 20.x o superior.


## Licencia
Privado - Todos los derechos reservados por G | T | N.