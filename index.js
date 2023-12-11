const express = require('express')
const rotas = require('./rotas')
const port = process.env.PORT || 3000

const app = express()

app.use('/', rotas)

app.get('*', (req, res) => {
    res.send("Channel: Saulo programmer")
})

app.listen(port, () => {console.log('Running...')})