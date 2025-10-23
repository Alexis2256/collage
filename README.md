# Galería de Álbumes - React

Una aplicación web moderna desarrollada con React y Vite que muestra galerías de imágenes de forma dinámica e interactiva. El proyecto implementa componentes reutilizables y un diseño responsivo con Tailwind CSS.

## Características

- **Componentes Reutilizables**: Arquitectura basada en componentes React para máxima eficiencia
- **Diseño Responsivo**: Grid system adaptable de Tailwind CSS (1-4 columnas según dispositivo)
- **Gestión de Estado**: Implementación de React Hooks (useState) para navegación dinámica
- **Interfaz Moderna**: Botones con gradientes, efectos hover y transiciones suaves
- **Mobile First**: Optimizado para cualquier tamaño de pantalla
- **Rendimiento Optimizado**: Vite para desarrollo rápido y builds optimizados

## Estructura del Proyecto

```
src/
├── components/
│   ├── Album.jsx       # Componente reutilizable para mostrar álbumes
│   └── Collage.jsx     # Componente principal con lógica de navegación
├── img/
│   └── programadores/  # Imágenes locales de programadores
├── styles/
│   ├── App.css
│   └── index.css
├── App.jsx
└── main.jsx
```

## Tecnologías Utilizadas

- **React 19.1.1** - Librería de UI con Virtual DOM
- **Vite 7.1.7** - Build tool y dev server ultra rápido
- **Tailwind CSS 4.1.15** - Framework de CSS utility-first
- **@vitejs/plugin-react-swc** - Fast Refresh con SWC

## Instalación

```powershell
# Clonar el repositorio
git clone <tu-repositorio>

# Navegar al directorio
cd "Actividad 8"

# Instalar dependencias
npm install
```

## Uso

```powershell
# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview

# Ejecutar linter
npm run lint
```

## Álbumes Disponibles

1. **Álbum de Tecnologías**: Iconos de frameworks y lenguajes de programación (Angular, React, Vue, Node.js, Python, Java, JavaScript)
2. **Álbum de Programadores Web**: Fotos de programadores destacados de la comunidad

## Características Implementadas

### Componente `Album` (Reutilizable)
- Recibe props: `titulo` e `imagenes`
- Grid responsivo con 4 breakpoints
- Imágenes con aspect ratio uniforme
- Efectos hover con zoom suave

### Componente `Collage` (Contenedor Principal)
- Gestión de estado para cambiar entre álbumes
- Botones estilizados con gradientes lineales
- Renderizado condicional según selección
- Layout responsive con Flexbox

### Diseño Visual
- Fondo con gradiente lineal (azul a índigo)
- Tarjetas con sombras elevadas
- Transiciones y animaciones fluidas
- Tipografía optimizada y legible

## Paleta de Colores

- **Tecnologías**: Degradado azul (`from-blue-500 to-blue-700`)
- **Programadores**: Degradado púrpura (`from-purple-500 to-purple-700`)
- **Fondo**: Gradiente suave (`from-blue-50 to-indigo-100`)

## Decisiones de Diseño

### ¿Por qué React?
- Componentes reutilizables reducen duplicación de código
- Virtual DOM para renderizado eficiente
- Hooks modernos para lógica de estado simple
- Ecosistema robusto y gran comunidad

### ¿Por qué Vite?
- HMR instantáneo durante desarrollo
- Build optimizado con Rollup
- Configuración mínima out-of-the-box
- Soporte nativo para JSX y React

### ¿Por qué Tailwind CSS 4.1?
- Desarrollo rápido con clases de utilidad
- Sistema de diseño consistente
- Responsive design intuitivo
- PurgeCSS integrado para CSS mínimo

## Configuración de Tailwind

El proyecto usa Tailwind CSS 4.1 con la nueva sintaxis de gradientes:
- `bg-linear-to-r` para gradientes horizontales
- `bg-linear-to-br` para gradientes diagonales

## Responsive Breakpoints

- **Mobile**: 1 columna
- **Tablet pequeña** (sm: 640px): 2 columnas
- **Tablet** (md: 768px): 3 columnas
- **Desktop** (lg: 1024px): 4 columnas

## Flujo de Datos

```
Usuario hace clic en botón
    ↓
setAlbumActual('tecnologias')
    ↓
React actualiza el estado
    ↓
Renderizado condicional evalúa albumActual
    ↓
Se renderiza <Album> con props correspondientes
    ↓
Album mapea y muestra las imágenes
```

## Autor

Desarrollado como parte de la **Actividad 8 - Unidad 3**  
Programación Web - 7mo Semestre

## Licencia

Este proyecto es parte de un curso académico.
