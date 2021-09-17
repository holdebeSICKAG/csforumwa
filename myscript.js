//WA.chat.sendChatMessage('Hello world', 'Mr Robot');
 


let helloWorldPopup;
 
//WA.ui.openPopup(targetObject:"myPopUp", message: "Helas!", buttons: ButtonDescriptor[]): Popup;

// Open the popup when we enter a given zone
WA.room.onEnterZone('myZone', () => {
    helloWorldPopup = WA.ui.openPopup("popupRectangle", 'Hello world!&szlig;', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

// Close the popup when we leave the zone.

WA.room.onLeaveZone('myZone', () => {
	console.log("fu");
    helloWorldPopup.close();
});

//console.log(WA);
//console.log(WA.chat);
let schedule_txt;
WA.chat.onChatMessage((message) => {
	console.log("fu");
    if (message == "schedule")
	{
		schedule_txt = "asd";
		WA.chat.sendChatMessage(schedule_txt, 'Admin');
	}
});

WA.room.onEnterZone('zone_wp_psirt1', () => {
    WA.room.showLayer("wp_psirt1")
    });