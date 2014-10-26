var fs      = require('fs');
var http    = require('http');
var request = require('request');

http.createServer(function(req, res) {
    req.pipe(request('http://www.google.no/images/srpr/logo11w.png')).pipe(res);
}).listen(8080);

console.log('Listening on port 8080');
