function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.appcelerator.buttongrid/" + s : s.substring(0, index) + "/com.appcelerator.buttongrid/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

module.exports = [ {
    isApi: true,
    priority: 1000.0001,
    key: "Window",
    style: {
        backgroundColor: "#ffffff"
    }
}, {
    isId: true,
    priority: 100000.0002,
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
}, {
    isId: true,
    priority: 100000.0003,
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
    priority: 100000.0004,
    key: "backView",
    style: {
        top: 0,
        bottom: 0,
        left: 0,
        width: "50dp"
    }
}, {
    isId: true,
    priority: 100000.0005,
    key: "backImage",
    style: {
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        color: "#fff",
        backgroundColor: "transparent",
        image: "/images/ic_action_back.png"
    }
}, {
    isId: true,
    priority: 100000.0006,
    key: "closeView",
    style: {
        top: 0,
        bottom: 0,
        right: 0,
        width: "50dp"
    }
}, {
    isId: true,
    priority: 100000.0007,
    key: "closeImage",
    style: {
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        color: "#fff",
        backgroundColor: "transparent",
        image: "/images/ic_action_undo.png"
    }
} ];