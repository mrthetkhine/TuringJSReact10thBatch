const http = require('node:http');
const url = require("url");
const path = require("path");
let port = 9000;
let server = new http.Server();

server.listen(port);
console.log("Listening on port", port);

server.on('request', (req, res) => {
    let endpoint = url.parse(req.url).pathname;
    console.log('Req ',req);
    console.log('Client connected to server endpoint ',endpoint);
    
    res.writeHead(200);
    /*
    let headers = req.rawHeaders;
    for(let i = 0; i < headers.length; i += 2) {
        res.write(`${headers[i]}:
        ${headers[i+1]}\r\n`);
    }
    */

    res.end('<h1>Hello World</h1>');
})