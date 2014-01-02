var args = arguments[0] || {};

$.account.open();

function closeWindow(e) {
	$.account.close();	
}

// Encase the title attribute in square brackets
function transformFunction(model) {
    // Need to convert the model to a JSON object
    //var transform = model.toJSON();
    var transform = model;
    /*
    transform.title = '[' + transform.title + ']';
    // Example of creating a custom attribute, reference in the view using {custom}
    transform.custom = transform.title + " by " + transform.author;
    */
    return transform;
}

// Show only book models by Mark Twain
function filterFunction(collection) {
    //return collection.where({author:'Mark Twain'});
	return collection;
}

// Trigger the synchronization
var accounts = Alloy.Collections.account;
accounts.fetch();
 
function newAccount() {
	var addView = Alloy.createController('newAccount').getView();
	addView.open();
}

// Free model-view data binding resources when this view-controller closes
$.account.addEventListener('close', function() {
    $.destroy();
});

$.tblView.addEventListener('longpress', function(e) {
    alert(e.row);
});
