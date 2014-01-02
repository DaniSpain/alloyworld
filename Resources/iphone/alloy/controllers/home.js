function Controller() {
    function showAccounts() {
        var accountView = Alloy.createController("account").getView();
        accountView.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.home = Ti.UI.createWindow({
        backgroundColor: "#000000",
        top: Alloy.Globals.top,
        navBarHidden: "true",
        id: "home"
    });
    $.__views.home && $.addTopLevelView($.__views.home);
    $.__views.__alloyId7 = Ti.UI.createView({
        layout: "horizontal",
        horizontalWrap: "true",
        id: "__alloyId7"
    });
    $.__views.home.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createView({
        height: "50%",
        width: "50%",
        id: "__alloyId8"
    });
    $.__views.__alloyId7.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createButton({
        height: "90%",
        width: "90%",
        color: "#ffffff",
        title: "Accounts",
        backgroundColor: "#669900",
        backgroundSelectedColor: "#e2f0b6",
        id: "__alloyId9"
    });
    $.__views.__alloyId8.add($.__views.__alloyId9);
    showAccounts ? $.__views.__alloyId9.addEventListener("click", showAccounts) : __defers["$.__views.__alloyId9!click!showAccounts"] = true;
    $.__views.__alloyId10 = Ti.UI.createView({
        height: "50%",
        width: "50%",
        id: "__alloyId10"
    });
    $.__views.__alloyId7.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createButton({
        height: "90%",
        width: "90%",
        color: "#ffffff",
        title: "Contacts",
        backgroundColor: "#cc0000",
        backgroundSelectedColor: "#ffcaca",
        id: "__alloyId11"
    });
    $.__views.__alloyId10.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createView({
        height: "50%",
        width: "50%",
        id: "__alloyId12"
    });
    $.__views.__alloyId7.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createButton({
        height: "90%",
        width: "90%",
        color: "#ffffff",
        title: "Work Orders",
        backgroundColor: "#ff8a00",
        backgroundSelectedColor: "#ffecc0",
        id: "__alloyId13"
    });
    $.__views.__alloyId12.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createView({
        height: "50%",
        width: "50%",
        id: "__alloyId14"
    });
    $.__views.__alloyId7.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createButton({
        height: "90%",
        width: "90%",
        color: "#ffffff",
        title: "Check-In",
        backgroundColor: "#0099cc",
        backgroundSelectedColor: "#c5eaf8",
        id: "__alloyId15"
    });
    $.__views.__alloyId14.add($.__views.__alloyId15);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.home.open();
    __defers["$.__views.__alloyId9!click!showAccounts"] && $.__views.__alloyId9.addEventListener("click", showAccounts);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;