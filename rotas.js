const express = require('express')
const rotas = express.Router()

let cursosInfo = [
    {'curso':'node','info':'Curso de Node.js'},
    {'curso':'react','info':'Curso de React.js'},
    {'curso':'python','info':'Curso de Python'},
    {'curso':'java','info':'Curso de Java'},
]

rotas.get('/', (req, res) => {
    res.json({hello:'Welcome!'})
})

rotas.get('/:cursoId', (req, res) => {
    const curso = req.params.cursoId
    const cursoInfo = cursosInfo.find(i => i.curso == curso)
    if(!cursoInfo) {
        res.status(404).json(
            {erro:'Course not found', courseSearched:curso}
        )
    } else {
        res.status(200).json(cursoInfo)
    }
})

module.exports = rotas;