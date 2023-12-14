(async () => {
    const  db = require('./db')
    // console.log('Novo cliente inserido')
    // const na = "Abdullah"
    // const ag = 18
    // await db.insereClientes({name: na,age: ag})

    // const id = 2
    // const na = "Moreach"
    // const ag = 38
    // await db.atualizaClientes(id, {name: na,age: ag})
    // console.log('Cliente' +  'atualizado')

    const id = 3
    await db.deletarClientes(id)
    console.log('Cliente' +  id + 'deletado')

    console.log('Obter todos os clientes')
    const clientes = await db.todosClientes()
    console.log(clientes)
})()