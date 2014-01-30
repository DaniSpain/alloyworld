var args = arguments[0] || {};

$.pickerModal.open();
var PICKLIST_TABLE = "picklist";

var sobject = "Account";
var field = "Industry";

//var picklistValues = Alloy.Globals.picklistData.getPicklistValues("Account","Industry");
var picklist = Alloy.Collections.picklist;
var tableName = picklist.config.adapter.collection_name;
picklist.fetch({query: 'select * from ' + tableName + ' where Sobject = "' + sobject + '" and Value = "' + field + '"'});
if (picklist.length>0) {
	var model = picklist.at(0);
	var fieldId = model.get('Id');
	//Ti.API.info("Model Id is " + fieldId);
	picklist.fetch({query: 'select * from ' + tableName + ' where Parent = ' + fieldId});
}

function closeWindow(e) {
	$.pickerModal.close();
}

$.pickerModal.addEventListener('close', function() {
    $.destroy();
});
