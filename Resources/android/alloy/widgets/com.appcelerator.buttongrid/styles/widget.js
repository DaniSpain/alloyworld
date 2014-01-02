function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.appcelerator.buttongrid/" + s : s.substring(0, index) + "/com.appcelerator.buttongrid/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

module.exports = [ {
    isId: true,
    priority: 100000.0001,
    key: "header",
    style: {
        top: Alloy.Globals.top,
        height: "50dp",
        width: Ti.UI.FILL,
        backgroundColor: "#ff8a00"
    }
}, {
    isId: true,
    priority: 100000.0002,
    key: "headerTitle",
    style: {
        left: "60dp",
        color: "#fff",
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        }
    }
}, {
    isId: true,
    priority: 100000.0002,
    key: "scrollview",
    style: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        contentWidth: Ti.UI.FILL,
        contentHeight: "auto",
        showVerticalScrollIndicator: true
    }
} ];