function Controller() {
    function showAccounts() {
        var accountView = Alloy.createController("account").getView();
        accountView.open({
            transition: Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
        });
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
        backgroundColor: "#ffffff",
        navBarHidden: "true",
        id: "home"
    });
    $.__views.home && $.addTopLevelView($.__views.home);
    $.__views.wrapper = Ti.UI.createView({
        top: Alloy.Globals.top,
        id: "wrapper",
        layout: "horizontal",
        horizontalWrap: "true"
    });
    $.__views.home.add($.__views.wrapper);
    $.__views.__alloyId7 = Ti.UI.createView({
        height: "50%",
        width: "50%",
        backgroundColor: "#000000",
        id: "__alloyId7"
    });
    $.__views.wrapper.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createButton({
        height: "90%",
        width: "90%",
        color: "#ffffff",
        title: "Accounts",
        backgroundColor: "#669900",
        backgroundSelectedColor: "#e2f0b6",
        id: "__alloyId8"
    });
    $.__views.__alloyId7.add($.__views.__alloyId8);
    showAccounts ? $.__views.__alloyId8.addEventListener("click", showAccounts) : __defers["$.__views.__alloyId8!click!showAccounts"] = true;
    $.__views.__alloyId9 = Ti.UI.createView({
        height: "50%",
        width: "50%",
        backgroundColor: "#000000",
        id: "__alloyId9"
    });
    $.__views.wrapper.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createButton({
        height: "90%",
        width: "90%",
        color: "#ffffff",
        title: "Contacts",
        backgroundColor: "#cc0000",
        backgroundSelectedColor: "#ffcaca",
        id: "__alloyId10"
    });
    $.__views.__alloyId9.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createView({
        height: "50%",
        width: "50%",
        backgroundColor: "#000000",
        id: "__alloyId11"
    });
    $.__views.wrapper.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createButton({
        height: "90%",
        width: "90%",
        color: "#ffffff",
        title: "Work Orders",
        backgroundColor: "#ff8a00",
        backgroundSelectedColor: "#ffecc0",
        id: "__alloyId12"
    });
    $.__views.__alloyId11.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createView({
        height: "50%",
        width: "50%",
        backgroundColor: "#000000",
        id: "__alloyId13"
    });
    $.__views.wrapper.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createButton({
        height: "90%",
        width: "90%",
        color: "#ffffff",
        title: "Check-In",
        backgroundColor: "#0099cc",
        backgroundSelectedColor: "#c5eaf8",
        id: "__alloyId14"
    });
    $.__views.__alloyId13.add($.__views.__alloyId14);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.home.open();
    __defers["$.__views.__alloyId8!click!showAccounts"] && $.__views.__alloyId8.addEventListener("click", showAccounts);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;