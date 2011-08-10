REC.Action.Form = (function(){
	
	var init = function(e){
		if((e.target.tagName === 'INPUT' && e.target.type.toUpperCase() === 'SUBMIT') || e.target.tagName === 'BUTTON'){
			// Get form parent of the button clicked

			// Find all form values within the form and save into .data object

			// Define a new .execute method that finds the relevant form and sets the fields before submitting
		}
	}
	
	// Add event listener to decide
	REC.bind('rec-action',init);

}());