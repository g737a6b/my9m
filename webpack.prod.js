const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
	"resolve": {
		"alias": {
			"vue": "vue/dist/vue.min.js",
			"vue-router": "vue-router/dist/vue-router.min.js"
		}
	}
});
