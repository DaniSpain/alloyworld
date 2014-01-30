function Controller() {
    function openIndustryPicker() {
        var pickerView = Alloy.createController("pickerModal").getView();
        pickerView.open();
    }
    function closeWindow() {
        $.newAccount.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "newAccount";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.newAccount = Ti.UI.createWindow({
        backgroundColor: "#ffffff",
        navBarHidden: "true",
        id: "newAccount"
    });
    $.__views.newAccount && $.addTopLevelView($.__views.newAccount);
    $.__views.header = Ti.UI.createView({
        top: Alloy.Globals.top,
        height: "50dp",
        width: Ti.UI.FILL,
        backgroundColor: "#ff8a00",
        id: "header"
    });
    $.__views.newAccount.add($.__views.header);
    $.__views.backView = Ti.UI.createView({
        top: 0,
        bottom: 0,
        left: 0,
        width: "50dp",
        id: "backView"
    });
    $.__views.header.add($.__views.backView);
    closeWindow ? $.__views.backView.addEventListener("click", closeWindow) : __defers["$.__views.backView!click!closeWindow"] = true;
    $.__views.backImage = Ti.UI.createImageView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        color: "#fff",
        backgroundColor: "transparent",
        image: "/images/ic_action_back.png",
        id: "backImage"
    });
    $.__views.backView.add($.__views.backImage);
    $.__views.headerTitle = Ti.UI.createLabel({
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        left: "60dp",
        color: "#fff",
        text: "Create Account",
        id: "headerTitle"
    });
    $.__views.header.add($.__views.headerTitle);
    $.__views.wrapper = Ti.UI.createScrollView({
        top: Alloy.Globals.tableTop,
        height: Ti.UI.FILL,
        id: "wrapper",
        layout: "vertical"
    });
    $.__views.newAccount.add($.__views.wrapper);
    $.__views.grid = Ti.UI.createView({
        id: "grid",
        layout: "horizontal",
        horizontalWrap: "true"
    });
    $.__views.wrapper.add($.__views.grid);
    $.__views.__alloyId15 = Ti.UI.createView({
        left: "20dp",
        height: "100dp",
        width: "280dp",
        top: "10dp",
        layout: "vertical",
        id: "__alloyId15"
    });
    $.__views.grid.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        font: {
            fontSize: "18dp"
        },
        left: "0dp",
        text: "Account Name",
        id: "__alloyId16"
    });
    $.__views.__alloyId15.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createTextField({
        font: {
            fontSize: "18dp"
        },
        height: "48",
        top: "10",
        width: Ti.UI.FILL,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        backgroundColor: "#ffffff",
        size: "18",
        hintText: "Insert Account Name",
        id: "__alloyId17"
    });
    $.__views.__alloyId15.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createView({
        left: "20dp",
        height: "100dp",
        width: "280dp",
        top: "10dp",
        layout: "vertical",
        id: "__alloyId18"
    });
    $.__views.grid.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createLabel({
        font: {
            fontSize: "18dp"
        },
        left: "0dp",
        text: "Billing Street",
        id: "__alloyId19"
    });
    $.__views.__alloyId18.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createTextField({
        height: "48",
        top: "10",
        width: Ti.UI.FILL,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "Insert Billing Street",
        id: "__alloyId20"
    });
    $.__views.__alloyId18.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createView({
        left: "20dp",
        height: "100dp",
        width: "280dp",
        top: "10dp",
        layout: "vertical",
        id: "__alloyId21"
    });
    $.__views.grid.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createLabel({
        font: {
            fontSize: "18dp"
        },
        left: "0dp",
        text: "Billing Street",
        id: "__alloyId22"
    });
    $.__views.__alloyId21.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createTextField({
        height: "48",
        top: "10",
        width: Ti.UI.FILL,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "Insert Billing Street",
        id: "__alloyId23"
    });
    $.__views.__alloyId21.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createView({
        left: "20dp",
        height: "250",
        width: "280dp",
        top: "10dp",
        layout: "vertical",
        id: "__alloyId24"
    });
    $.__views.grid.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createLabel({
        font: {
            fontSize: "18dp"
        },
        left: "0dp",
        text: "Industry",
        id: "__alloyId25"
    });
    $.__views.__alloyId24.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createButton({
        title: "-- Pick an Industry --",
        id: "__alloyId26"
    });
    $.__views.__alloyId24.add($.__views.__alloyId26);
    openIndustryPicker ? $.__views.__alloyId26.addEventListener("click", openIndustryPicker) : __defers["$.__views.__alloyId26!click!openIndustryPicker"] = true;
    $.__views.__alloyId27 = Ti.UI.createView({
        left: "20dp",
        height: "100dp",
        width: "280dp",
        top: "10dp",
        layout: "vertical",
        id: "__alloyId27"
    });
    $.__views.grid.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createLabel({
        font: {
            fontSize: "18dp"
        },
        left: "0dp",
        text: "Billing Street",
        id: "__alloyId28"
    });
    $.__views.__alloyId27.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createTextField({
        height: "48",
        top: "10",
        width: Ti.UI.FILL,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "Insert Billing Street",
        id: "__alloyId29"
    });
    $.__views.__alloyId27.add($.__views.__alloyId29);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var industryPick = Alloy.Globals.picklistData.getPicklistValues("Account", "Industry");
    var data = [];
    for (var i = 0; industryPick.length > i; i++) {
        var model = industryPick.at(i);
        data[i] = Ti.UI.createPickerRow({
            title: model.get("Value")
        });
    }
    $.newAccount.open();
    __defers["$.__views.backView!click!closeWindow"] && $.__views.backView.addEventListener("click", closeWindow);
    __defers["$.__views.__alloyId26!click!openIndustryPicker"] && $.__views.__alloyId26.addEventListener("click", openIndustryPicker);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;