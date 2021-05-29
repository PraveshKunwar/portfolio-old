const withFonts = require('next-fonts');
const withImages = require('next-images');
const webpack = require('webpack');
const composePlugins = require('next-compose-plugins');
const withMdxEnhanced = require('next-mdx-enhanced');
require('dotenv').config();
module.exports = withImages({
	webpack(config, options) {
		return config;
	},
});
module.exports = {
	env: {
		CLIENT_ID: process.env.CLIENT_ID,
		CLIENT_SECRET: process.env.CLIENT_SECRET,
		REFRESH_TOKEN: process.env.REFRESH_TOKEN,
	},
};
module.exports = composePlugins([
	withMdxEnhanced({
		layoutPath: './templates',
		defaultLayout: true,
		fileExtensions: ['mdx'],
		remarkPlugins: [],
		rehypePlugins: [],
		usesSrc: false,
		extendFrontMatter: {
			process: (mdxContent, frontMatter) => {},
			phase: 'prebuild|loader|both',
		},
		reExportDataFetching: false,
	}),
	withFonts(
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
	),
]);
