var ACCOUNT_MODEL = "account";
var INDUSTRY_PICKLIST = "Industry";

exports.fetchPicklists = function() {
	Alloy.Globals.force.request({
		type:'GET',
		url:'/sobjects/Account/describe',
		callback: function(data) {
			
			Ti.API.info("Account describe : " +data.name);
			var fields = data.fields;
			for (var i = 0, l = fields.length; i<l; i++) {
				var rec = fields[i];
				//Ti.API.info(JSON.stringify(rec));
				var picklistValues = rec.picklistValues;
				if (picklistValues.length>0) {
					Ti.API.info("Field " + rec.name + " is a pickilst");
					upsert("Account",rec.name);
					for (var j=0; j<picklistValues.length; j++) {
						var pick = picklistValues[j];
						Ti.API.info(pick.value);
						upsert("Account",pick.value, rec.name);
					}
					
				} 
				//localUpsert(rec);
			}
		}
	});
};

function upsert(sobject,value, parent) {
	var picklistvalues = Alloy.createCollection("picklist");
	var table = picklistvalues.config.adapter.collection_name;
	var parentId;
	//picklistvalues.fetch();
	//var filter = picklistvalues.where({Sobject: sobject, Value: value});
	if (parent!=null) {
		Ti.API.info("Upserting a value with parent = " + parent);
		//We must take the parent id
		picklistvalues.fetch({query: 'select * from ' + table + ' where Sobject = "' + sobject + '" and Value = "' + parent + '"' });
		if (picklistvalues.length>0) {
			Ti.API.info("Field  " + parent + " exist");
			var model = picklistvalues.at(0);
			Ti.API.info("Model getted");
			//Ti.API.info(model);
			
			parentId = model.get('Id');
			Ti.API.info("Field " + parent + "has ID = " + parentId);
		} else {
			Ti.API.info("PICKLIST UPSERT ERROR: Field " + parent + " not found");
			return;
		}
		//we presume that the parent has been created before
		picklistvalues.fetch({query: 'select * from ' + table + ' where Sobject = "' + sobject + '" and Value = "' + value + '" and Parent = ' + parentId + '' });
	} else {
		Ti.API.info("Upserting a field");
		picklistvalues.fetch({query: 'select * from ' + table + ' where Sobject = "' + sobject + '" and Value = "' + value + '"' });
	}
	if (picklistvalues.length==0) {
		Ti.API.info(value + ' for object ' + sobject + ' does not exist in local storage');
		var picklist;
		if (parentId!=null) {
			picklist = Alloy.createModel('picklist',{
				Value: value,
				Sobject: sobject,
				Parent: parentId
			});
			Ti.API.info("Model Created");
		} else {
			picklist = Alloy.createModel('picklist',{
				Value: value,
				Sobject: sobject
			});
			Ti.API.info("Model Created");
		}
		if (picklist.isValid()) {
		    // Save data to persistent storage
		    picklist.save();
		    Titanium.API.info("Picklist Saved");
		}
		else {
		    picklist.destroy();
		}
	} else {
		Ti.API.info("Picklist " + sobject+ "." + value + " already exist");
	}
	
}
