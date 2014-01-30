exports.definition = {
	config: {
		columns: {
			"Id": "INTEGER PRIMARY KEY AUTOINCREMENT",
			"Sobject": "TEXT",
			"Value": "TEXT",
			"Parent": "INTEGER"
		},

		adapter: {
			type: "sql",
			collection_name: "picklist",
			idAttribute: "Id"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
			validate: function (attrs) {
    	        for (var key in attrs) {
                    var value = attrs[key];
                    if (key === "Value") {
                        if (value.length <= 0) {
                            return "Error: No Value!";
                        }
                    }
                }
            },
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
			comparator : function(account) {
        	    return account.get('Value');
            }
		});

		return Collection;
	}
};