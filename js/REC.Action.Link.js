REC.Action.Link = (function(){
	
	var init = function(e){
		if(e.target.tagName === 'A'){
			// Create an instance of REC.Action and set execute if different from default
			var linkAction = new REC.Action(e);

			// Add new action to Actions
			REC.Actions.add(linkAction);

		}
	}

	var execute = function(object){
		console.log(object);
	}
	
	// Listen for rec-action event to do something when an action happens
	REC.bind('rec-action',init);

	// Listen for the approriate playback event
	REC.bind('playback',execute);

}());