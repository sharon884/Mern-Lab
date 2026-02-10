const http = require('http');


const server = http.createServer((req, res ) => {
    res.write("hai from server");
    res.end();
});


server.listen(3000,(req,res) => {
    console.log(`server listening on port http://localhost:${3000}`);
});


