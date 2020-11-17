const http = require('http');
const port = process.argv[2]

if (!port) {
  console.log("Usage : node e01.js <PORT> ") // si le port n'est pas renseigner.
  process.exit(0)
}
const requestListener = function (req, res) {
  res.writeHead(200);
  console.log("My server is running at port " + port)
  console.log("My request headers dump : ")
  console.log("host : "+req.headers.host)
  console.log("accept : "+ req.headers.accept)
  console.log("user-agent : "+req.headers['user-agent'])
  res.end('done');
}

const server = http.createServer(requestListener);
server.listen(port);



//






// headers: {
//     host: 'localhost:4242',
//     'upgrade-insecure-requests': '1',
//     accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
//     'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.1 Safari/605.1.15',
//     'accept-language': 'fr-fr',
//     'accept-encoding': 'gzip, deflate',
//     connection: 'keep-alive'   
    
    