function Controller() {
    function __alloyId7(e) {
        if (e && e.fromAdapter) return;
        __alloyId7.opts || {};
        var models = filterFunction(__alloyId6);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId3 = models[i];
            __alloyId3.__transform = transformFunction(__alloyId3);
            var __alloyId5 = Ti.UI.createTableViewRow({
                title: "undefined" != typeof __alloyId3.__transform["Name"] ? __alloyId3.__transform["Name"] : __alloyId3.get("Name")
            });
            rows.push(__alloyId5);
        }
        $.__views.__alloyId2.setData(rows);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "accounts";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("account");
    $.__views.accounts = Ti.UI.createWindow({
        id: "accounts"
    });
    $.__views.accounts && $.addTopLevelView($.__views.accounts);
    $.__views.__alloyId2 = Ti.UI.createTableView({
        id: "__alloyId2"
    });
    $.__views.accounts.add($.__views.__alloyId2);
    var __alloyId6 = Alloy.Collections["account"] || account;
    __alloyId6.on("fetch destroy change add remove reset", __alloyId7);
    exports.destroy = function() {
        __alloyId6.off("fetch destroy change add remove reset", __alloyId7);
    };
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;