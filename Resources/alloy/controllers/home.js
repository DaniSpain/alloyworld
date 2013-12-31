function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.home = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "home"
    });
    $.__views.home && $.addTopLevelView($.__views.home);
    $.__views.buttongrid = Alloy.createWidget("com.appcelerator.buttongrid", "widget", {
        id: "buttongrid",
        __parentSymbol: $.__views.home
    });
    $.__views.buttongrid.setParent($.__views.home);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.buttongrid.init({
        buttons: [ {
            id: "Cloudy",
            title: "Cloudy",
            backgroundColor: "#83b600",
            backgroundSelectedColor: "#b6db49"
        }, {
            id: "Drizzle",
            title: "Drizzle"
        }, {
            id: "Haze",
            title: "Haze"
        }, {
            id: "MostlyCloudy",
            title: "Mostly Cloudy"
        }, {
            id: "SlightDrizzle"
        }, {
            id: "Snow",
            title: "Snow"
        }, {
            id: "Sunny",
            title: "Sunny"
        }, {
            id: "Thunderstorms",
            title: "Thunderstorms",
            click: function() {
                alert("Thunder!");
            }
        } ],
        buttonWidth: Alloy.isTablet ? 200 : 100,
        buttonHeight: Alloy.isTablet ? 200 : 100,
        backgroundColor: "#0099cc",
        backgroundSelectedColor: "#c5eaf8"
    });
    $.home.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;