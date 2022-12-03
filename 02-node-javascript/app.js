var http=require('http');
var module1=require('./module-1');
var module2=require('./module-2');

function onRequest(request,response){
    response.writeHead(200,{'Content-type':'text/plain'});
    response.write(module2.myVariable);
    module2.myFunction();
    response.end();
}

http.createServer(onRequest).listen(8000);