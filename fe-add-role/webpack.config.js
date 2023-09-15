const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const DotenvWebpack = require('dotenv-webpack');
const Dotenv = require('dotenv');

const env = Dotenv.config({ path: '.env' });
const { REMOTES } = env.parsed ? env.parsed : '';

console.log(REMOTES);
const remotes = REMOTES.split(',').map((remote) => {
	const [name, url] = remote.split('@');
	return { name, url };
});

const deps = require('./package.json').dependencies;
module.exports = (_, argv) => ({
	output: {
		publicPath: 'http://localhost:3400/',
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
	},

	devServer: {
		port: 3400,
		historyApiFallback: true,

		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
			'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
		},
	},

	module: {
		rules: [
			{
				test: /\.m?js/,
				type: 'javascript/auto',
				resolve: {
					fullySpecified: false,
				},
			},
			{
				test: /\.(css|s[ac]ss)$/i,
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
			{
				test: /\.(ts|tsx|js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.(png|svg|jpg|jpeg|png|gif)$/i,
				type: 'asset/resource',
			},
		],
	},

	plugins: [
		new ModuleFederationPlugin({
			name: 'fe_role_managament',
			filename: 'remoteEntry.js',
			remotes: remotes.reduce((acc, { name, url }) => ({ ...acc, [name]: `${name}@${url}/remoteEntry.js` }), {}),
			exposes: {
				'./RoleManagement': './src/pages/RoleManagementPage.jsx',
			},
			shared: {
				...deps,
				react: {
					singleton: true,
					requiredVersion: deps.react,
				},
				'react-dom': {
					singleton: true,
					requiredVersion: deps['react-dom'],
				},
			},
		}),
		new HtmlWebPackPlugin({
			template: './src/index.html',
		}),
		new DotenvWebpack(),
	],
});
