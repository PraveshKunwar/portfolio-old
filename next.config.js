const withFonts = require('next-fonts');
const withImages = require('next-images');
const webpack = require('webpack');
const _withPlugins = require('next-compose-plugins');
const withMDX = require("@next/mdx")({
	extension: /\.mdx?$/,
})
require('dotenv').config();

module.exports = _withPlugins([
	{env: {
		CLIENT_ID: process.env.CLIENT_ID,
		CLIENT_SECRET: process.env.CLIENT_SECRET,
		REFRESH_TOKEN: process.env.REFRESH_TOKEN,
	},
},
	withMDX({
		pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"]
	}),
	withFonts(
		withImages({
			webpack(config, options) {
				config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
				config.module.rules.push({
					
					test: /\.mdx/,
					use: [
						options.defaultLoaders.babel,
				
						{
							loader: "@mdx-js/loader"
						}
					],
				});
				return config;
			},
		})
	),
]);