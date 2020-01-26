"use strict";

import Vue from "vue";
import store from "./store";
import router from "./router";

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
				case keyCodes.a:
					router.push({path: window.payload.homePath + "/add"});
					break;
				case keyCodes.h:
					router.push({path: window.payload.homePath + "/"});
					break;
				case keyCodes.l:
					router.push({path: window.payload.homePath + "/list"});
					break;
				default: shouldPrevent = false;
			}
			if( shouldPrevent ) e.preventDefault();
		}
		previousKey = e.keyCode;
	});
}

const eventHandler = function(){
	new Vue({
		el: "#wrapper",
		router,
		store
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
