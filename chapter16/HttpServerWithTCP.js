const net = require("net");
const readline = require("readline");


let server = net.createServer();
server.listen(9000, () => console.log("http serverr listening on port 9000"));

server.on('connection',(socket)=>{
    console.log('Client connected');
    socket.on('data',function(data)
    {  
        console.log(data.toString());

        let body = "<h1>Hello World</h1>"
        let httpResponse = "HTTP/1.1 200 OK\r\n"+
        "Content-Type: text/html\r\n"+
        "Connection: Closed\r\n"+
        "Content-Length :$"+body.length+"\r\n"+
        "\r\n"
        +body;
        
        socket.write(httpResponse);
        socket.end();
    });
    
    
});