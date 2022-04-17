var http = require('http');
var url = require('url');

var server = http.createServer((req, res) => {
   var queryObj = url.parse(req.url, true).query;
   res.writeHead(200, {
       'Content-Type': 'text/html; charset=UTF8'
   })
   var name = queryObj.name;
   var age = queryObj.age;
   var sex = queryObj.sex;
   res.write(`El servidor aceptó el envío. Su nombre es: ${name}, edad: ${age}, sexo: ${sex}`);
   res.end();
})
server.listen(8081, '127.0.0.1');