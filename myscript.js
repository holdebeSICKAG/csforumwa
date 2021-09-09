//WA.chat.sendChatMessage('Hello world', 'Mr Robot');

var zone0WelcomeName = "popUp0Welcome";
var ispopUp0WelcomeSeen = "no";
// Test if the player already seen this popUp or not
WA.onEnterZone(zone0WelcomeName, () => {
if(ispopUp0WelcomeSeen == "no"){
WA.disablePlayerControls();
ispopUp0WelcomeSeen = "yes";
currentPopup =  WA.openPopup("popUp0Welcome","Welcome to this WorkAdventure map.",[
{
label: "OK",
className: "popUpElement",
callback: (popup => {
// WA.openCoWebSite(urlTeleport);
// isCoWebSiteOpened = true;
WA.restorePlayerControls();
closePopUp();
})
}]);
}
})
WA.onLeaveZone(zone0WelcomeName, closePopUp)





/*

WA.ui.openPopup(targetObject:"myPopUp", message: "Helas!", buttons: ButtonDescriptor[]): Popup

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
});

// Close the popup when we leave the zone.
WA.room.onLeaveZone('myZone', () => {
    helloWorldPopup.close();
});

*/