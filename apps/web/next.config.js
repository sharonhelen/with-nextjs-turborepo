/** @type {import('next').NextConfig} */
import path from 'path';
const nextConfig = {
	webpack: (config) => {
		config.resolve.alias = {
			...config.resolve.alias,
			'@': path.resolve(__dirname, './'),
			'@/components': path.resolve(__dirname, './components'),
			'@/layouts': path.resolve(__dirname, './layouts'),
			'@/styles': path.resolve(__dirname, './styles'),
			'@/assets': path.resolve(__dirname, './assets')
		}
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		})
		return config
	}
};

export default nextConfig;
