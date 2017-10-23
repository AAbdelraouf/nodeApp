var http = require('http');
http.createServer(function (req, res) {
    var welcomeMessage = "Hello earth!"
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(welcomeMessage);
}).listen(8888);