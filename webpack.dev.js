const merge = require("webpack-merge");
const common = require("./webpack.js");

module.exports = merge(common, {
	"resolve": {
		"alias": {
			"vue": "vue/dist/vue.js",
			"vue-router": "vue-router/dist/vue-router.js"
		}
	}
});
