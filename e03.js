const http = require('http');
const fs   = require('fs');
const port = process.argv[2]

if (!port) {
  console.log("Usage : node e01.js <PORT> ") // si le port n'est pas renseigner.
  process.exit(0)
}
const requestListener = function (req, res) {
  res.writeHead(200);
  const data = fs.readFileSync('/Users/adlaneould/Desktop/Efrei/Node/CodeFlix/onecode/season.03/content.html')
  res.end(data);
  
}

const server = http.createServer(requestListener);
server.listen(port);