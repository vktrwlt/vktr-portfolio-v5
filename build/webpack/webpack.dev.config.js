const path = require("path");
const merge = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base.config.js");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const chokidar = require("chokidar");
const paths = require("../../config/paths");

module.exports = merge(webpackBaseConfig, {
	mode: "development",
	output: {
		filename: "[name].js",
	},
	devServer: {
		before(app, server) {
			chokidar
				.watch(
					[
						// path.resolve(paths.dist, "**/*.html"),
						path.resolve(paths.srcAssets, "**/*"),
					]
					// { ignored: path.resolve(paths.src, "**/*.pug") }
				)
				.on("all", function () {
					server.sockWrite(server.sockets, "content-changed");
				});
		},
		contentBase: paths.dist,
		index: "index.html",
		host: "localhost",
		hot: true,
		liveReload: false,
		port: 3000,
		open: false,
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new MiniCssExtractPlugin({
			filename: "css/main.css",
		}),
	],
});
