exports.definition = {
    config: {
        columns: {
            LOCALId: "INTEGER PRIMARY KEY AUTOINCREMENT",
            SFDCId: "TEXT",
            Name: "TEXT",
            BillingAddress: "TEXT",
            RemoteLastModifiedDate: "TEXT",
            LocalLastModifiedDate: "TEXT"
        },
        adapter: {
            type: "sql",
            collection_name: "account",
            idAttribute: "LOCALId"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            validate: function(attrs) {
                for (var key in attrs) {
                    var value = attrs[key];
                    if ("Name" === key && 0 >= value.length) return "Error: No Account Name!";
                }
            },
            customProperty: "account",
            customFunction: function() {
                Ti.API.info("I am an Account model.");
            }
        });
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            comparator: function(account) {
                return account.get("Name");
            }
        });
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("account", exports.definition, []);

collection = Alloy.C("account", exports.definition, model);

exports.Model = model;

exports.Collection = collection;