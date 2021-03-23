const withFonts = require('next-fonts');
const withImages = require('next-images');
module.exports = withImages({
	webpack(config, options) {
		return config;
	},
});
module.exports = withFonts({
	webpack(config, options) {
		return config;
	},
});
