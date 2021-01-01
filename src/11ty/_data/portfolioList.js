module.exports = [
	{
		id: "11ty-portfolio",
		title: "11ty portfolio",
		description:
			"A static site portfolio built using 11ty, Pug templates, TailwindCSS, <span class='inline-block'>and Webpack</span>",
		imagePath: "/assets/images/11ty-portfolio",
		heroName: "hero",
		url: "/project/11ty-portfolio",
		bgColor: "bg-blue-200",
		role: [
			"Used 11ty to generate a portfolio that score all 100's in Google Lighthouse test",
		],
		tech: ["11ty", "TailwindCSS", "SCSS", "Pug", "Webpack", "Netlify", "CI/CD"],
		about: [
			`Every year I like to work on my portfolio site and see how I can improve my site to be more performant, user-friendly or accessible. My last portfolio was built with Gatsby and according to Google Lighthouse, took about 4.4 seconds to fully load.`,
		],
		moreDetails: [
			{
				sectionHeader: "Problem",
				sectionHeaderImageName: "",
				sectionDetails: `My Gatsby portfolio had a minimalistic design and still takes 4.4 seconds to load. After performing an analysis on the site, I realized the bottle-neck came from the Gatsby framework. Since it is a hybrid static site, it does require React to re-hydrate the website. I didn't have a heavy need for JavaScript but can't really remove it without breaking my site, so I decided to rebuild my portfolio as a true static site.`,
				sectionFooterImageName: "",
			},
			{
				sectionHeader: "Process",
				sectionHeaderImageName: "",
				sectionDetails: `For my new framework, I settled on 11ty, which is a simple static site generator that compiles JavaScript templates into HTML.
				11ty lets you use a variety of server-side JS templates, I chosed Pug because it has a very succint syntax. As for styling, I went with TailwindCSS because it lets me iterate on my porfolio faster and I didnt have to write a lot of css, instead I would chain their utilities classes to create the styling that I need. During the production build proccess, the unused styles are stripped out and the css file is minified and inlined into the HTML file. For CI/CD, I used Buddy and Netlify to run Lighthouse tests to keep track of my performance scores per build. When the test falls below 100, the build will fail and will output hints on how to fix them.`,
			},
			{
				sectionHeader: "Result",
				projectStats: "true",
				sectionDetails: `I rebuilt my portfolio as a true static page and was able to include very minimal JavaScript. While Gatsby did come with code and build optimizations out of the box, I was able to create a similar version with 75% faster load times by switching to 11ty. During the process, I learned a lot about performance and accesibility and was able to create a website thats meets Google's performant criteria. &#x1F389;`,
				sectionFooterImageName: "",
			},
		],
	},
	// {
	// 	title: "NetBase Pro",
	// 	description: "Event microsite for company's tradeshows and conferences",
	// 	imageUrl:
	// 		"https://www.mamp.info/__we_thumbs__/1284_4_MAMP-PRO-MacBook-Pro.png",
	// 	url: "/netbase-pro",
	// 	bgColor: "bg-red-200",
	// },
	{
		id: "dangfoods",
		title: "Dang foods",
		description:
			"Custom WordPress Development for Dang foods' <span class='inline-block'>e-Commerce</span> site",
		imagePath: "/assets/images/dangfoods",
		heroName: "hero",
		url: "/project/dangfoods",
		bgColor: "bg-green-200",
		role: [
			"Front-End Developer",
			"Redesigned the site based on design specs provided by client",
			"Added Advanced Custom Fields for end-users to upload products with ease",
		],
		tech: [
			"HTML5 / CSS3",
			"WordPress",
			"PHP",
			"jQuery",
			"Zurb Foundation",
			"Adobe Photoshop",
		],
		about: [
			`Dang Foods is a family-operated Asian snacks company located in the Bay Area. Their current setup was not working well for them. Even though it was hosted on WordPress, they were making  conent updates directly on the templates.`,
			`As a team with another Freelance Developer, we refreshed the look of the website with the design specs provided by the client.
			In the process, we implemented Advanced Custom Fields and Custom Post Types to give a much cleaner backend experience. We completed the task in two weeks and the client was happy that he could make product updates with ease.`,
		],
	},
	// {
	// 	title: "Klipfolio Visualizations",
	// 	description: "Event microsite for company's tradeshows and conferences",
	// 	imageUrl:
	// 		"https://www.mamp.info/__we_thumbs__/1284_4_MAMP-PRO-MacBook-Pro.png",
	// 	url: "/klipfolio",
	// 	bgColor: "bg-purple-200",
	// },
];
