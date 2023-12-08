const http = require('http');
const port = 3000;
const host = '127.0.0.1';
const url = require('url')

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write(req.url);
    const p = url.parse(req.url,true).query;
    res.write('<br/>' + p.name);
    res.write('<br/>' + p.course)
    res.end()
})

//http://localhost:3000/?name=saulo&curso=Curso+de+Arabe

server.listen(port, host, () => {console.log('Server running...')})