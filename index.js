(async () => {
    const  db = require('./db')
    console.log('Inserir novo cliente')
    const na = "Abdullah"
    const ag = 18
    await db.insereClientes({name: na,age: ag})

    console.log('Obter todos os clientes')
    const clientes = await db.todosClientes()
    console.log(clientes)
})()