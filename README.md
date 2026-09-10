# Brochure — Juan Esteban Robles

Sitio web tipo brochure construido con React, Vite, Tailwind CSS v4 y componentes de shadcn/ui. Desplegado automáticamente en GitHub Pages mediante GitHub Actions.

## Desarrollo

```bash
npm install
npm run dev
```

## Producción

```bash
npm run build
npm run preview
```

## Deploy

Cada push a la rama `main` dispara el workflow `.github/workflows/static.yml`, que instala dependencias, compila el proyecto y publica la carpeta `dist` en GitHub Pages.
