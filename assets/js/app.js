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
				case keyCodes.a: router.push({path: window.payload.homeUrl + "/add"}); break;
				case keyCodes.h: router.push({path: window.payload.homeUrl + "/"}); break;
				case keyCodes.l: router.push({path: window.payload.homeUrl + "/list"}); break;
				default: shouldPrevent = false;
			}
			if( shouldPrevent ) e.preventDefault();
		}
		previousKey = e.keyCode;
	});
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
	registerShortcutKeys(router);
};

if( document.readyState !== "loading" ){
	eventHandler();
}else{
	document.addEventListener("DOMContentLoaded", eventHandler);
}

window.addEventListener("load", function(){
	if( !("serviceWorker" in navigator) ) return;
	navigator.serviceWorker.register(window.payload.homeUrl + "/sw.js");
});
