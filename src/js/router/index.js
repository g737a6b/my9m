"use strict";

import Vue from "vue";
import VueRouter from "vue-router";
import pageHome from "src/components/pages/home.vue";
import pageAdd from "src/components/pages/add.vue";
import pageList from "src/components/pages/list.vue";
import pageAbout from "src/components/pages/about.vue";
import pageHelp from "src/components/pages/help.vue";

Vue.use(VueRouter);

export default new VueRouter({
	mode: "hash",
	routes: [{
		name: "home",
		path: window.payload.homePath + "/",
		component: pageHome
	}, {
		name: "add",
		path: window.payload.homePath + "/add",
		component: pageAdd
	}, {
		name: "list",
		path: window.payload.homePath + "/list",
		component: pageList
	}, {
		name: "about",
		path: window.payload.homePath + "/about",
		component: pageAbout
	}, {
		name: "help",
		path: window.payload.homePath + "/help",
		component: pageHelp
	}],
	scrollBehavior: (to, from, savedPosition) => {
		if( savedPosition ){
			return savedPosition;
		}else{
			return {x: 0, y: 0};
		}
	}
});
