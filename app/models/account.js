exports.definition = {
	config: {
		columns: {
			"LOCALId": "INTEGER PRIMARY KEY AUTOINCREMENT",
			"SFDCId": "TEXT",
		    "Name": "TEXT",
		    "BillingAddress": "TEXT",
		    "RemoteLastModifiedDate": "TEXT",
		    "LocalLastModifiedDate": "TEXT",
		},
		adapter: {
			type: "sql",
			collection_name: "account",
			idAttribute: "LOCALId"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
			// Implement the validate method						
            validate: function (attrs) {
    	        for (var key in attrs) {
                    var value = attrs[key];
                    if (key === "Name") {
                        if (value.length <= 0) {
                            return "Error: No Account Name!";
                        }
                    }
                }
            },
            // Extend Backbone.Model
            customProperty: 'account',
            customFunction: function() {
                Ti.API.info('I am an Account model.');
            },	
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
			// Implement the comparator method. It sorts accounts by Name
    	    comparator : function(account) {
        	    return account.get('Name');
            }
		});

		return Collection;
	}
};