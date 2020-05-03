module.exports = [
	{
		id: "11ty-portfolio",
		title: "11ty portfolio",
		description:
			"A static site portfolio built using 11ty, Pug templates, TailwindCSS, and Webpack",
		imagePath: "/assets/images/11ty-portfolio",
		heroName: "hero",
		url: "/project/11ty-portfolio",
		bgColor: "bg-blue-200",
		role: [
			"Used 11ty to generate a portfolio that score all 100's in Google Lighthouse test",
			"Developed a 11ty Tailwind Pug Starter Kit. Available on <a class='text-custom-blue' data-external='true' href='https://github.com/vktrwlt/pugsum' target='_blank' rel='noopener noreferrer' title='View my 11ty Tailwind Pug starter kit on Github'>Github</a>",
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
			`Every year I like to work on my portfolio site and see how I can improve my site to be more performant, user-friendly or accessible. My last portfolio was built with Gatsby and according to Google Lighthouse, takes about 3.6 seconds for it to fully load. I'm pretty sure I can improve that load time.`,
		],
		moreDetails: [
			{
				sectionHeader: "Problem",
				sectionHeaderImageName: "",
				sectionDetails: `My portfolio have a minimalistic design but still takes 3.6 seconds to load, which is very odd. After performing an analysis on my portfolio, I realized the bottle-neck came from my JavaScript files and most of it is due to the Gatsby framework. Since it is a hybrid static site, it does require React to re-hydrate the portfolio. I have minimal need for JavaScript but I can't remove it due to the way the site is generated, so I decided to create a new portfolio with minimal JavaScript.`,
				sectionFooterImageName: "",
			},
			{
				sectionHeader: "Process",
				sectionHeaderImageName: "",
				sectionDetails: `For my new framework, I settled on 11ty, which is a simple static site generator that compiles JavaScript based templates into HTML. For CI/CD, I used Buddy and Netlify to run Lighthouse tests to keep track of my performance scores per build. When the test falls below 100, the build will fail and will output hints on how to fix them.<br/><br/> When I first implemented Google Analytics, it added 1 second to my load time and doubled my loading speed, so I decided to move the script to the end of the body and added an event that will only load GA tracking when the page have finished loading. My bounce rate would not be 100% accurate, but do I want to sacrifice performance for more accurate data? Luckily, it was an easy choice, since I am implementing for a portfolio site, most of my users would be coming from direct traffic. My main demographics would be users that stays and navigates around the site, so having less accurate bounce rate would not be a big factor.`,
			},
			{
				sectionHeader: "Result",
				projectStats: "true",
				sectionDetails: `I rebuilt my portfolio as a true static page and was able to include very minimal JavaScript. Instead of using JavaScript to toggle a mobile navigation menu, I was able to use HTML checkboxes and CSS to replicate the same effect. I also used Webpack to generate and insert a build year on the footer instead of using a Date function. I'm glad there were non JavaScript alternatives to get the same result. What made the development process easier was running automated Lighthouse tests and by using Google Lighthouse performance tips, I was able to create a portfolio thats meets Google's performant criteria and learned a lot about accessibility and performance. &#x1F389;`,
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
