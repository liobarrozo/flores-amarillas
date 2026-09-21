import { defineConfig } from 'astro/config';

// De acá sale la URL absoluta de la preview (og:image).
// Fija a propósito: CF_PAGES_URL da la URL con hash del deploy, que cambia cada vez.
// Con dominio propio: poné SITE=https://tu-dominio.com en las variables del proyecto.
const site = process.env.SITE || 'https://flores-amarillas-59t.pages.dev';

export default defineConfig({ site });
