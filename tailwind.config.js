module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			DMsans: ["DM Sans", "sans-serif"],
		},
		screens: {
			"2xl": {min: "1535px"},
			// => @media (max-width: 1535px) { ... }

			xl: {max: "1366px"},
			// => @media (max-width: 1279px) { ... }

			lg: {max: "1023px"},
			// => @media (max-width: 1023px) { ... }

			md: {max: "767px"},
			// => @media (max-width: 768px) { ... }

			sm: {max: "639px"},
			// => @media (max-width: 639px) { ... }

		
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
