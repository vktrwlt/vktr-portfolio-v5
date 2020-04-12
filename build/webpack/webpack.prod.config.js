const merge = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base.config.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackAssetsManifest = require("webpack-assets-manifest");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const cssnano = require("cssnano");
const path = require("path");
const paths = require("../../config/paths");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = merge(webpackBaseConfig, {
	mode: "production",
	output: {
		path: path.resolve(paths.dist, "assets/"),
		filename: "js/[name].[hash].js",
	},

	plugins: [
		new WebpackAssetsManifest({
			output: path.resolve(paths.dist, "assets.json"),
			publicPath: "/assets/",
			writeToDisk: true,
			apply(manifest) {
				manifest.set("year", new Date().getFullYear());
			},
		}),
		new WebpackAssetsManifest({
			output: path.resolve(paths.src, "11ty/_data/assets.json"),
			publicPath: "/assets/",
			writeToDisk: true,
			apply(manifest) {
				manifest.set("year", new Date().getFullYear());
			},
		}),
		new MiniCssExtractPlugin({
			filename: "css/main.[chunkhash].css",
		}),
		new CopyWebpackPlugin([
			{
				from: "./src/assets/images/**/*.{png,jpg,jpeg}",
				to: "./images/[folder]/[name].webp",
			},
		]),
	],
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin(),
			new OptimizeCSSAssetsPlugin({
				cssProcessor: cssnano,
			}),
		],
	},
});
