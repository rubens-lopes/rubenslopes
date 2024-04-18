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
				cultured: `#f5f5f5`,
				snow: `#fffafa`,
				'metallic-red': `#aa2c2e`,
				'misty-rose': `#ffe6e6`,
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
