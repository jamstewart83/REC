var rec = rec || {};

/**
 * This is the Recording Links object.  Write documentation about Recording Links
 * @return {object} This object exposes the public properties and methods of this object
 */
var rec.links = (function () {
	// Set to strict
	"use strict";

	var play = function () { throw new Error("Play hasn't been defined."); },
		actions = localStorage['actions'] || "[]";

	actions = JSON.parse(actions);

	localStorage.clear();

	var links = document.getElementsByTagName("a");

	for (var i = links.length - 1; i >= 0; i--) {
		links[i].setAttribute("data-id","a-" + i);
	};

	document.addEventListener("click", function (e) {
		if(e.target.hash === "#play"){
			play();
			e.preventDefault();
		}
		else if(e.target.tagName === "A") {
			actions.push(e.target.getAttribute("data-id"));
			localStorage['actions']=JSON.stringify(actions);
			console.log(e.target.getAttribute("data-id"));
		}

	});

	play = function () {
		for (var i = links.length - 1; i >= 0; i--) {
			console.log(actions);
			if (actions.indexOf(links[i].getAttribute("data-id")) > -1 && links[i].hash !== "#play") {
				console.log("invoke click");
				var evt = document.createEvent("MouseEvents");
	  			evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
	
				links[i].dispatchEvent(evt);
			}
		}
	}


}());