REC.Action = (function (e){
	var action = {};

	// Store what we need from the event object
	action.target = e.target.valueOf();
	action.type = e.type;
	// This allows us to specify an event our action should respond to on playback
	action.playbackEvent = 'playback';

	// Create an empty object we can add custom data to
	action.data = {};

	return 	action;

})