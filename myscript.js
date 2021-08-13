WA.chat.sendChatMessage('Hello world', 'Mr Robot');


var helloWorldPopup;

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
}]);

// Close the popup when we leave the zone.
WA.room.onLeaveZone('myZone', () => {
    helloWorldPopup.close();
});