const http = require('http')
const events = require('events')
const EventoEmissor = new events.EventEmitter()

const final = () => {console.log('Fim do processo')}

EventoEmissor.on('msg', () => {console.log('Node.js course 3000')})
EventoEmissor.on('fim', final)


const port = process.env.PORT || 3000
const returning = () => {console.log('Server running...')}
const server = http.createServer((req, res) => {
    EventoEmissor.emit('msg')
    res.writeHead(200, {'Content-Type':'text/plain'})
    res.write('Node.js - Saulo')
    EventoEmissor.emit('fim')
    res.end()
})

server.listen(port, returning)