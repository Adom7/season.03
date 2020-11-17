const http = require('http');
const port = process.argv[2]

if (!port) {
  console.log("Usage : node e01.js <PORT> ") // si le port n'est pas renseigner.
  process.exit(0)
}
const requestListener = function (req, res) {
     res.writeHead(200);
  let regex = /(\?|\&)([^=]+)\=(?<result>[^&]+)/gm
let result = req.url.match(regex)
// console.log(result)
        console.log("My request dump : \n Get /"+result[0] + result[1] +result[2]+ " There is " + result.length +" query parameters")
        for (let i = 0; i < result.length; i++) {
            const element = result[i];
            const regex2  = /^\W+/gm ; 
            let value =  element.replace(regex2,"");
            final = value.replace('='," : ")
            console.log(final)
        }
res.end("done");

}

const server = http.createServer(requestListener);
server.listen(port);                // coté server Non fonctionnel a revoir.
                                    //Une fois le site local ouvert ça crash.


                                    
                                    
/*const http = require('http')
const url = require('url')
const querystring = require('querystring')

const PORT = process.argv[2]

// Check if PORT defined
if (!PORT) {
  console.log('usage: node e01.js <PORT>')
  process.exit(0)
}

// Execute HTTP Server
const server = http.createServer((req, res) => {
    const { query } = url.parse(req.url)

    if (query) {
        console.log('My request dump:')
        console.log(`GET /?${query}`)

        const queryObject = querystring.parse(query)
        for (const [key, value] of Object.entries(queryObject)) {
            console.log(`${key}: ${value}`)
        }

        res.write('done')
    }

    res.end()
})

server.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`)
})

*/  // Correction Dylan