import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		container: {
			padding: {
				DEFAULT: '15px',
			},
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '960px',
			xl: '1200px',
		},
		extend: {
			colors: {
				primary: '#131424',
				secondary: '#393A47',
				accent: '#F13024',
			},
			backgroundImage: {
				explosion: 'url("/cv/bg-explosion.png")',
				circles: 'url("/cv/circles.png")',
				circleStar: 'url("/cv/circle-star.svg")',
				site: 'url("/cv/site-bg.svg")',
			},
			animation: {
				'spin-slow': 'spin 6s linear infinite',
			},
			fontFamily: {
				poppins: [`Poppins`, 'sans-serif'],
				sora: [`Sora`, 'sans-serif'],
			},
		},
	},

	plugins: [require('tailwind-scrollbar')],
};
export default config;
