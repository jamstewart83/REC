/**
 * Site recording framework that records website actions during a browser session.
 * @return {[type]} [description]
 */
var REC = (function(){
	var rec={}, // Empty object to store all public properties
	customEvents = [] // Arrary to store all listening objects

	var status = rec.status = 'off' // The current status of REC off/play/pause/record

	// Handler fired to decide whether it is a REC action or site action
	var actionHandler = (function(e){
		if(e.target.className.indexOf('rec-') > -1){
			performAction(e);
			e.preventDefault();
		}
		else if(status === 'record'){
			trigger('rec-action',e)
		}
	});

	// Function which performs the required REC action
	var performAction = function (e){
		switch(e.target.className){
			case 'rec-record':{
				status='record';
				REC.Actions.reset();
				break;
			}
			case 'rec-play':{
				status='play';
				REC.Actions.playback();
				break;
			}
			case 'rec-pause':{
				status='pause';
				break;
			}
			case 'rec-save':{
				status='off';
				break;
			}
		}
	}

	// Constructor - run after all private fucntions it calls have been declared
	var constructor = (function (){
		var body = document.getElementsByTagName('body')[0];

		body.onclick = function (e){
			actionHandler(e);
		}
	}());

	// Function that allows new actions to listen 
	rec.bind = function(name, response){
		customEvents[name] = customEvents[name] || [];
		customEvents[name].push(response);
	}

	var trigger = rec.trigger = function(name,data){
		var events = customEvents[name];

		for(var i = 0,j = events.length;i < j;i++){
			events[i].call(this,data);
		}
	}

	return rec; // Return object to ensure namespace can continue

})();