const merge = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base.config.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const chokidar = require("chokidar");
const path = require("path");
const paths = require("../../config/paths");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = merge(webpackBaseConfig, {
	mode: "development",
	devServer: {
		before(app, server) {
			chokidar
				.watch([path.resolve(paths.dist, "**/*.html")])
				.on("all", function () {
					server.sockWrite(server.sockets, "content-changed");
				});
		},
		contentBase: paths.dist,
		index: "index.html",
		host: "localhost",
		port: 3000,
		hot: true,
		open: false,
	},
	plugins: [
		new CopyWebpackPlugin([
			{
				from: "./src/assets/images/**/*.{png,jpg,jpeg}",
				to: "./assets/images/[folder]/[name].webp",
			},
		]),
		new MiniCssExtractPlugin({
			filename: "css/main.css",
		}),
	],
});
