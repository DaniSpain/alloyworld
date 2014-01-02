function doClick(e) {
    alert($.label.text);
}

function showAccounts(e) {
	//alert("ciao");
	var accountView = Alloy.createController('account').getView();
	accountView.open({
		transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
	});
	//$.navBar.open(accountView, {animated : true});
} 
/*
$.buttongrid.init({
    buttons: [
        { id: 'Cloudy', title: "Cloudy", backgroundColor: "#83b600", backgroundSelectedColor: "#b6db49" },
        { id: 'Drizzle', title: "Drizzle" },
        { id: 'Haze', title: 'Haze' },
        { id: 'MostlyCloudy', title: "Mostly Cloudy" },
        { id: 'SlightDrizzle' },
        { id: 'Snow', title: 'Snow' },
        { id: 'Sunny', title: 'Sunny' },
        { id: 'Thunderstorms', title: 'Thunderstorms', click: function (e) { alert("Thunder!"); } }
    ],
    buttonWidth: Alloy.isTablet ? 200: 100,
    buttonHeight: Alloy.isTablet ? 200 : 100,
    backgroundColor: "#0099cc",
    backgroundSelectedColor: "#c5eaf8"
});
*/
$.home.open();

