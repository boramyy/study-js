const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
	mode: 'development' /*production*/,
	entry: ['./src/assets/css/app.scss', './src/index.js'],
	output: {
		filename: './bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
			{
				test: /\.(png|jpg|gif)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: false,
						},
					},
				],
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							implementation: require('sass'),
						},
					},
				],
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: ['@babel/preset-env'],
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			templateParameters: {
				// 템플릿에 주입할 파라매터 변수 지정
				env: process.env.NODE_ENV === 'development' ? '' : '',
			},
			minify:
				process.env.NODE_ENV === 'production'
					? {
							collapseWhitespace: true, // 빈칸 제거
							removeComments: true, // 주석 제거
					  }
					: false,
			template: './index.html',
		}),
	],
};
