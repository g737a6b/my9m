const webpack = require("webpack");

module.exports = {
	entry: {
		"js/default": "src/default.js",
		"js/app": "src/app.js",
		"sw": "src/sw.js"
	},
	output: {
		filename: "[name].js",
		path: __dirname
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
	optimization: {
		minimize: true
	}
};
