exports.getPicklistValues = function(sobject, field) {
    var picklist = Alloy.createCollection("picklist");
    var tableName = picklist.config.adapter.collection_name;
    picklist.fetch({
        query: "select * from " + tableName + ' where Sobject = "' + sobject + '" and Value = "' + field + '"'
    });
    if (picklist.length > 0) {
        var model = picklist.at(0);
        var fieldId = model.get("Id");
        Ti.API.info("Model Id is " + fieldId);
        picklist.fetch({
            query: "select * from " + tableName + " where Parent = " + fieldId
        });
        return picklist;
    }
    Ti.API.info("ERROR at getPicklistValues: " + field + " is not a field or is not a picklist!");
};