const fs = require('fs');
const path = require('path');
const http = require('http');
const { dirname } = require('path');
const server = http.createServer();

// Lister
server.on("request", (req, res) => {
    if(req.url === '/read-file' && req.method === 'GET'){
        console.log(req.url, req.method);

        // read streaming file
        const readStreaming = fs.createReadStream('./texts/read.txt');
        readStreaming.on('data', (buffer) => {
            // console.log(buffer.toString(readStreaming));
            res.write(buffer)
        })
        readStreaming.on('end', () => {
            res.end('Ended.....')
        })
        // console.log(readStreaming);
        // console.log(path.join(__dirname, 'texts', 'read.txt'));
    }
    res.end("hello from listener...")
})


server.listen(5000, () => {
    console.log("server is listening on port 5000")
})