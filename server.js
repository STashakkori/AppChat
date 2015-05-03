var fs = require("fs");
var http2 = require("http2");
var sys = require("sys");
var express = require("express");

//var router = express();
//var path = require("path");
//router.use(express.static(path.join(__dirname + "/client")));

var options = {
    key: fs.readFileSync('./server.key'),
    cert: fs.readFileSync('./server.crt')
    };
 
var server = http2.createServer(options,function(request, response) {
	//var mongoose = require('mongoose');	
	console.log("server is working on port 2000");
var content;
		
	response.body = fs.readFileSync('client/index.html');
	
	if(request.url.indexOf('appchqt.html') != -1){
	    console.log("AppChat :: HTML");
	    style = fs.readFileSync("client/appchat.html"); 
	    response.writeHead(200, {'Content-Type': 'text/html'});
	    response.write(style);
            response.end();
	    }
	
	if(request.url.indexOf('.css') != -1){ //req.url has the pathname, check if it contains '.css'
	    console.log("AppChat :: CSS");
	    style = fs.readFileSync("client/login.css");
	    response.writeHead(200, {'Content-Type': 'text/css'});
	    response.write(style);
            response.end();
	}
	
	if(request.url.indexOf('blackbg3.png') != -1){
		console.log("AppChat :: IMAGE");
		pic = fs.readFileSync("blackbg3.png");
		response.writeHead(200, {'Content-Type': 'text/css'});
                response.write(pic);
                response.end();
	}
/*	
	if(request.url.indexOf('webshim-1.15.7/js-webshim/minified/polyfiller.js') != -1){
                  console.log("AppChat :: JSRIPT");
                  pic = fs.readFileSync("webshim-1.15.7/js-webshim/minified/polyfiller.js");
                  response.writeHead(200, {'Content-Type': 'text/javascript'});
                  response.write(pic);
                  response.end();
        }
*/	
	response.end(response.body);
});



server.listen(2000);
console.log("server is listening on port 2000");
console.log(__dirname + '/client/style/login.css');
