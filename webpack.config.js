module.exports = {
	node: {
		fs: 'empty',
	},
	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
					},
					{
						loader: '@mdx-js/loader',
					},
				],
			},
		],
	},
};
