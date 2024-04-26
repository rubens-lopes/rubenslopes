/** @type {import('tailwindcss').Config} */
export default {
	darkMode: `selector`,
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
      center: true,
			padding: `1rem`,
    },
		extend: {
			colors: {
				'pale-pink': `#ffdcdc`,
				'outer-space': `#44454c`,
				'taupe-gray': `#898989`,
				'dark-gunmetal': `#1f2028`,
				onyx: `#35363b`,
				cultured: `#f5f5f5`,
				snow: `#fffafa`,
				'metallic-red': `#aa2c2e`,
				'misty-rose': `#ffe6e6`,
				'eerie-black': `#1e1e1e`,
				'cadmium-orange': `#f58634`,
				'medium-vermilion': `#cd5531`,
			},
			fontFamily: {
				figtree: `Figtree, sans-serif`,
			},
		},
	},
	plugins: [],
}
