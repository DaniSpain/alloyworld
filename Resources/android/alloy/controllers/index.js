function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.loading = Alloy.createWidget("com.appcelerator.loading", "widget", {
        id: "loading",
        __parentSymbol: $.__views.index
    });
    $.__views.loading.setParent($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.loading.setOpacity(1);
    Alloy.Globals.force.authorize({
        success: function() {
            Titanium.API.info("Authenticated to salesforce");
            Alloy.Globals.accountSync.fetchAccounts();
            Titanium.API.info("Opening Home...");
            var homeView = Alloy.createController("home").getView();
            $.loading.setOpacity(0);
            homeView.open();
        },
        error: function() {
            alert("error");
        },
        cancel: function() {
            alert("cancel");
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;