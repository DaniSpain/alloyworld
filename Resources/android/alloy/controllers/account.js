function Controller() {
    function __alloyId6(e) {
        if (e && e.fromAdapter) return;
        __alloyId6.opts || {};
        var models = __alloyId5.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId2 = models[i];
            __alloyId2.__transform = {};
            var __alloyId4 = Alloy.createController("row", {
                $model: __alloyId2,
                __parentSymbol: __parentSymbol
            });
            rows.push(__alloyId4.getViewEx({
                recurse: true
            }));
        }
        $.__views.tblView.setData(rows);
    }
    function closeWindow() {
        $.account.close();
    }
    function newAccount() {
        var addView = Alloy.createController("newAccount").getView();
        addView.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "account";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("account");
    $.__views.account = Ti.UI.createWindow({
        backgroundColor: "#ffffff",
        title: "Accounts",
        navBarHidden: "true",
        id: "account"
    });
    $.__views.account && $.addTopLevelView($.__views.account);
    $.__views.header = Ti.UI.createView({
        top: Alloy.Globals.top,
        height: "50dp",
        width: Ti.UI.FILL,
        backgroundColor: "#ff8a00",
        id: "header"
    });
    $.__views.account.add($.__views.header);
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
        left: "60dp",
        color: "#fff",
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        text: "My Accounts",
        id: "headerTitle"
    });
    $.__views.header.add($.__views.headerTitle);
    $.__views.addView = Ti.UI.createView({
        top: 0,
        bottom: 0,
        right: 0,
        width: "50dp",
        id: "addView"
    });
    $.__views.header.add($.__views.addView);
    newAccount ? $.__views.addView.addEventListener("click", newAccount) : __defers["$.__views.addView!click!newAccount"] = true;
    $.__views.addImage = Ti.UI.createImageView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        color: "#fff",
        backgroundColor: "transparent",
        image: "/images/5-content-new.png",
        id: "addImage"
    });
    $.__views.addView.add($.__views.addImage);
    $.__views.tblView = Ti.UI.createTableView({
        top: Alloy.Globals.tableTop,
        id: "tblView"
    });
    $.__views.account.add($.__views.tblView);
    var __alloyId5 = Alloy.Collections["account"] || account;
    __alloyId5.on("fetch destroy change add remove reset", __alloyId6);
    exports.destroy = function() {
        __alloyId5.off("fetch destroy change add remove reset", __alloyId6);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    $.account.open();
    var accounts = Alloy.Collections.account;
    accounts.fetch();
    $.account.addEventListener("close", function() {
        $.destroy();
    });
    $.tblView.addEventListener("longpress", function(e) {
        alert(e.row);
    });
    __defers["$.__views.backView!click!closeWindow"] && $.__views.backView.addEventListener("click", closeWindow);
    __defers["$.__views.addView!click!newAccount"] && $.__views.addView.addEventListener("click", newAccount);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;