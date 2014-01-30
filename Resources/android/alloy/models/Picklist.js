exports.definition = {
    config: {
        columns: {
            Id: "INTEGER PRIMARY KEY AUTOINCREMENT",
            Sobject: "TEXT",
            Value: "TEXT",
            Parent: "INTEGER"
        },
        adapter: {
            type: "sql",
            collection_name: "picklist",
            idAttribute: "Id"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            validate: function(attrs) {
                for (var key in attrs) {
                    var value = attrs[key];
                    if ("Value" === key && 0 >= value.length) return "Error: No Value!";
                }
            }
        });
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            comparator: function(account) {
                return account.get("Value");
            }
        });
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("picklist", exports.definition, []);

collection = Alloy.C("picklist", exports.definition, model);

exports.Model = model;

exports.Collection = collection;