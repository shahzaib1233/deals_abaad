/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/@theui/sveltekit-components/**/*.{html,js,svelte,ts}'
	],
	presets: [require('@theui/core/preset.cjs')],
	theme: {
		// colors: {
		// 	primary: '#FFD624',
		// 	transparent: 'transparent',
		// 	current: 'currentColor',
		// 	white: '#ffffff',
		// 	purple: '#3f3cbb',
		// 	midnight: '#121063',
		// 	metal: '#565584',
		// 	tahiti: '#3ab7bf',
		// 	silver: '#ecebff',
		// 	'bubble-gum': '#ff77e9',
		// 	bermuda: '#78dcca'
		// },
		extend: {}
	},

	plugins: [require('flowbite/plugin')]
};
