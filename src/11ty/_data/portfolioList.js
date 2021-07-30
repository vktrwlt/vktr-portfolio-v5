module.exports = [
	{
		id: "netbase-on-tour",
		title: "NetBase On-Tour",
		description: "Event microsite for NetBase On-Tour",
		imagePath: "/assets/images/netbase",
		heroName: "hero",
		url: "/project/netbase-on-tour",
		bgColor: "bg-red-200",
		role: [
			"Tech Lead",
			"Improved page load speeds by 48%",
			"Developed an efficient workflow system",
		],
		tech: [
			"HTML5 / CSS3",
			"React",
			"Gatsby",
			"GraphQL",
			"Airtable CMS",
			"Jenkins",
		],
		about: [
			`NetBase is the next generation consumer and market intelligence platform, delivering contextual insights to reveal business trends, connect with consumers, and understand the story behind competitors and the market. Every year, the marketing team would host a roadshow across the world to demo their platform. The marketing team needed an event microsite that is easy to update and is able to display event details, speaker bios, and agendas for each city that they are visiting.`,
		],
		moreDetails: [
			{
				sectionHeader: "Problem",
				sectionHeaderImageName: "",
				sectionDetails: `The first event site was built on WordPress and Divi theme. The source of truth for the content was all stored in a Google Sheet  and was updated on a regular basis, which means the site have to be updated as well.`,
				sectionFooterImageName: "",
			},
			{
				sectionHeader: "Process",
				sectionHeaderImageName: ``,
				sectionDetails: `Working with the stakeholders, I gathered requirements and scoped out work for the 2nd interation of the event microsite and introduced the team to a JAMstack architecture which has many benefits over the WordPress counterpart. The front-end was built using Gatsby, a React-based static site generator, and the back-end leveraged Airtable as the content management system. Airtable CMS offered a "Google Sheets" experience and offers an API that is simple for developers to work with. Finally I implemented an autonomous CI/CD pipeline that allows the team to update, preview, and deploy content anytime. `,
			},
			{
				sectionHeader: "Result",
				sectionDetails: `After switching to the JAMstack, we observed an increase in workflow efficiency and improved page load times by 48%. Airtable replaces Google Sheets as the source of truth and content changes are automatically updated on the event site whenever the updates are published, thus reducing duplicate work. Developers are also happy since they get to worry less about page performance since the Gatsby framework automates code splitting, image optimization, inlining critical styles, lazy-loading, prefetching resources, and more to ensure the site is fully optimized.`,
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
			"Developed the site based on design specs provided by client",
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
			`Dang Foods is a family-operated Asian snacks company located in the Bay Area and their e-Commerce site was hosted on WordPress. Their CMS configuration was not set-up properly and they were updating content directly onto the templates.`,
			`As a team with another Freelance Developer, we updated the website with the design mockups provided by the client.
			In the process, we implemented Advanced Custom Fields and Custom Post Types to give a much cleaner back-end experience. We completed the task in two weeks and the client was happy that he could make product updates with ease.`,
		],
	},

	{
		id: "11ty-portfolio",
		title: "My portfolio",
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
];
