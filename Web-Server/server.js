const http = ruquire('http')

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("My first server!");
};

const server = http.createServer(requestListener); 



