//WA.chat.sendChatMessage('Hello world', 'Mr Robot');
 


let helloWorldPopup;
 
//WA.ui.openPopup(targetObject:"myPopUp", message: "Helas!", buttons: ButtonDescriptor[]): Popup;

// Open the popup when we enter a given zone
WA.room.onEnterZone('myZone', () => {
    helloWorldPopup = WA.ui.openPopup("popupRectangle", 'Hello world!', [{
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


let schedule_txt;
WA.chat.onChatMessage((message => {
    if (message == "schedule")
	{
		schedule_txt = "asd";
		WA.chat.sendChatMessage(schedule_txt, 'Schedule');
	}
}));
