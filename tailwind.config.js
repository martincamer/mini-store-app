/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#72AEC8',
				secondary: '#D7DDDF',
				terciary: '#272727',
				fourty: '#EDF1F3',
			},
		},
	},
	plugins: [],
};
