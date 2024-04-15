/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
      center: true,
			padding: `1rem`,
    },
		extend: {
			colors: {
				snow: `#fffafa`,
				'metallic-red': `#aa2c2e`,
				'eerie-black': `#1e1e1e`,
				'cadmium-orange': `#f58634`,
				'medium-vermilion': `#cd5531`,
			},
			fontFamily: {
				figtree: `"Figtree", sans-serif`,
			},
		},
	},
	plugins: [],
}
