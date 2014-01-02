var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.force = require("force");

Alloy.Globals.accountSync = require("account_sync");

Alloy.Globals.IS_ANDROID = "android" == Titanium.Platform.osname ? true : false;

Alloy.Globals.IS_IOS = "iphone" == Titanium.Platform.osname || "ipad" == Titanium.Platform.osname ? true : false;

Alloy.Globals.rowTextColor = "#000000";

Alloy.Globals.top = 0;

Alloy.Globals.tableTop = "50dp";

try {
    if (true && parseInt(Titanium.Platform.version.split(".")[0], 10) >= 7) {
        Alloy.Globals.top = "20dp";
        Alloy.Globals.tableTop = "70dp";
    }
} catch (e) {}

Alloy.Globals.force.authorize({
    success: function() {
        Titanium.API.info("Authenticated to salesforce");
        Alloy.Globals.accountSync.fetchAccounts();
        Titanium.API.info("Opening Home...");
        var homeView = Alloy.createController("home").getView();
        homeView.open();
    },
    error: function() {
        alert("error");
    },
    cancel: function() {
        alert("cancel");
    }
});

Alloy.createController("index");