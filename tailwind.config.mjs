/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	'./node_modules/flowbite/**/*.js',
    "./node_modules/tw-elements/js/**/*.js"
	],
	theme: {
		container: {
			fontSize: {
				sm: '0.8rem',
				base: '1rem', /* h4 */
				xl: '1.25rem',	
				'2xl': '1.563rem',/* h3 */
				'3xl': '1.953rem', /* h2 */
				'4xl': '2.441rem',
				'5xl': '3.052rem', /* h1 */
			  },
			padding: {
			  DEFAULT: '1rem',
			  sm: '2rem',
			  md: '3rem',
			  lg: '6rem',
			  xl: '8rem',
			  '2xl': '10rem',
			},
		  },
		extend: {},
	},
	plugins: [
		require('flowbite/plugin'),
		require("tw-elements/plugin.cjs")
	],
  darkMode: "class"
}
