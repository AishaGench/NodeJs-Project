const http = require('http');
const port = 5000;

const requestListiner =function(req,res){
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    // res.end(`<html><body><h1>Hello World</h1></body></html>`)

    if(req.url ==='/'){
        res.end('This is Home page.')
    }else if(req.url ==='/student'){
        res.end('This is Student page.')
    }else if(req.url ==='/admin'){
        res.end('This is Admin page.')
    }else if(req.url ==='/data'){
        res.writeHead(200,{'Content-Type': 'application/json'})
        res.write(JSON.stringify({ message: "This is a message from web server!"}))
    }else{
        res.end('404')
    }
}
const server = http.createServer(requestListiner);

server.listen(port,()=>{
    console.log(`Server is running`);
})