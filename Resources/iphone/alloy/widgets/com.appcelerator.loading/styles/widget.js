function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.appcelerator.loading/" + s : s.substring(0, index) + "/com.appcelerator.loading/" + s.substring(index + 1);
    return path;
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
}, {
    isId: true,
    priority: 100000.001,
    key: "loading",
    style: {
        height: 20,
        width: 20,
        images: [ "/images/com.appcelerator.loading/00.png", "/images/com.appcelerator.loading/01.png", "/images/com.appcelerator.loading/02.png", "/images/com.appcelerator.loading/03.png", "/images/com.appcelerator.loading/04.png", "/images/com.appcelerator.loading/05.png", "/images/com.appcelerator.loading/06.png", "/images/com.appcelerator.loading/07.png", "/images/com.appcelerator.loading/08.png", "/images/com.appcelerator.loading/09.png", "/images/com.appcelerator.loading/10.png", "/images/com.appcelerator.loading/11.png" ]
    }
} ];