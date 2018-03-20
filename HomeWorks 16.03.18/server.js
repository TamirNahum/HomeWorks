var fs = require("fs");  //fs = file-system
var http = require("http");

var content="<h1>default msg</h1>";

var date=new Date();
date=parseInt( date.getHours());
if(date>=6&&date<12){
	fs.readFile("./data/morning.html", "utf-8", function(err, data){
	content=data;
	});
}
if(date>=12&&date<16){
	fs.readFile("./data/morning.html", "utf-8", function(err, data){
	content=data;
	});
}
if(date>=16&&date<20){
	fs.readFile("./data/evening.html", "utf-8", function(err, data){
	content=data;
	});
}
if(date>=20||date<6){
	fs.readFile("./data/night.html", "utf-8", function(err, data){
	content=data;
	});
}




// Create http server:
var myServer = http.createServer(function(request, response){
	console.log("User requested page...");
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(content);
	response.end();
});

// Start listening on port 3500:
//myServer.close();
myServer.listen(3200);