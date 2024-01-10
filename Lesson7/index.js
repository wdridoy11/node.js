const http = require("http");
const fs = require("fs");
const port = 3000;
const hostName = '127.0.0.1';

const myServer = http.createServer((req,res)=>{

    const handleReadFile=(fileName,statusCode)=>{
        fs.readFile(`${fileName}`,(err,data)=>{
            res.writeHead(statusCode,{"Content-Type":"text/html"})
            res.write(data);
            res.end()
        })
    }

    if(req.url === '/'){
        handleReadFile("./views/index.html",200)
    }
    else if(req.url === '/about'){
        handleReadFile("./views/about.html",200)
    }
    else if(req.url === '/contact'){
        handleReadFile("./views/contact.html",200)
    }
    else{
        handleReadFile("error.html",400)
    }
})

myServer.listen(port, hostName,()=>{
    console.log(`Server is runnng at http://${hostName}:${port}`);
})