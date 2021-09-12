var http = require("http")

http.createServer(function(request, response) {

    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, { 'Content-Type': 'text/plain' })

    // Send the response body as "Nice to Meet You!"
    response.end('Nice to Meet You on port 3333!\n')
}).listen(3333)

// Console will print the message
console.log('Server running')