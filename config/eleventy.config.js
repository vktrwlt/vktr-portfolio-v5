const pug = require("pug");
const projectVars = require("../src/11ty/_data/project");
const pluginPWA = require("eleventy-plugin-pwa");
module.exports = function (eleventyConfig) {
	eleventyConfig.setLibrary("pug", pug);

	// Include our static assets for every build
	eleventyConfig.addPassthroughCopy({ "src/images": "images" });

	// minify the html output when running in prod
	if (projectVars.production) {
		eleventyConfig.addTransform(
			"htmlmin",
			require("../build/scripts/minify-html")
		);
	}
	eleventyConfig.addPlugin(pluginPWA);
	// Copy `static/root` to `dist/`
	eleventyConfig.addPassthroughCopy({ "static/root": "/" });
	console.log(projectVars.time);
	return {
		dir: {
			input: "src/11ty/pages",
			output: "dist",
			includes: "../_includes",
			data: "../_data",
		},
	};
};
