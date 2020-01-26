"use strict";

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let tasks = [];
let theme = "";
if( window.localStorage ){
	const storageTasks = window.localStorage.getItem("tasks");
	if( storageTasks ){
		tasks = JSON.parse(storageTasks);
	}
	const storageTheme = window.localStorage.getItem("theme");
	if( storageTheme ){
		theme = storageTheme;
	}
}
if( WEBPACK_MODE === "development" ){
	console.log("Loaded my9 storage.", tasks.length, theme);
}

const debug = WEBPACK_MODE !== "production";

export default new Vuex.Store({
	state: {
		tasks: tasks,
		theme: theme
	},
	strict: debug,
	mutations: {
		updateTasks: function(state, value){
			state.tasks = value;
			if( window.localStorage ){
				window.localStorage.setItem("tasks", JSON.stringify(state.tasks));
			}
		},
		addTask: function(state, value){
			state.tasks.push(value);
			if( window.localStorage ){
				window.localStorage.setItem("tasks", JSON.stringify(state.tasks));
			}
		},
		updateTheme: function(state, value){
			state.theme = value;
			if( window.localStorage ){
				window.localStorage.setItem("theme", state.theme);
			}
		}
	}
});
