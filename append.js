const http = require('http')
const fs = require('fs')
const port = process.env.port

const server = http.createServer((req, res) => {
    fs.appendFile('test.txt', 'Arabic course', (err) => {
        if (err) throw err
        console.log('File created')
        res.end()
    })
})

server.listen(port || 3000, () => {console.log('Server running')})