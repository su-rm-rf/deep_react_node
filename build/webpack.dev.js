const { resolve, join } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HandleWebpackPlugin = require('../src/plugins/handle')

module.exports = {
	mode: 'development',
	entry: {
		main: './src/main.tsx',
	},
	output: {
		path: resolve(__dirname, '../dist'),
		filename: '[name].[contenthash].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
				]
			},
			// {
			// 	test: /\.js/,
			// 	use: [
			// 		{
			// 			loader: resolve(__dirname, '../src/loaders/abc.js'),
			// 		}
			// 	]
			// }
		]
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.jsx', '.js', '.json', '.scss'],
		alias: {
			'@': join(__dirname, '../src')
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'xxx',
			template: join(__dirname, '../public/index.html')
		}),
		new HandleWebpackPlugin({
			options: true
		})
	],
	devServer: {
		port: 9101,
		historyApiFallback: true,
	}
}
