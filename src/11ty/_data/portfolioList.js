module.exports = [
	{
		id: "pugsum",
		title: "Pugsum",
		description:
			"When you combine pug and possum(11ty) to make something awesome, a 11ty portfolio using Pug templates",
		imagePath: "/assets/images/pugsum",
		url: "/project/pugsum",
		bgColor: "bg-blue-200",
		role: [
			"Used 11ty to generate a portfolio that score all 100's in Google Lighthouse test",
			"Developed a 11ty Tailwind Pug Starter Kit, check it out <a class='underline text-custom-blue' href='https://pugsum.netlify.com/' target='_blank'>here</a>",
		],
		tech: [
			"11ty",
			"TailwindCSS",
			"SCSS",
			"Pug",
			"Webpack",
			"PWA",
			"Netlify",
			"CI/CD",
		],
		about: [
			`Every year I like to work on my portfolio site and see how I can improve my site to be more performant, user-friendly or accessible. My last portfolio was built in React with Gatsby and out of the box, it performed a-lot of code optimization and took about 3.8 seconds to load on a simulated test.`,
		],
		moreDetails: [
			{
				sectionHeader: "Problem",
				sectionHeaderImageName: "",
				sectionDetails: `3.8 seconds to fully load is not slow but Google's benchmark for a performant site is under 3 seconds. After performing an analysis of my portfolio, I realized I didn't have much need for client-side JavaScript and most my interactions can be done with HTML and CSS. I built my site with React, so I cant just remove the JavaScript bundle, so I will have to rebuild my portfolio.`,
				sectionFooterImageName: "",
			},
			{
				sectionHeader: "Process",
				sectionHeaderImageName: "",
				sectionDetails: `For my new framework, I settled on 11ty, which is a simple static site generator that outputs HTML and lets you use a variety of JS based templating languages. For CI/CD, I used Buddy and Netlify to deploy and run Google Lighthouse tests to keep track of my performance scores per build. Most issues were easily fixed and the audit will give tips on how to fix them. When I got to implementing Google Analytics, it added 1 second to my load time and my loading speed almost doubled, so I decided to move the script to the end of the body and added an listener that will only load GA tracking when the page have finished loading. My load time went back to normal but my bounce rate would not be 100% accurate. Do I want to sacrifice performance for more accurate data? Luckily I am implementing for a portfolio site so most traffic would be direct and I would only care about the users that actually navigate on my site.`,
			},
			{
				sectionHeader: "Result",
				sectionHeaderImageName: "results-header",
				sectionDetails: `I refreshed the design of my portfolio and the only Javascripts on my site is related to tracking and service workers. For the mobile navigation menu, I used HTML checkboxes and CSS instead of a JavaScript Click function. I also used Webpack to generate a build date into the footer instead of relying on a date function as most article suggests. By using Google Lighthouse performance tips, I was able to create a portfolio thats loads under 1 second and learned a lot about accessibility and performance. &#x1F389;`,
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
		title: "Dangfoods",
		description:
			"Custom WordPress Development for Dangfood's <span class='inline-block'>e-Commerce</span> site",
		imagePath: "/assets/images/dangfoods",
		headerUrl: "/assets/images/dangfoods/header.jpg",
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
			In the process, we also implemented Advanced Custom Fields and Custom Post Types to give a much cleaner backend experience. We completed the task in two weeks and the client was happy that he could make product updates with ease.`,
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
