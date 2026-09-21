import { defineConfig } from 'astro/config';

// De acá sale la URL absoluta de la preview (og:image).
// Cloudflare Pages define CF_PAGES_URL en el build, así que no hay nada que tocar.
// Con dominio propio: poné SITE=https://tu-dominio.com en las variables del proyecto.
const site = process.env.SITE || process.env.CF_PAGES_URL || 'http://localhost:4321';

export default defineConfig({ site });
