/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		// fontSize: {
		// 	base: "18px",
		// },

		screens: {
			xs: "320px",
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		extend: {
			colors: {
				vuejs: "#49e659",
			},
		},
	},
	plugins: [],
}
