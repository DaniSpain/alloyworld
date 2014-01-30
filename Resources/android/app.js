var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.force = require("force");

Alloy.Globals.accountSync = require("account_sync");

Alloy.Globals.picklistSync = require("picklist_sync");

Alloy.Globals.picklistData = require("picklist_data");

Alloy.Globals.rowTextColor = "#000000";

Alloy.Globals.top = 0;

Alloy.Globals.tableTop = "50dp";

try {} catch (e) {}

Alloy.Globals.force.authorize({
    success: function() {
        Titanium.API.info("Authenticated to salesforce");
        Alloy.Globals.accountSync.fetchAccounts();
        Alloy.Globals.picklistSync.fetchPicklists();
    },
    error: function() {
        alert("error");
    },
    cancel: function() {
        alert("cancel");
    }
});

Alloy.createController("index");