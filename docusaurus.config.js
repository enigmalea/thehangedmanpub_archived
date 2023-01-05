// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "The Hanged Man",
	url: "https://thehangedmanpub.netlify.app/",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					routeBasePath: "/",
					breadcrumbs: false,
					sidebarPath: require.resolve("./sidebars.js"),
				},
				blog: {
					showReadingTime: true,
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			respectPrefersColorScheme: true,
			docs: {
				sidebar: {
					hideable: true,
				},
			},
			navbar: {
				title: "The Hanged Man",
				logo: {
					alt: "The Hanged Man Logo",
					src: "img/logo.gif",
				},
				items: [
					{
						type: "dropdown",
						label: "Communities",
						position: "left",
						items: [
							{
								label: "Discord",
								href: "https://discord.gg/9RERC6R",
							},
							{
								label: "Pillowfort",
								href:
									"https://www.pillowfort.social/community/The%20Hanged%20Man%20Discord",
							},
							{
								label: "Dreamwidth",
								href: "https://hangedmanpub.dreamwidth.org",
							},
						],
					},
					{
						type: "dropdown",
						label: "Events",
						position: "left",
						items: [
							{
								label: "Dragon Age Polyshipping",
								href: "https://dapolyshipping.neocities.org",
							},
							{
								label: "Arlathan eXchange",
								href: "https://arlathanxchange.neocities.org/",
							},
						],
					},
					{
						type: "dropdown",
						label: "Social",
						position: "right",
						items: [
							{
								label: "Tumblr",
								href: "https://thehangedmanpub.tumblr.com",
							},
							{
								label: "Twitter",
								href: "https://twitter.com/thehangedmanpub",
							},
						],
					},
				],
			},
			footer: {
				copyright: `Copyright © ${new Date().getFullYear()} The Hanged Man. Built with Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
