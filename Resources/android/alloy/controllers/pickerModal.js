function Controller() {
    function __alloyId37(e) {
        if (e && e.fromAdapter) return;
        __alloyId37.opts || {};
        var models = __alloyId36.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId33 = models[i];
            __alloyId33.__transform = {};
            var __alloyId34 = Ti.UI.createTableViewRow({
                height: "80dp"
            });
            rows.push(__alloyId34);
            var __alloyId35 = Ti.UI.createLabel({
                color: "#000000",
                font: {
                    fontSize: "18dp"
                },
                text: "undefined" != typeof __alloyId33.__transform["Value"] ? __alloyId33.__transform["Value"] : __alloyId33.get("Value")
            });
            __alloyId34.add(__alloyId35);
        }
        $.__views.tblView.setData(rows);
    }
    function closeWindow() {
        $.pickerModal.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "pickerModal";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("picklist");
    $.__views.pickerModal = Ti.UI.createWindow({
        backgroundColor: "transparent",
        navBarHidden: "true",
        id: "pickerModal"
    });
    $.__views.pickerModal && $.addTopLevelView($.__views.pickerModal);
    $.__views.__alloyId32 = Ti.UI.createView({
        width: "300dp",
        height: "300dp",
        borderColor: "gray",
        id: "__alloyId32"
    });
    $.__views.pickerModal.add($.__views.__alloyId32);
    $.__views.header = Ti.UI.createView({
        top: "0",
        height: "50dp",
        width: Ti.UI.FILL,
        backgroundColor: "#ff8a00",
        id: "header"
    });
    $.__views.__alloyId32.add($.__views.header);
    $.__views.headerTitle = Ti.UI.createLabel({
        color: "#fff",
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        left: "10dp",
        text: "Industries",
        id: "headerTitle"
    });
    $.__views.header.add($.__views.headerTitle);
    $.__views.closeView = Ti.UI.createView({
        top: 0,
        bottom: 0,
        right: 0,
        width: "50dp",
        id: "closeView"
    });
    $.__views.header.add($.__views.closeView);
    closeWindow ? $.__views.closeView.addEventListener("click", closeWindow) : __defers["$.__views.closeView!click!closeWindow"] = true;
    $.__views.closeImage = Ti.UI.createImageView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        color: "#fff",
        backgroundColor: "transparent",
        image: "/images/ic_action_undo.png",
        id: "closeImage"
    });
    $.__views.closeView.add($.__views.closeImage);
    $.__views.tblView = Ti.UI.createTableView({
        top: "50dp",
        backgroundColor: "#ffffff",
        id: "tblView"
    });
    $.__views.__alloyId32.add($.__views.tblView);
    var __alloyId36 = Alloy.Collections["picklist"] || picklist;
    __alloyId36.on("fetch destroy change add remove reset", __alloyId37);
    exports.destroy = function() {
        __alloyId36.off("fetch destroy change add remove reset", __alloyId37);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    $.pickerModal.open();
    var sobject = "Account";
    var field = "Industry";
    var picklist = Alloy.Collections.picklist;
    var tableName = picklist.config.adapter.collection_name;
    picklist.fetch({
        query: "select * from " + tableName + ' where Sobject = "' + sobject + '" and Value = "' + field + '"'
    });
    if (picklist.length > 0) {
        var model = picklist.at(0);
        var fieldId = model.get("Id");
        picklist.fetch({
            query: "select * from " + tableName + " where Parent = " + fieldId
        });
    }
    $.pickerModal.addEventListener("close", function() {
        $.destroy();
    });
    __defers["$.__views.closeView!click!closeWindow"] && $.__views.closeView.addEventListener("click", closeWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;