const bodyEl = document.getElementById("main");

let selectedChannel =
	window.location.search?.split("&room=")[1]?.split("&", 1) || "";
let [channel] = selectedChannel;

if (channel == "canal1") {
	bodyEl.style.backgroundImage = "url('./media/TELEVICENTRO.gif')";
} else if (channel == "canal2") {
	bodyEl.style.backgroundImage = "url('./media/TELEVICENTRO.gif')";
} else if (channel == "canal3") {
	bodyEl.style.backgroundImage = "url('./media/TELEVICENTRO.gif')";
} else if (channel == "canal4") {
	bodyEl.style.backgroundImage =	"url('./media/TELEVICENTRO.gif')";
} else {
	bodyEl.style.background = "rgb(17, 24, 39)";
}
