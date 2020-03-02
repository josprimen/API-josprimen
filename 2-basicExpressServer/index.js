var carita = require("cool-ascii-faces");
var express = require("express");

var app = express();

app.get("/", (request, response) => {
	console.log("Up");
	response.send(carita());
});

app.listen(8080);

