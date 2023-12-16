const mongodb = require('mongodb').MongoClient
const url = "mongodb+srv://saulo:<password>@cluster0.ifeepdx.mongodb.net/?retryWrites=true&w=majority";

mongodb.connect(url, (error, banco) => {
    if(erro) throw erro;
    const dbo = banco.db("Aprenda Hebraico com a Bíblia")
    const obj = {curso:"Curso de Alef Bet", canal:"Aprenda hebraico com a Bíblia"}
    const colecao = "cursos"
    dbo.collection(colecao).insertOne(obj, (erro, resultado) => {
        if(erro) throw erro
        console.log("1 novo curso inserido")
        banco.close()
    })
})