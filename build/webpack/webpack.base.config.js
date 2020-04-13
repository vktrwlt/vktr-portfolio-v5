const path = require("path");
const paths = require("../../config/paths");
const ImageminWebpackPlugin = require("imagemin-webpack-plugin").default;
const ImageminWebP = require("imagemin-webp");

module.exports = {
	entry: {
		defer: path.resolve(paths.srcAssets, "js/defer.js"),
		main: path.resolve(paths.srcAssets, "js/main.js"),
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
		],
	},
	plugins: [
		new ImageminWebpackPlugin({
			plugins: [
				ImageminWebP({
					quality: 75,
				}),
			],
		}),
	],
};
