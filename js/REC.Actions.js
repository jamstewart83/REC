REC.Actions = (function(){
	var actions = {}, // Public object to be return
	actionStore = JSON.parse(window.localStorage["actions"]) || []; // Current store of actions

	console.log("Stored Actions",actionStore);

	actions.add = function (event){ 
		actionStore.push(event);
		window.localStorage["actions"] = JSON.stringify(actionStore);
		console.log("Action Added",actionStore);
	};

	actions.playback = function (i){
		
		if(i){
			REC.trigger(actionStore[i].playbackEvent,actionStore[i]);
		}
		else {
			for(var i = 0,j = actionStore.length;i < j;i++){
				REC.trigger(actionStore[i].playbackEvent,actionStore[i]);
			}
		}

	};

	actions.reset = function(){
		actionStore = [];
	};
	
	return actions;

})();