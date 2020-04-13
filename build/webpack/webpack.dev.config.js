const path = require("path");
const paths = require("../../config/paths");
const merge = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base.config.js");
const chokidar = require("chokidar");
const webpack = require("webpack");
const WebpackAssetsManifest = require("webpack-assets-manifest");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const tailwind = require("tailwindcss")(
	path.resolve(paths.config, "tailwind.config.js")
);
module.exports = merge(webpackBaseConfig, {
	mode: "development",
	output: {
		path: path.resolve(paths.dist, "assets/js/"),
		publicPath: "/assets/js/",
		filename: "[name].js",
	},
	module: {
		rules: [
			{
				test: [/.css$|.scss$/],
				exclude: /(node_modules)/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: { hmr: true },
					},
					{ loader: "css-loader", options: { importLoaders: 1 } },
					{
						loader: "postcss-loader",
						options: {
							ident: "postcss",
							parser: "postcss-scss",
							plugins: () => [tailwind],
						},
					},
					{
						loader: "sass-loader",
					},
				],
			},
		],
	},
	devServer: {
		before(app, server) {
			chokidar.watch(["./dist/**/*.html"]).on("all", function () {
				server.sockWrite(server.sockets, "content-changed");
			});
		},
		hot: true,
		overlay: true,
		contentBase: paths.dist,
		historyApiFallback: {
			rewrites: [{ from: /.*/g, to: "/index.html" }],
		},
		host: "localhost",
		port: 3000,
		open: false,
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css",
		}),
		new WebpackAssetsManifest({
			output: path.resolve(paths.src, "11ty/_data/assets.json"),
			publicPath: "/assets/js/",
			writeToDisk: true,
			apply(manifest) {
				manifest.set("year", new Date().getFullYear());
			},
		}),
		new CopyWebpackPlugin([
			{
				from: "./src/assets/images/**/*.{png,jpg,jpeg}",
				to: "../images/[folder]/[name].webp",
			},
		]),
		new webpack.HotModuleReplacementPlugin(),
	],
});
