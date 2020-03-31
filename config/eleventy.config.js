const pug = require("pug")
const projectVars = require("../src/11ty/_data/project")

module.exports = function (eleventyConfig) {
	eleventyConfig.setLibrary("pug", pug)

	// Include our static assets for every build
	eleventyConfig.addPassthroughCopy({ "src/images": "images" })
	eleventyConfig.addPassthroughCopy("robots.txt")

	// minify the html output when running in prod
	if (projectVars.production) {
		eleventyConfig.addTransform(
			"htmlmin",
			require("../build/scripts/minify-html")
		)
	}

	return {
		dir: {
			input: "src/11ty/pages",
			output: "dist",
			includes: "../_includes",
			data: "../_data",
		},
	}
}
