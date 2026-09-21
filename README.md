# 🌼 Flores Amarillas

Sitio Astro de una sola página para enviar y recibir flores amarillas. Feliz día de la primavera.

```bash
npm install
npm run dev     # http://localhost:4321
npm run build   # dist/ estático, se sube a cualquier lado
```

## Parámetros

| Param  | Valores              | Descripción                                   |
|--------|----------------------|-----------------------------------------------|
| `modo` | `enviar` (default) · `recibir` | Qué vista se muestra                |
| `de`   | texto                | Quién envía (solo en `recibir`)                |
| `para` | texto                | Quién recibe (solo en `recibir`)               |
| `tipo` | `carino` (default) · `amor` | "Con cariño" o "Con amor"               |

Ejemplo: `/?modo=recibir&de=Lio&para=Sofía&tipo=amor`

El modo `enviar` arma ese link solo y ofrece copiarlo o mandarlo por WhatsApp.

## Preview del link (og:image)

`public/og.png` (1200×630, "Te enviaron flores") se regenera con:

```bash
node scripts/og.mjs
```

La URL absoluta sale de `site` en `astro.config.mjs` — cambialo por el dominio final o WhatsApp/Twitter no van a encontrar la imagen.

Los params se leen en el cliente (`location.search`), así que el sitio queda 100% estático: no hace falta adapter SSR ni base de datos.
# flores-amarillas
