import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://almacenajes-minidepositos.com', 
  integrations: [
    tailwind(),
    {
      name: 'google-analytics',
      hooks: {
        'astro:config:setup': ({ injectScript }) => {
          injectScript('page', `
            <!-- Google tag (gtag.js) -->
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-W9FEEJYKVT"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.PUBLIC_GA_ID}');
            </script>
          `);
        },
      },
    },
  ],
  build: {
    assets: "src",
  },
});