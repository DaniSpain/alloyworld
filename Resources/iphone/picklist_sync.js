function upsert(sobject, value, parent) {
    var picklistvalues = Alloy.createCollection("picklist");
    var table = picklistvalues.config.adapter.collection_name;
    var parentId;
    if (null != parent) {
        Ti.API.info("Upserting a value with parent = " + parent);
        picklistvalues.fetch({
            query: "select * from " + table + ' where Sobject = "' + sobject + '" and Value = "' + parent + '"'
        });
        if (!(picklistvalues.length > 0)) {
            Ti.API.info("PICKLIST UPSERT ERROR: Field " + parent + " not found");
            return;
        }
        Ti.API.info("Field  " + parent + " exist");
        var model = picklistvalues.at(0);
        Ti.API.info("Model getted");
        parentId = model.get("Id");
        Ti.API.info("Field " + parent + "has ID = " + parentId);
        picklistvalues.fetch({
            query: "select * from " + table + ' where Sobject = "' + sobject + '" and Value = "' + value + '" and Parent = ' + parentId
        });
    } else {
        Ti.API.info("Upserting a field");
        picklistvalues.fetch({
            query: "select * from " + table + ' where Sobject = "' + sobject + '" and Value = "' + value + '"'
        });
    }
    if (0 == picklistvalues.length) {
        Ti.API.info(value + " for object " + sobject + " does not exist in local storage");
        var picklist;
        if (null != parentId) {
            picklist = Alloy.createModel("picklist", {
                Value: value,
                Sobject: sobject,
                Parent: parentId
            });
            Ti.API.info("Model Created");
        } else {
            picklist = Alloy.createModel("picklist", {
                Value: value,
                Sobject: sobject
            });
            Ti.API.info("Model Created");
        }
        if (picklist.isValid()) {
            picklist.save();
            Titanium.API.info("Picklist Saved");
        } else picklist.destroy();
    } else Ti.API.info("Picklist " + sobject + "." + value + " already exist");
}

var ACCOUNT_MODEL = "account";

var INDUSTRY_PICKLIST = "Industry";

exports.fetchPicklists = function() {
    Alloy.Globals.force.request({
        type: "GET",
        url: "/sobjects/Account/describe",
        callback: function(data) {
            Ti.API.info("Account describe : " + data.name);
            var fields = data.fields;
            for (var i = 0, l = fields.length; l > i; i++) {
                var rec = fields[i];
                var picklistValues = rec.picklistValues;
                if (picklistValues.length > 0) {
                    Ti.API.info("Field " + rec.name + " is a pickilst");
                    upsert("Account", rec.name);
                    for (var j = 0; picklistValues.length > j; j++) {
                        var pick = picklistValues[j];
                        Ti.API.info(pick.value);
                        upsert("Account", pick.value, rec.name);
                    }
                }
            }
        }
    });
};