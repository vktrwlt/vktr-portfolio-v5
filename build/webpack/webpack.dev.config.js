const merge = require("webpack-merge")
const webpackBaseConfig = require("./webpack.base.config.js")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = merge(webpackBaseConfig, {
	mode: "development",
	output: {
		filename: "js/[name].js",
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: "css/main.css",
		}),
	],
})
