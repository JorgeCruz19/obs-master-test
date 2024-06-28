const express = require("express");

const app = express();
const port = 3000;

app.use(express.static(__dirname + "/"));

app.get("/admin", (req, res) => {
	res.sendFile(__dirname + "/admin.html");
});
app.get("/canal1", (req, res) => {
	res.sendFile(__dirname + "/channels/channel1.html");
});
app.get("/canal2", (req, res) => {
	res.sendFile(__dirname + "/channels/channel2.html");
});
app.get("/canal3", (req, res) => {
	res.sendFile(__dirname + "/channels/channel3.html");
});
app.get("/canal4", (req, res) => {
	res.sendFile(__dirname + "/channels/channel4.html");
});


app.listen(port, () => console.log("server on port", port));
