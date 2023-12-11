const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Node.js!')
})

app.listen(port || 3000, () => {console.log('Server running')})