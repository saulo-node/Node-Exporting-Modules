const http = require('http');
const port = 3000;
const host = '127.0.0.1';

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/html'});
    if(req.url == '/') {
        res.write('<h1>Welcome</h1>')
    } else if (req.url == '/canal') {
        res.write('<h1>Aprenda Hebraico com a Bíblia</h1>');
    } if (req.url == '/curso') {
        res.write('<h1>Curso de hebraico</h1>');
    }
    res.end();
})

server.listen(port, host, () => {console.log('Server is on...')})