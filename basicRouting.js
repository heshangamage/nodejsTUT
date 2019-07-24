//----------------------------------basic-----------------------------------------------
var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, res) {
  console.log("request made from: " + req.url);
  if (req.url === "/" || req.url === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/view/index.html").pipe(res);
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/view/contact.html").pipe(res);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/view/404.html").pipe(res);
  }
});
server.listen(3000);
console.log("server listening to port 3000");
//-------------------------------------------------------------------------------------
