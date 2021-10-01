//WA.chat.sendChatMessage('Hello world', 'Mr Robot');
 





/*Introduction Popups*/


let Intro00PP;
let firstIntro = 0;

// Open the popup when we enter a given zone
WA.room.onEnterZone('Intro00', () => {
	if(firstIntro < 5){
    Intro01PP = WA.ui.openPopup("Intro00Rect", 'Welcome! If you want to get an introduction, please walk up. otherwise, continue to the right', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
	firstIntro += 1;
	}
});

// Close the popup when we leave the zone.

WA.room.onLeaveZone('Intro00', () => {
    Intro01PP.close();
});



let Intro01PP;

// Open the popup when we enter a given zone
WA.room.onEnterZone('Intro01', () => {
    Intro01PP = WA.ui.openPopup("Intro01Rect", 'Welcome to the introduction. Read the "i" signs to learn about the environment', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

// Close the popup when we leave the zone.

WA.room.onLeaveZone('Intro01', () => {
    Intro01PP.close();
});



let Intro02PP;

// Open the popup when we enter a given zone
WA.room.onEnterZone('Intro02', () => {
    Intro02PP = WA.ui.openPopup("Intro02Rect", 'You can use "Shift" to run', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

// Close the popup when we leave the zone.

WA.room.onLeaveZone('Intro02', () => {
    Intro02PP.close();
});




let Intro03PP;

// Open the popup when we enter a given zone
WA.room.onEnterZone('Intro03', () => {
    Intro03PP = WA.ui.openPopup("Intro03Rect", 'When you get close to other participants, a white circle will appear and you will be able to videochat spontaneously (up to four people).', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

// Close the popup when we leave the zone.

WA.room.onLeaveZone('Intro03', () => {
    Intro03PP.close();
});

let Intro04PP;

// Open the popup when we enter a given zone
WA.room.onEnterZone('Intro04', () => {
    Intro04PP = WA.ui.openPopup("Intro04Rect", 'Audience / Discussion Areas are highlighted: here you can join group discussions (in small rooms) or listen to the main talks (on the main stage)', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

// Close the popup when we leave the zone.

WA.room.onLeaveZone('Intro04', () => {
    Intro04PP.close();
});

	

let Intro05PP;
// Open the popup when we enter a given zone
WA.room.onEnterZone('Intro05', () => {
    Intro05PP = WA.ui.openPopup("Intro05Rect", 'Please only enter the speaker stage if you are a speaker. For questions after a talk, please use the global chat (speech bubbles on the bottom left).', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

// Close the popup when we leave the zone.

WA.room.onLeaveZone('Intro05', () => {
    Intro05PP.close();
});




let coffeeCounter = 0;

// Cooffee Fun
WA.room.onEnterZone('CoffeeFun', () => {
	let outSec = 1;
	coffeeCounter+=1;
	switch (coffeeCounter){
		case 1:
		WA.nav.openCoWebSite('https://youtube.com/embed/RyZyfV82CDQ?autoplay=1');
		outSec = 30;
		break;
		
		case 2:
		WA.nav.openCoWebSite('https://youtube.com/embed/DfyeXrdZZ1o?autoplay=1');
		outSec = 60;
		break;
		
		case 3:
		WA.nav.openCoWebSite('https://youtube.com/embed/Nu8kIIL-CDA?autoplay=1');
		outSec = 45;
		break;
		
		case 4:
		WA.nav.openCoWebSite('https://youtube.com/embed/AYx_pAkr16M?autoplay=1');
		outSec = 35;
		break;
		
		case 5:
		WA.nav.openCoWebSite('https://youtube.com/embed/pWMUGH5y-l4?autoplay=1');
		outSec = 40;
		break;
		
		case 6:
		WA.nav.openCoWebSite('https://youtube.com/embed/50P0XS4qTOE?autoplay=1');
		outSec = 35;
		coffeeCounter = 0;
		break;
		
		
		default:
			coffeeCounter = 0;
		break;
	}
	
	setTimeout(function() {
			WA.nav.closeCoWebSite();
	}, (outSec * 1000));
	
   
});

// Close the popup when we leave the zone.

WA.room.onLeaveZone('CoffeeFun', () => {
    WA.nav.closeCoWebSite();
});



// Doors
// Open doors
WA.room.onEnterZone('doorOpener', () => {
     WA.room.hideLayer('doors');

});

// Close the popup when we leave the zone.

WA.room.onLeaveZone('doorOpener', () => {
   WA.room.showLayer('doors');
});




// Open the popup when we enter a given zone
WA.room.onEnterZone('Poster01Zone', () => {
     WA.room.showLayer('Poster01');

});

// Close the popup when we leave the zone.

WA.room.onLeaveZone('Poster01Zone', () => {
   WA.room.hideLayer('Poster01');
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