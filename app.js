//abrindo servidor com node js
const http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200, {"content-Type":"teste/plain"});
    
    switch(req.url){
        case"/":
            res.end("Você está na página home")
            break;
        case "/contato":
            res.end("Você está na página de contato")
            break;
        default:
            res.end("você está no nosso servidor")
            break;
        
    }
    
    res.end("Meu primeiro servidor!");

    
}).listen(3000);