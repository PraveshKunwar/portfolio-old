const withFonts = require('next-fonts');
const withImages = require('next-images');
const webpack = require('webpack');
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
module.exports = withFonts(
	withImages({
		webpack(config, options) {
			config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
			config.module.rules.push({
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			});
			return config;
		},
	})
);
