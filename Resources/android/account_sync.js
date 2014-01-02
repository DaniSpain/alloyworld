function localUpsert(rec) {
    var id = rec.Id;
    Titanium.API.info("Account Id: " + id);
    var accounts = Alloy.createCollection(ACCOUNT_MODEL);
    accounts.fetch();
    var filter = accounts.where({
        SFDCId: id
    });
    Titanium.API.info(filter.length);
    if (filter.length > 0) Titanium.API.info("Account " + rec.Name + " already exist local storage"); else {
        Titanium.API.info("Account " + rec.Name + " does not exist in local storage");
        Titanium.API.info("Creating Account");
        var account = Alloy.createModel(ACCOUNT_MODEL, {
            SFDCId: rec.Id,
            Name: rec.Name,
            BillingStreet: rec.BillingStreet,
            RemoteLastModifiedDate: rec.LastModifiedDate,
            LocalLastModifiedDate: rec.LastModifiedDate
        });
        if (account.isValid()) {
            account.save();
            Titanium.API.info("Account Saved");
        } else account.destroy();
    }
}

var ACCOUNT_MODEL = "account";

exports.fetchAccounts = function() {
    Alloy.Globals.force.request({
        type: "GET",
        url: "/query/?q=" + Ti.Network.encodeURIComponent("SELECT Id, Name, BillingCity, LastModifiedDate from Account"),
        callback: function(data) {
            for (var i = 0, l = data.records.length; l > i; i++) {
                var rec = data.records[i];
                Ti.API.info(JSON.stringify(rec));
                localUpsert(rec);
            }
        }
    });
    var accounts = Alloy.createCollection(ACCOUNT_MODEL);
    accounts.fetch();
    Titanium.API.info("# of SQLite accounts: " + accounts.length);
    accounts.forEach(function(model) {
        var rec = model.toJSON();
        Titanium.API.info("SQLite Account: " + rec.Name);
    });
};