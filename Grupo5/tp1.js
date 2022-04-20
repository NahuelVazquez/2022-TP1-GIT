var http = require("http");
http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   // Send the response body as "Hello World
   response.end('Hell World, Matias y Joel :P :)\n');
   response.end('Hell World, Juliana:)\n');
   response.end('Hellow World, soy Lu :)\n');
   response.end('Hello MY WONDERFULL World\n');
   //agregue un comentario
}).listen(8081);
// Console will print the message
console.log('Server running at http://127.0.0.1:8081/%27');

function division(x,y){
	if (y==0){
console.log('No divisible por cero');
} else {
	return x/y;
}
}

function suma(x,y){
	return x+y;
}

function resta(x,y){
	return x-y;
}
