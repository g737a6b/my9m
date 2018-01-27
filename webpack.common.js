const webpack = require("webpack");

module.exports = {
	entry: {
		"default": "src/default.js",
		"app": ["babel-polyfill", "src/app.js"]
	},
	output: {
		filename: "[name].js",
		path: __dirname + "/js"
	},
	resolve: {
		alias: {
			"src": __dirname + "/assets/js",
			"vuedraggable": "vuedraggable/dist/vuedraggable.js"
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					"babel-loader",
					"eslint-loader"
				]
			},
			{
				test: /\.vue$/,
				loader: "vue-loader",
				options: {
					loaders: {
						js: "babel-loader!eslint-loader",
						css: "vue-style-loader!css-loader"
					}
				}
			}
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin()
	]
};
