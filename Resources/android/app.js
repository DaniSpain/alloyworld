var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.force = require("force");

Alloy.Globals.accountSync = require("account_sync");

Alloy.Globals.IS_ANDROID = true;

Alloy.Globals.IS_IOS = false;

Alloy.Globals.top = 0;

Alloy.Globals.tableTop = "50dp";

try {} catch (e) {}

Alloy.createController("index");