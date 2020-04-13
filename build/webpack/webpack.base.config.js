const path = require("path");
const paths = require("../../config/paths");
const ImageminWebpackPlugin = require("imagemin-webpack-plugin").default;
const ImageminWebP = require("imagemin-webp");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: {
		main: path.resolve(paths.srcAssets, "js/main.js"),
		defer: path.resolve(paths.srcAssets, "js/defer.js"),
	},
	output: {
		path: path.resolve(paths.dist),
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
		new CopyWebpackPlugin([
			{
				from: "./src/assets/images/**/*.{png,jpg,jpeg}",
				to: "./assets/images/[folder]/[name].webp",
			},
		]),
		new ImageminWebpackPlugin({
			plugins: [
				ImageminWebP({
					quality: 75,
				}),
			],
		}),
	],
};
