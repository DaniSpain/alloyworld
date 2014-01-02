var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.force = require("force");

Alloy.Globals.accountSync = require("account_sync");

Alloy.Globals.IS_ANDROID = true;

Alloy.Globals.IS_IOS = false;

Alloy.Globals.rowTextColor = "#ffffff";

Alloy.Globals.top = 0;

Alloy.Globals.tableTop = "50dp";

try {} catch (e) {}

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