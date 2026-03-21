# Prompt para Claude Code Terminal

> Copia y pega el siguiente prompt cuando abras Claude Code en la carpeta `fisioarenal-web/`.

---

```
Necesito que crees un proyecto profesional con Astro 4 + Tailwind CSS para la web de Clínica Arenal, una clínica de fisioterapia, osteopatía y pilates en Carabanchel, Madrid.

ANTES DE EMPEZAR, lee estos archivos que contienen toda la información que necesitas:
1. `datos-fisioarenal.md` — Todos los datos reales de la empresa (equipo, servicios, contacto, assets)
2. `arquitectura-sitio.md` — Estructura completa del sitio, diseño, SEO, componentes y stack técnico
3. `testimonios-google.md` — Reseñas reales de Google Maps (5.0/5, 31 reseñas)
4. `recursos-facebook.md` — Contenido y datos descubiertos en Facebook

INSTRUCCIONES:

1. **Inicializa el proyecto** con Astro 4 + Tailwind CSS + TypeScript. Sigue la estructura de carpetas definida en arquitectura-sitio.md.

2. **Usa SOLO datos reales** del archivo datos-fisioarenal.md. No inventes información sobre la empresa, el equipo ni los servicios. Los únicos contenidos ficticios permitidos son los textos legales (márcalos con <!-- PLACEHOLDER: completar con texto legal real -->).

3. **Crea todos los componentes** listados en arquitectura-sitio.md (Navbar, Footer, Hero, ServiceCard, TeamMember, TestimonialCard, ContactForm, WhatsAppButton, SEO, etc.) como componentes .astro reutilizables.

4. **Implementa todas las páginas** del mapa del sitio. Cada página debe tener:
   - Title tag único (definido en arquitectura-sitio.md)
   - Meta description única
   - Canonical URL
   - Open Graph tags
   - Schema markup JSON-LD donde aplique
   - Un solo H1 por página
   - Jerarquía correcta de headings (H1 > H2 > H3)

5. **Estilo visual:** Moderno, limpio, enfoque salud/bienestar. Paleta definida en arquitectura-sitio.md (verde principal #34A522 + blanco + grises). Tipografía Inter. Diseño responsive mobile-first.

6. **Imágenes:** Las fotos reales están en `assets/images/`. Usa el componente <Image> de Astro para optimización automática. Pon alt text descriptivo en español en cada imagen.

7. **SEO:** Implementa el componente SEO.astro con soporte para: meta tags dinámicos, canonical URL, Open Graph, Twitter Cards y schema JSON-LD configurable por página. Usa el schema de LocalBusiness + MedicalBusiness definido en arquitectura-sitio.md.

8. **Navegación:** Navbar fija con logo, links de navegación, dropdown para Tratamientos y botón CTA "Pide Cita" destacado en verde. Responsive con menú hamburguesa en móvil.

9. **Footer:** 4 columnas (marca con descripción, tratamientos principales, empresa, contacto). Datos reales de datos-fisioarenal.md.

10. **WhatsApp:** Botón flotante fijo en esquina inferior derecha con enlace a wa.me/34601335732.

11. **Contacto:** Formulario con campos: nombre, email, teléfono, tratamiento deseado (select con todos los tratamientos) y mensaje. Configurar envío con Resend (preparar el endpoint API, la API key se configurará como variable de entorno RESEND_API_KEY). Incluir mapa de Google Maps embebido con la dirección real: C/ Alba de Tormes, 35, Carabanchel, 28025 Madrid.

12. **Testimonios:** Sección en inicio con carrusel/grid de las reseñas reales de testimonios-google.md. Mostrar nombre, texto, estrellas y "Reseña de Google". Incluir badge "5.0 ★ — 31 reseñas en Google".

13. **Páginas de tratamientos individuales:** Cada tratamiento tiene su propia página con: hero, descripción detallada, patologías que trata, beneficios, CTA para pedir cita, y links a tratamientos relacionados.

14. **Blog:** Crea la estructura con content collections de Astro para posts en Markdown. No hace falta crear artículos aún, solo la estructura lista para añadir contenido.

15. **Páginas legales:** Crea política de privacidad y aviso legal con contenido placeholder marcado como <!-- PLACEHOLDER: completar con texto legal real -->.

16. **Página de instalaciones:** Galería de imágenes con lightbox/modal para ver las fotos a mayor tamaño.

17. **Configuración Vercel:** Crear vercel.json si es necesario. Preparar variables de entorno para Resend API key.

ANTES DE ESCRIBIR CÓDIGO:

18. **Repositorio GitHub:** Antes de empezar, pregúntame por la URL del repositorio de GitHub donde vamos a trabajar. Inicializa el proyecto como repo Git conectado a GitHub desde el principio. Todo el trabajo debe estar versionado desde el primer commit.

19. **Commits profesionales:** Haz commits atómicos después de cada paso importante, usando mensajes de conventional commits:
   - `feat: initialize Astro + Tailwind project with TypeScript`
   - `feat: add base layout with Navbar and Footer components`
   - `feat: add SEO component with JSON-LD schema support`
   - `feat: add homepage with hero, services grid and testimonials`
   - `feat: add team page with professional profiles`
   - `feat: add treatment pages with individual service details`
   - `feat: add contact page with Resend form and Google Maps`
   - `feat: add gallery page for clinic installations`
   - `chore: configure Vercel deployment settings`
   - etc.

   El historial de commits debe leerse como una construcción lógica y limpia del proyecto. Haz push a GitHub regularmente para que el repo esté siempre actualizado.

Empieza pidiendo el repo de GitHub, luego inicializa el proyecto y crea la estructura base, ve página por página empezando por el layout y componentes compartidos (Navbar, Footer, SEO, WhatsApp).
```
