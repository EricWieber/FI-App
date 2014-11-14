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
        $.addwin.animate(closeAnimation);
    }
    function save() {
        var string = JSON.parse(file.read().text);
        string[events][string[events].length] = {
            name: $.clientName.value,
            numbers: $.numbers.value,
            message: $.message.value,
            informed: "false"
        };
        file.write(JSON.stringify(string)) || alert("Failed to update file");
        closeWindow();
    }
    function focusNum() {
        $.numbers.focus();
    }
    function focusMes() {
        $.message.focus();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "inform-addclient";
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
    $.__views.addwin = Ti.UI.createWindow({
        backgroundColor: "transparent",
        id: "addwin",
        title: "Add Client",
        opacity: "0"
    });
    $.__views.addwin && $.addTopLevelView($.__views.addwin);
    $.__views.__alloyId14 = Ti.UI.createView({
        backgroundColor: "black",
        opacity: "0.5",
        id: "__alloyId14"
    });
    $.__views.addwin.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createScrollView({
        layout: "vertical",
        backgroundColor: "#163318",
        height: 450,
        width: "50%",
        borderColor: "#fff",
        borderRadius: 10,
        id: "__alloyId15"
    });
    $.__views.addwin.add($.__views.__alloyId15);
    $.__views.clientName = Ti.UI.createTextField({
        height: 40,
        top: 40,
        width: "80%",
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType: Titanium.UI.RETURNKEY_NEXT,
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "Client Name",
        id: "clientName",
        autocorrect: "false",
        autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_WORDS
    });
    $.__views.__alloyId15.add($.__views.clientName);
    focusNum ? $.__views.clientName.addEventListener("return", focusNum) : __defers["$.__views.clientName!return!focusNum"] = true;
    $.__views.numbers = Ti.UI.createTextField({
        height: 40,
        top: 40,
        width: "80%",
        keyboardType: Titanium.UI.KEYBOARD_PHONE_PAD,
        returnKeyType: Titanium.UI.RETURNKEY_NEXT,
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "Contact Number(s)",
        id: "numbers",
        autocorrect: "false"
    });
    $.__views.__alloyId15.add($.__views.numbers);
    focusMes ? $.__views.numbers.addEventListener("return", focusMes) : __defers["$.__views.numbers!return!focusMes"] = true;
    $.__views.message = Ti.UI.createTextField({
        height: 40,
        top: 40,
        width: "80%",
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "Message",
        id: "message",
        autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_SENTENCES
    });
    $.__views.__alloyId15.add($.__views.message);
    $.__views.save = Ti.UI.createButton({
        top: 50,
        height: Ti.UI.SIZE,
        width: 200,
        backgroundColor: "#ccc",
        borderRadius: 15,
        borderColor: "#000",
        font: {
            fontSize: 20
        },
        id: "save",
        title: "Save"
    });
    $.__views.__alloyId15.add($.__views.save);
    save ? $.__views.save.addEventListener("click", save) : __defers["$.__views.save!click!save"] = true;
    $.__views.cancel = Ti.UI.createButton({
        top: 50,
        height: Ti.UI.SIZE,
        width: 200,
        backgroundColor: "#ccc",
        borderRadius: 15,
        borderColor: "#000",
        font: {
            fontSize: 20
        },
        id: "cancel",
        title: "Cancel"
    });
    $.__views.__alloyId15.add($.__views.cancel);
    closeWindow ? $.__views.cancel.addEventListener("click", closeWindow) : __defers["$.__views.cancel!click!closeWindow"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var file = args.file;
    var events = args.events;
    var startupAnimation = Titanium.UI.createAnimation({
        opacity: 1,
        duration: 250
    });
    $.addwin.animate(startupAnimation);
    var closeAnimation = Titanium.UI.createAnimation({
        opacity: 0,
        duration: 250
    });
    closeAnimation.addEventListener("complete", function() {
        $.addwin.close();
    });
    __defers["$.__views.clientName!return!focusNum"] && $.__views.clientName.addEventListener("return", focusNum);
    __defers["$.__views.numbers!return!focusMes"] && $.__views.numbers.addEventListener("return", focusMes);
    __defers["$.__views.save!click!save"] && $.__views.save.addEventListener("click", save);
    __defers["$.__views.cancel!click!closeWindow"] && $.__views.cancel.addEventListener("click", closeWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;