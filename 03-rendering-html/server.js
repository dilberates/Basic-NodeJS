var http=require('http');
var fs=require('fs');

function onRequest(request,response){
    response.writeHead(200,{'Content-type':'text/html'});
    fs.readFile('03-rendering-html/render.html',null,function(error,data){
        if(error){
            response.writeHead(404);
            response.write('File is not found :(');
        }else{
            response.write(data);
        }
        response.end();
    });
}

http.createServer(onRequest).listen(3000);