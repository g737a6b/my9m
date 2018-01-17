"use strict";

import Vue from "vue";
import VueRouter from "vue-router";
import appMain from "src/vue_components/app_main.vue";
import appAdd from "src/vue_components/app_add.vue";
import appList from "src/vue_components/app_list.vue";

Vue.use(VueRouter);

let tasks = [];
if( window.localStorage ){
	const storageData = window.localStorage.getItem("tasks");
	if( storageData ) tasks = JSON.parse(storageData);
}

const eventHandler = function(){
	const router = new VueRouter({
		mode: "history",
		routes: [
			{name: "home", path: window.payload.homeUrl + "/", component: appMain, props: () => ({tasks})},
			{name: "add", path: window.payload.homeUrl + "/add", component: appAdd, props: () => ({tasks})},
			{name: "list", path: window.payload.homeUrl + "/list", component: appList, props: () => ({tasks})}
		]
	});
	new Vue({
		el: "#wrapper",
		router,
		methods: {
			updateStorage: function(items){
				tasks = items;
				if( !window.localStorage ) return;
				window.localStorage.setItem("tasks", JSON.stringify(items));
			}
		}
	});
};

if( document.readyState !== "loading" ){
	eventHandler();
}else{
	document.addEventListener("DOMContentLoaded", eventHandler);
}
