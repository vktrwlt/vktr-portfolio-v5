const path = require("path")
const WebpackAssetsManifest = require("webpack-assets-manifest")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const paths = require("../../config/paths")
const autoprefixer = require("autoprefixer")
const tailwind = require("tailwindcss")(
	path.resolve(paths.config, "tailwind.config.js")
)
const purgecss = require("@fullhuman/postcss-purgecss")({
	content: [path.resolve(paths.src, "**/*.pug")],
	defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
})

const isProduction = process.env.NODE_ENV === "production"

module.exports = {
	entry: [
		path.resolve(paths.src, "js/main.js"),
		path.resolve(paths.src, "scss/main.scss"),
	],
	output: {
		path: paths.dist,
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
			{
				test: [/.css$|.scss$/],
				use: [
					MiniCssExtractPlugin.loader,
					{ loader: "css-loader", options: { importLoaders: 1 } },
					{
						loader: "postcss-loader",
						options: {
							ident: "postcss",
							parser: "postcss-scss",
							plugins: () => [
								tailwind,
								autoprefixer,
								...(isProduction ? [purgecss] : []),
							],
						},
					},
					{
						loader: "sass-loader",
					},
				],
			},
		],
	},
	plugins: [
		new WebpackAssetsManifest({
			output: path.resolve(paths.dist, "manifest.json"),
			publicPath: "/",
			writeToDisk: true,
		}),
		new WebpackAssetsManifest({
			output: path.resolve(paths.src, "11ty/_data/manifest.json"),
			publicPath: "/",
			writeToDisk: true,
		}),
	],
}
