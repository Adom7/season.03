const http = require('http');
const port = process.argv[2]

if (!port) {
  console.log("Usage : node e01.js <PORT> ") // si le port n'est pas renseigner.
  process.exit(0)
}
const requestListener = function (req, res) {
//   res.writeHead(200);
//   res.end('<html><h1>Hello World!</h1><html>');
//   console.log("Server is running at port " + port)
//   console.log(req.method)
  if (req.method == "GET") {
      res.write('<h1>Hello World!</h1>')
  }
  else if (req.method == "POST") {
    res.write("Heisenberg")
  }
  res.end()
}

const server = http.createServer(requestListener);
server.listen(port);