const plugin = require('tailwindcss/plugin')

module.exports = {
	content: [ './**/*.php' ],
	theme: {
		extend: {},
	},
	plugins: [
		plugin(function({addVariant}){
			addVariant('child', '& > *')
			addVariant('child-hover', '& > *:hover')
		})
	],
	corePlugins: {
		preflight: false,
	},
	important: true,
};
