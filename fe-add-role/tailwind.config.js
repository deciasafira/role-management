module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	important: true,
	theme: {
		extend: {
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
			},
			colors: {
				primary: '#1D83B0',
				secondary: '#7DC5ED',
				tag: '#d9d9d9',
			},
			screens: {
				sm: '480px',
				md: '720px',
				lg: '1080px',
				xl: '1440px',
				xxl: '2160px',
			},
			// height: {
			// 	screen: '100vh',
			// },
			// width: {
			// 	screen: '100vw',
			// },
			borderRadius: {
				small: '4px',
				large: '30px',
				md: '8px',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/forms')],
};
