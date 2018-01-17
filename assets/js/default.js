"use strict";

const eventHandler = function(){
	// coming soon
};

if( document.readyState !== "loading" ){
	eventHandler();
}else{
	document.addEventListener("DOMContentLoaded", eventHandler);
}
