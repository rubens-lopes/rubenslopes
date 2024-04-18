import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: `server`,
  adapter: vercel({ webAnalytics: { enabled: true } }),
  integrations: [
    tailwind(), 
    icon({
      iconDir: `src/svgs`,
    }),
  ],
});