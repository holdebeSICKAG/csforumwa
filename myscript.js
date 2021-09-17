//WA.chat.sendChatMessage('Hello world', 'Mr Robot');
 


let helloWorldPopup;
 
//WA.ui.openPopup(targetObject:"myPopUp", message: "Helas!", buttons: ButtonDescriptor[]): Popup;

// Open the popup when we enter a given zone
helloWorldPopup = WA.room.onEnterZone('myZone', () => {
    WA.ui.openPopup("popupRectangle", 'Hello world!', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

// Close the popup when we leave the zone.
/*
WA.room.onLeaveZone('myZone', () => {
    helloWorldPopup.close();
});
*/

let schedule_txt = "asd";
WA.chat.onChatMessage((message => {
    if (message== "schedule"):
		WA.chat.sendChatMessage(schedule_txt, 'Schedule');;
}));