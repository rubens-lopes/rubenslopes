import { defineConfig } from 'astro/config'
import icon from 'astro-icon'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'
import svelte from '@astrojs/svelte'

// https://astro.build/config
export default defineConfig({
  output: `server`,
  adapter: vercel({ webAnalytics: { enabled: true } }),
  integrations: [
    tailwind(), 
    icon({ iconDir: `src/svgs` }),
    svelte(),
  ],
  i18n: {
    defaultLocale: `en`,
    locales: [ `en`, `pt-br` ],
    routing: `manual`,
  },
});