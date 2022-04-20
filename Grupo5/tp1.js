var http = require("http");
http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   // Send the response body as "Hello World"
<<<<<<< HEAD
   response.end('Hell World, Matias :)\n');
=======
   response.end('Hellow World, soy Lu :)\n');
>>>>>>> parent of 356a2d5 (cambiando hello world)
}).listen(8081);
// Console will print the message
console.log('Server running at http://127.0.0.1:8081/%27');
