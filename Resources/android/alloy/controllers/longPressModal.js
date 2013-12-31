function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "longPressModal";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.longPressModal = Ti.UI.createWindow({
        backgroundColor: "#ffffff",
        modal: "true",
        id: "longPressModal"
    });
    $.__views.longPressModal && $.addTopLevelView($.__views.longPressModal);
    $.__views.header = Ti.UI.createView({
        top: Alloy.Globals.top,
        height: "50dp",
        width: Ti.UI.FILL,
        backgroundColor: "#ff8a00",
        id: "header"
    });
    $.__views.longPressModal.add($.__views.header);
    $.__views.headerTitle = Ti.UI.createLabel({
        left: "10dp",
        color: "#fff",
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        id: "headerTitle"
    });
    $.__views.header.add($.__views.headerTitle);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;