// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
Alloy.Globals.force = require('force');
Alloy.Globals.accountSync = require('account_sync');
Alloy.Globals.IS_ANDROID = (Titanium.Platform.osname == "android") ? true : false;
Alloy.Globals.IS_IOS = ((Titanium.Platform.osname == "iphone")||(Titanium.Platform.osname == "ipad")) ? true : false;

Alloy.Globals.rowTextColor = "#ffffff";
if (OS_IOS) Alloy.Globals.rowTextColor = "#000000";

if (OS_IOS || OS_ANDROID) {
	//Alloy.Collections.todo = Alloy.createCollection('todo');
	Alloy.Globals.top = 0;
	Alloy.Globals.tableTop = '50dp';

	try {
		// check for iOS7
		if (OS_IOS && parseInt(Titanium.Platform.version.split(".")[0], 10) >= 7) {
			Alloy.Globals.top = '20dp';
			Alloy.Globals.tableTop = '70dp';
		}
	} catch(e) {
		// catch and ignore
	}
}

Alloy.Globals.force.authorize({
	success: function() {
		//If we're logged in, create a very simple accounts UI
		//var ui = require('ui');
		//var w = ui.createAppWindow();
		//w.open();
		Titanium.API.info("Authenticated to salesforce");
		Alloy.Globals.accountSync.fetchAccounts();
		Titanium.API.info("Opening Home...");
		var homeView = Alloy.createController('home').getView();
		homeView.open();
		
	},
	error: function() {
		alert('error');
	},
	cancel: function() {
		alert('cancel');
	}
});	