module.exports = {
	siteMetadata: {
		title: 'Brendan Maclean Web Services',
		description:
			'Creating professional, high-powered web experiences for local businesses.',
		keywords: [
			'web design',
			'website design',
			'website',
			'web development',
			'website',
			'lethbridge',
			'alberta'
		],
		siteUrl: 'https://www.brendanmaclean.co/',
		author: '@bmaclean05'
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'Brendan Maclean Web Services',
				short_name: 'bmwebservices',
				start_url: '/',
				background_color: '#0B1722',
				theme_color: '#3D52D5',
				display: 'minimal-ui',
				icon: 'src/images/curly-brackets.png'
			}
		}
	]
};
