const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => ({
	entry: {
		"docs/js/app": "src/app.js",
		"docs/sw": "src/sw.js"
	},
	output: {
		filename: "[name].js",
		path: __dirname
	},
	resolve: {
		alias: {
			"src": __dirname + "/assets/js",
			"vuedraggable": "vuedraggable/dist/vuedraggable.js",
			"vue": ( argv.mode === "production" ) ? "vue/dist/vue.min.js" : "vue/dist/vue.js",
			"vue-router": ( argv.mode === "production" ) ? "vue-router/dist/vue-router.min.js" : "vue-router/dist/vue-router.js"
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
			},
			{
				test: /\.ejs$/,
				use: "ejs-compiled-loader"
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: "./docs/index.html",
			template: "./assets/js/templates/frame.ejs",
			inject: false
		})
	],
	optimization: {
		minimize: true
	}
});
