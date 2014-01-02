function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "row";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.row = Ti.UI.createTableViewRow({
        height: "100dp",
        color: Alloy.Globals.rowTextColor,
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.accountName = Ti.UI.createLabel({
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        left: "10dp",
        id: "accountName",
        text: "undefined" != typeof $model.__transform["Name"] ? $model.__transform["Name"] : $model.get("Name")
    });
    $.__views.row.add($.__views.accountName);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;