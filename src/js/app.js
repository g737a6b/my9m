"use strict";

import Vue from "vue";
import VueRouter from "vue-router";
import appMain from "src/vue_components/app_main.vue";
import appAdd from "src/vue_components/app_add.vue";
import appList from "src/vue_components/app_list.vue";
import pageAbout from "src/vue_components/about.vue";
import pageHelp from "src/vue_components/help.vue";

Vue.use(VueRouter);

let tasks = [];
let theme = "";
if( window.localStorage ){
	const storageTasks = window.localStorage.getItem("tasks");
	if( storageTasks ) tasks = JSON.parse(storageTasks);
	const storageTheme = window.localStorage.getItem("theme");
	if( storageTheme ) theme = storageTheme;
	if( WEBPACK_MODE === "development" ){
		console.log("Loaded my9 storage.", tasks.length, theme);
	}
}

/**
 * @type {object}
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
 */
const keyCodes = {
	a: 65,
	g: 71,
	h: 72,
	l: 76
};

/**
 * ショートカットキーを登録します
 *
 * @param {object} router
 */
function registerShortcutKeys(router){
	let previousKey = -1;
	window.addEventListener("keydown", function(e){
		if( document.querySelector("input:focus, textarea:focus") ) return;
		if( previousKey === keyCodes.g ){
			let shouldPrevent = true;
			switch(e.keyCode){
				case keyCodes.a: router.push({path: window.payload.homePath + "/add"}); break;
				case keyCodes.h: router.push({path: window.payload.homePath + "/"}); break;
				case keyCodes.l: router.push({path: window.payload.homePath + "/list"}); break;
				default: shouldPrevent = false;
			}
			if( shouldPrevent ) e.preventDefault();
		}
		previousKey = e.keyCode;
	});
}

const eventHandler = function(){
	const router = new VueRouter({
		mode: "hash",
		routes: [
			{
				name: "home",
				path: window.payload.homePath + "/",
				component: appMain,
				props: () => ({tasks, theme})
			}, {
				name: "add",
				path: window.payload.homePath + "/add",
				component: appAdd,
				props: () => ({tasks, theme})
			}, {
				name: "list",
				path: window.payload.homePath + "/list",
				component: appList,
				props: () => ({tasks, theme})
			}, {
				name: "about",
				path: window.payload.homePath + "/about",
				component: pageAbout
			}, {
				name: "help",
				path: window.payload.homePath + "/help",
				component: pageHelp
			}
		],
		scrollBehavior: (to, from, savedPosition) => {
			if( savedPosition ){
				return savedPosition;
			}else{
				return {x: 0, y: 0};
			}
		}
	});
	new Vue({
		el: "#wrapper",
		router,
		methods: {
			updateStorage: (newTasks, newTheme) => {
				tasks = newTasks;
				if( window.localStorage ){
					window.localStorage.setItem("tasks", JSON.stringify(newTasks));
				}
				if( typeof newTheme === "string" ){
					theme = newTheme;
					if( window.localStorage ){
						window.localStorage.setItem("theme", newTheme);
					}
				}
				if( WEBPACK_MODE === "development" ){
					console.log("Updated my9 storage.", tasks.length, theme);
				}
			}
		}
	});
	registerShortcutKeys(router);
};

if( document.readyState !== "loading" ){
	eventHandler();
}else{
	document.addEventListener("DOMContentLoaded", eventHandler);
}

window.addEventListener("load", function(){
	if( !("serviceWorker" in navigator) ) return;
	navigator.serviceWorker.register(window.payload.homePath + "/sw.js");
});
