module.exports = {
	images: {
		loader: "imgix",
		path: "https://a.staticaa.com/images",
	},
	productionBrowserSourceMaps: true,
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
}
