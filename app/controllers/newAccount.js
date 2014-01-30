var args = arguments[0] || {};

var industryPick = Alloy.Globals.picklistData.getPicklistValues("Account","Industry");

var data = [];
for (var i=0; i<industryPick.length; i++) {
	var model = industryPick.at(i);
	data[i] = Ti.UI.createPickerRow({title:model.get("Value")});
}

//$.picker.add(data);
//$.picker.setSelectedRow(0, 0, false);


$.newAccount.open();

function openIndustryPicker(e) {
	var pickerView = Alloy.createController('pickerModal').getView();
	pickerView.open();
}

function closeWindow(e) {
	$.newAccount.close();	
}