function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function closeWindow() {
        $.win2.close({
            transition: Ti.UI.iPhone.AnimationStyle.CURL_DOWN
        });
        Ti.App.Properties.setString("currentWindow", "index");
    }
    function drawTable() {
        string = JSON.parse(file.read().text);
        var arr = [];
        for (x in string) arr.push(Alloy.createController("card-row", {
            file: file,
            title: x,
            events: x
        }).getView());
        $.table.setData(arr);
    }
    function rowClick(e) {
        var win3 = Alloy.createController("card-event", {
            file: file,
            row: e.rowData
        }).getView();
        win3.open({
            transition: Ti.UI.iPhone.AnimationStyle.CURL_UP
        });
    }
    function addNewEvent() {
        var addwin = Alloy.createController("card-addevent", {
            file: file
        }).getView();
        addwin.open();
    }
    function calert(t, m) {
        var dialog = Ti.UI.createAlertDialog({
            message: m,
            ok: "Ok",
            title: t
        });
        dialog.show();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "card-index";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win2 = Ti.UI.createWindow({
        backgroundColor: "#163318",
        id: "win2",
        title: "Events"
    });
    $.__views.win2 && $.addTopLevelView($.__views.win2);
    drawTable ? $.__views.win2.addEventListener("focus", drawTable) : __defers["$.__views.win2!focus!drawTable"] = true;
    $.__views.topbar = Ti.UI.createView({
        top: "-10dp",
        height: "70dp",
        width: "103%",
        borderColor: "#fff",
        borderRadius: "30dp",
        borderWidth: "2dp",
        backgroundColor: "#215525",
        id: "topbar"
    });
    $.__views.win2.add($.__views.topbar);
    $.__views.topTitle = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        color: "#fff",
        bottom: "10dp",
        font: {
            fontSize: 20
        },
        text: "Events",
        id: "topTitle"
    });
    $.__views.topbar.add($.__views.topTitle);
    $.__views.add = Ti.UI.createButton({
        height: Ti.UI.SIZE,
        color: "#fff",
        bottom: "10dp",
        right: "50dp",
        borderColor: "#fff",
        borderRadius: "10dp",
        backgroundColor: "#274429",
        font: {
            fontSize: 14
        },
        id: "add",
        title: "   Add Event   "
    });
    $.__views.topbar.add($.__views.add);
    addNewEvent ? $.__views.add.addEventListener("click", addNewEvent) : __defers["$.__views.add!click!addNewEvent"] = true;
    $.__views.back = Ti.UI.createButton({
        height: Ti.UI.SIZE,
        color: "#fff",
        bottom: "10dp",
        left: "50dp",
        borderColor: "#fff",
        borderRadius: "10dp",
        backgroundColor: "#274429",
        font: {
            fontSize: 14
        },
        id: "back",
        title: "  Home  "
    });
    $.__views.topbar.add($.__views.back);
    closeWindow ? $.__views.back.addEventListener("click", closeWindow) : __defers["$.__views.back!click!closeWindow"] = true;
    var __alloyId9 = [];
    $.__views.__alloyId10 = Ti.UI.createTableViewRow({
        backgroundColor: "transparent",
        height: "80dp",
        id: "__alloyId10"
    });
    __alloyId9.push($.__views.__alloyId10);
    $.__views.table = Ti.UI.createTableView({
        backgroundColor: "transparent",
        top: "60dp",
        data: __alloyId9,
        id: "table",
        backgroundImage: "/Fisher-3.png",
        editable: "true",
        rowHeight: "80"
    });
    $.__views.win2.add($.__views.table);
    rowClick ? $.__views.table.addEventListener("click", rowClick) : __defers["$.__views.table!click!rowClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, "cards.txt");
    if (file.exists()) var string = JSON.parse(file.read().text); else {
        var string = {
            "Big Event": [ {
                name: "Mr. Sample",
                add1: "123 Some St",
                add2: "Line 2",
                add3: "Line 3",
                city: "Someville",
                state: "CA",
                postcode: "91234",
                phone: "(123) 456-7890",
                mobile: "(987) 654-3210",
                email: "john@email.com",
                guestof: "Ken",
                reltoclient: "friend",
                oid: "1234567890",
                sent: "false"
            }, {
                name: "Tom",
                add1: "123 Some St",
                add2: "",
                add3: "",
                city: "Someville",
                state: "CA",
                postcode: "91234",
                phone: "(123) 456-7890",
                mobile: "(987) 654-3210",
                email: "tom@email.com",
                guestof: "Ken",
                reltoclient: "friend",
                oid: "1234567890",
                sent: "false",
                events: "Small Event"
            } ],
            "Small Event": [ {
                name: "Mary",
                add1: "123 Some St",
                add2: "",
                add3: "",
                city: "Someville",
                state: "CA",
                postcode: "91234",
                phone: "(123) 456-7890",
                mobile: "(987) 654-3210",
                email: "mary@email.com",
                guestof: "Ken",
                reltoclient: "friend",
                oid: "1234567890",
                sent: "false",
                events: "Other Event"
            } ]
        };
        file.write(JSON.stringify(string));
    }
    $.win2.statusBarStyle = Ti.UI.iPhone.StatusBar.LIGHT_CONTENT;
    drawTable();
    Ti.App.addEventListener("removeEvent", function(e) {
        Ti.App.Properties.setString("currentWindow", "card-index");
        string = JSON.parse(file.read().text);
        for (x in string[e.events]) string[e.events].splice(e.index, 1);
        delete string[e.events];
        file.write(JSON.stringify(string)) || calert("Error", "Failed to update database file");
        drawTable();
    });
    Ti.App.addEventListener("goHome", function() {
        closeWindow();
        Ti.App.Properties.setString("currentWindow", "index");
    });
    __defers["$.__views.win2!focus!drawTable"] && $.__views.win2.addEventListener("focus", drawTable);
    __defers["$.__views.add!click!addNewEvent"] && $.__views.add.addEventListener("click", addNewEvent);
    __defers["$.__views.back!click!closeWindow"] && $.__views.back.addEventListener("click", closeWindow);
    __defers["$.__views.table!click!rowClick"] && $.__views.table.addEventListener("click", rowClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;