/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'batumievents.com',
				port: '',
				pathname: '/text_images/**',
			},
		],
	},
};

module.exports = nextConfig;
