const http = require('http')

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment;filename=samplescvfile.csv");

    res.writeHead(200);
    res.end(`id,name,email\n1,John Doe,doejohn@sample.com`);
    
};

const server = http.createServer(requestListener); 

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});


