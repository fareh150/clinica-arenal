# Arquitectura del Sitio — Nueva Web Clínica Arenal

---

## Stack Tecnológico

- **Framework:** Astro 4.x
- **Estilos:** Tailwind CSS 3.x
- **Lenguaje:** TypeScript
- **Hosting:** Vercel (free tier, deploy automático desde Git)
- **Email/Formularios:** Resend para envío de emails del formulario de contacto
- **Analytics:** Google Analytics 4 + Google Search Console
- **Mapas:** Google Maps Embed API (gratuito)

---

## Estructura de Páginas (Sitemap)

| URL | Página | Descripción |
|-----|--------|-------------|
| `/` | Inicio | Landing principal con hero, servicios, testimonios, CTA |
| `/quienes-somos` | Quiénes Somos | Equipo profesional con biografías y formación |
| `/tratamientos` | Tratamientos | Listado general de todos los tratamientos |
| `/tratamientos/fisioterapia-deportiva` | Fisioterapia Deportiva | Detalle del servicio |
| `/tratamientos/fisioterapia-traumatologia` | Fisioterapia Traumatología | Detalle del servicio |
| `/tratamientos/columna-vertebral` | Columna Vertebral | Detalle del servicio |
| `/tratamientos/dolor-cronico` | Dolor Crónico | Detalle del servicio |
| `/tratamientos/osteopatia` | Osteopatía | Detalle del servicio |
| `/tratamientos/puncion-seca` | Punción Seca | Detalle del servicio |
| `/tratamientos/fisioterapia-neurologica` | Fisioterapia Neurológica | Detalle del servicio |
| `/tratamientos/fisioterapia-infantil` | Fisioterapia Infantil | Detalle del servicio |
| `/tratamientos/fisioterapia-embarazo` | Fisioterapia Embarazo | Detalle del servicio |
| `/tratamientos/pilates` | Pilates | Detalle del servicio |
| `/tratamientos/hipopresivos` | Hipopresivos | Detalle del servicio |
| `/tratamientos/gimnasia-mayores` | Gimnasia Mayores | Detalle del servicio |
| `/instalaciones` | Instalaciones | Galería de fotos de la clínica |
| `/contacto` | Contacto | Formulario, mapa, datos de contacto |
| `/blog` | Blog | Listado de artículos (content collections) |
| `/politica-privacidad` | Política de Privacidad | Texto legal |
| `/aviso-legal` | Aviso Legal | Texto legal |

---

## Diseño y Layout

### Paleta de Colores
Inspirada en el branding actual (verde) y las instalaciones renovadas (verde/turquesa):

| Nombre | Hex | Uso |
|--------|-----|-----|
| Verde Principal | `#34A522` | Color primario, botones, acentos |
| Verde Oscuro | `#1E7A15` | Hover de botones, textos destacados |
| Verde Claro/Turquesa | `#5CB85C` | Fondos suaves, tarjetas |
| Blanco | `#FFFFFF` | Fondos principales |
| Gris Claro | `#F8F9FA` | Fondos de secciones alternas |
| Gris Texto | `#333333` | Texto principal |
| Gris Secundario | `#6B7280` | Texto secundario |
| Negro | `#1A1A2E` | Títulos principales |

### Tipografía
- **Familia principal:** Inter (Google Fonts)
- **Títulos:** Inter Bold/Semibold
- **Cuerpo:** Inter Regular, 16px base
- **Subtítulos:** Inter Medium

### Estilo Visual
- **Enfoque:** Salud, bienestar, profesionalidad y cercanía
- **Ambiente:** Limpio, moderno, con toques verdes que evocan salud natural
- **Imágenes:** Fotos reales de la clínica y el equipo
- **Iconos:** Lucide React o Heroicons para iconos de servicios
- **Bordes:** Suaves (rounded-lg, rounded-xl)
- **Sombras:** Sutiles en tarjetas (shadow-sm, shadow-md)

### Layout Global
1. **Navbar** — Fija superior, logo a la izquierda, links centro, botón CTA "Pide Cita" derecha
2. **Contenido** — Max-width 1200px, centrado
3. **Footer** — 4 columnas: marca, servicios, empresa, contacto
4. **WhatsApp flotante** — Botón verde fijo esquina inferior derecha → wa.me/34601335732

---

## Contenido por Página

### Página: Inicio (`/`)
- **Title:** `Clínica Arenal | Fisioterapia y Osteopatía en Carabanchel, Madrid`
- **Meta description:** `Clínica de fisioterapia, osteopatía y pilates en Carabanchel, Madrid. Más de 14 años de experiencia. 5.0★ en Google. Pide cita: 912 50 77 27.`
- **H1:** `Fisioterapia y Osteopatía en Carabanchel`
- **Secciones:**
  1. Hero con imagen de fondo + título + subtítulo + CTA "Pide tu cita"
  2. Servicios destacados (6 tarjetas con icono)
  3. Sobre nosotros (resumen + foto del equipo)
  4. Proceso de tratamiento (3 pasos: Consulta → Diagnóstico → Tratamiento)
  5. Testimonios de Google (carrusel con 4 reseñas)
  6. Datos de contacto + mapa
  7. CTA final "¿Necesitas ayuda? Llámanos"

### Página: Quiénes Somos (`/quienes-somos`)
- **Title:** `Nuestro Equipo | Clínica Arenal - Fisioterapeutas en Carabanchel`
- **Meta description:** `Conoce al equipo de fisioterapeutas de la Clínica Arenal en Carabanchel. Silvia Arenal, Carlos Herrera y Carla Barra. Más de 14 años de experiencia.`
- **H1:** `Nuestro Equipo de Fisioterapeutas`
- **Secciones:**
  1. Introducción del equipo
  2. Tarjeta de cada profesional (foto, nombre, formación, especialidades)
  3. Valores de la clínica
  4. Colaboración con Federación Madrileña de Balonmano

### Página: Tratamientos (`/tratamientos`)
- **Title:** `Tratamientos de Fisioterapia | Clínica Arenal Madrid`
- **Meta description:** `Fisioterapia deportiva, osteopatía, pilates, punción seca, hipopresivos y más. Tratamientos personalizados en Carabanchel, Madrid.`
- **H1:** `Tratamientos y Especialidades`
- **Secciones:**
  1. Introducción
  2. Grid de 12 tarjetas de servicios (imagen + título + descripción corta + link)

### Páginas de Tratamiento Individual (`/tratamientos/[slug]`)
- **Title:** `[Nombre Tratamiento] | Clínica Arenal Madrid`
- **Meta description:** Específica para cada tratamiento con keyword principal
- **H1:** `[Nombre del Tratamiento]`
- **Secciones:**
  1. Hero con imagen del tratamiento
  2. Descripción detallada (del archivo datos-fisioarenal.md)
  3. Lista de patologías/dolencias que trata
  4. Beneficios
  5. CTA "Pide cita para [tratamiento]"
  6. Otros tratamientos relacionados

### Página: Instalaciones (`/instalaciones`)
- **Title:** `Nuestras Instalaciones | Clínica Arenal Carabanchel`
- **Meta description:** `Conoce las instalaciones de la Clínica Arenal. Salas de tratamiento individualizadas para tu comodidad y recuperación en Carabanchel, Madrid.`
- **H1:** `Nuestras Instalaciones`
- **Secciones:**
  1. Texto introductorio
  2. Galería de fotos con lightbox

### Página: Contacto (`/contacto`)
- **Title:** `Contacto y Cita Previa | Clínica Arenal Madrid`
- **Meta description:** `Pide cita en Clínica Arenal. C/ Alba de Tormes 35, Carabanchel. Tel: 912 50 77 27. Metro San Francisco (L11) y Eugenia de Montijo (L5).`
- **H1:** `Contacto y Cita Previa`
- **Secciones:**
  1. Formulario de contacto (nombre, email, teléfono, tratamiento, mensaje)
  2. Datos de contacto (teléfono, email, dirección, horarios)
  3. Mapa de Google Maps embebido
  4. Cómo llegar (metro y autobuses)

### Página: Blog (`/blog`)
- **Title:** `Blog de Fisioterapia | Clínica Arenal Madrid`
- **Meta description:** `Consejos de fisioterapia, ejercicios y salud. Blog de la Clínica Arenal en Carabanchel, Madrid.`
- **H1:** `Blog de Fisioterapia`
- **Secciones:** Grid de artículos (content collections de Astro). Estructura lista, sin artículos creados aún.

---

## Estrategia SEO

### Investigación de Keywords

| Keyword | Vol. Estimado | Dificultad | Página Objetivo |
|---------|---------------|------------|-----------------|
| fisioterapia carabanchel | 200-400 | Media | Inicio |
| fisioterapeuta carabanchel | 150-300 | Media | Inicio |
| osteopatía carabanchel | 50-100 | Baja | /tratamientos/osteopatia |
| pilates carabanchel | 100-200 | Media | /tratamientos/pilates |
| clínica fisioterapia madrid | 500-1000 | Alta | Inicio |
| punción seca madrid | 200-400 | Media | /tratamientos/puncion-seca |
| fisioterapia deportiva madrid | 200-400 | Media-Alta | /tratamientos/fisioterapia-deportiva |
| hipopresivos madrid | 100-200 | Media | /tratamientos/hipopresivos |
| fisioterapia embarazo madrid | 100-200 | Media | /tratamientos/fisioterapia-embarazo |
| fisioterapia infantil madrid | 50-100 | Baja | /tratamientos/fisioterapia-infantil |
| dolor cervical fisioterapia | 300-500 | Media | /tratamientos/columna-vertebral |
| fibromialgia fisioterapia | 200-400 | Media | /tratamientos/dolor-cronico |
| gimnasia mayores carabanchel | 10-50 | Baja | /tratamientos/gimnasia-mayores |
| fisioterapia neurológica madrid | 50-100 | Baja | /tratamientos/fisioterapia-neurologica |

### SEO Técnico
- **Sitemap XML** — Generado automáticamente por Astro
- **robots.txt** — Permitir todo excepto /api/
- **Schema markup JSON-LD** — LocalBusiness en todas las páginas + MedicalBusiness
- **Canonical URLs** — En todas las páginas
- **Open Graph tags** — Para compartir en redes sociales
- **Twitter Cards** — Summary with large image
- **Core Web Vitals** — Optimizado con Astro (SSG, image optimization)
- **Alt text** — En todas las imágenes, descriptivo y con keyword cuando natural
- **Heading hierarchy** — Un solo H1 por página, H2/H3 lógicos

### SEO Local
- **Google Business Profile** — Ya existe, mantener actualizado
- **NAP consistente** — Mismo nombre, dirección y teléfono en todas partes
- **Keywords geolocalizadas** — "Carabanchel", "Madrid", "28025"
- **Schema LocalBusiness** — Con coordenadas exactas
- **Directorios locales** — Registrar en directorios de fisioterapia y salud

---

## Schema Markup

```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalBusiness"],
  "name": "Clínica Arenal. Fisioterapia y Osteopatía",
  "description": "Clínica de fisioterapia, osteopatía y pilates en Carabanchel, Madrid. Más de 14 años de experiencia.",
  "url": "https://www.clinicaarenal.es",
  "telephone": "+34912507727",
  "email": "clinica@fisioarenal.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Calle de Alba de Tormes, 35",
    "addressLocality": "Madrid",
    "addressRegion": "Comunidad de Madrid",
    "postalCode": "28025",
    "addressCountry": "ES"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.3767238,
    "longitude": -3.7445572
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "31",
    "bestRating": "5"
  },
  "image": "https://www.clinicaarenal.es/images/clinica-arenal-exterior.jpg",
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "10:00",
      "closes": "20:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/p/Cl%C3%ADnica-Arenal-100063808891649/"
  ],
  "founder": {
    "@type": "Person",
    "name": "Silvia Arenal Antón",
    "jobTitle": "Fisioterapeuta y Directora"
  },
  "medicalSpecialty": [
    "Fisioterapia",
    "Osteopatía",
    "Pilates",
    "Punción Seca",
    "Fisioterapia Deportiva"
  ]
}
```

---

## Estructura del Proyecto Astro

```
fisioarenal-web/
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   └── images/
│       ├── logo-clinica-arenal.jpg
│       ├── header-clinica-arenal.jpg
│       ├── team/
│       │   ├── silvia-arenal.jpg
│       │   ├── carlos-herrera.jpg
│       │   └── carla-barra.jpg
│       ├── treatments/
│       │   ├── fisioterapia-deportiva.jpg
│       │   ├── osteopatia.jpg
│       │   ├── pilates.jpg
│       │   └── ... (resto de tratamientos)
│       └── gallery/
│           ├── instalacion-1.jpg
│           └── ... (fotos de instalaciones)
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── ServiceCard.astro
│   │   ├── TeamMember.astro
│   │   ├── TestimonialCard.astro
│   │   ├── TestimonialCarousel.astro (React client:load)
│   │   ├── ContactForm.astro
│   │   ├── GoogleMap.astro
│   │   ├── WhatsAppButton.astro
│   │   ├── SEO.astro
│   │   ├── CTASection.astro
│   │   ├── GalleryGrid.astro
│   │   └── BlogCard.astro
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── PageLayout.astro
│   │   └── BlogLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── quienes-somos.astro
│   │   ├── tratamientos/
│   │   │   ├── index.astro
│   │   │   ├── fisioterapia-deportiva.astro
│   │   │   ├── fisioterapia-traumatologia.astro
│   │   │   ├── columna-vertebral.astro
│   │   │   ├── dolor-cronico.astro
│   │   │   ├── osteopatia.astro
│   │   │   ├── puncion-seca.astro
│   │   │   ├── fisioterapia-neurologica.astro
│   │   │   ├── fisioterapia-infantil.astro
│   │   │   ├── fisioterapia-embarazo.astro
│   │   │   ├── pilates.astro
│   │   │   ├── hipopresivos.astro
│   │   │   └── gimnasia-mayores.astro
│   │   ├── instalaciones.astro
│   │   ├── contacto.astro
│   │   ├── blog/
│   │   │   └── index.astro
│   │   ├── politica-privacidad.astro
│   │   └── aviso-legal.astro
│   ├── content/
│   │   └── blog/
│   │       └── .gitkeep
│   ├── data/
│   │   ├── services.ts
│   │   ├── team.ts
│   │   └── testimonials.ts
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── vercel.json (si necesario)
```

---

## Componentes Reutilizables

| Componente | Props | Uso |
|------------|-------|-----|
| `SEO.astro` | title, description, canonical, ogImage, schema | Head de cada página |
| `Navbar.astro` | — | Layout global |
| `Footer.astro` | — | Layout global |
| `Hero.astro` | title, subtitle, image, ctaText, ctaLink | Inicio y páginas de servicio |
| `ServiceCard.astro` | title, description, image, link, icon | Grid de servicios |
| `TeamMember.astro` | name, role, bio, image, qualifications[] | Página de equipo |
| `TestimonialCard.astro` | name, text, rating, source | Sección de testimonios |
| `ContactForm.astro` | — | Página de contacto (envía via Resend) |
| `GoogleMap.astro` | address, lat, lng | Página de contacto |
| `WhatsAppButton.astro` | phone, message | Flotante global |
| `CTASection.astro` | title, subtitle, buttonText, buttonLink | Secciones de llamada a la acción |
| `GalleryGrid.astro` | images[] | Página de instalaciones |
| `BlogCard.astro` | title, excerpt, date, slug, image | Listado de blog |

---

## Notas para la Demo

### Contenido real vs. placeholder
- **TODO EL CONTENIDO DE SERVICIOS** — Real, extraído de datos-fisioarenal.md
- **Equipo** — Real, con fotos y formación real
- **Testimonios** — Reales de Google Maps
- **Datos de contacto** — Reales
- **Imágenes de tratamientos** — Las de la web actual (algunas pueden ser stock)
- **Fotos de instalaciones** — Reales de la web actual
- **Blog** — Solo estructura, sin artículos
- **Textos legales** — Placeholder, marcar con <!-- PLACEHOLDER: completar con texto legal real -->
- **Horarios** — Verificar con el propietario (Google Maps dice apertura lunes 10:00)
- **Formulario de contacto** — Funcional con Resend (necesita API key en producción)

### Dominio sugerido
- clinicaarenal.es (verificar disponibilidad)
- clinicaarenalmadrid.es
- fisioarenal.es
