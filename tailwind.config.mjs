/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'white': '#f3f4f8',
			'black': '#1a1a1a',
			'blueOS': {
				50: '#E1F6FF',
				400: '#6695D6',
				500: '#4A81C3',
				700: '#116098',
				900: '#003766',
			}
		},
		extend: {},
	},
	plugins: [],
}
