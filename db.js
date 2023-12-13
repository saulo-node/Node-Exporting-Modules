const conectar = async () => {
    if(global.conexao && global.conexao.state != 'disconected')
        return global.conexao
    const mysql = require('mysql2/promise')
    const con = mysql.createConnection('mysql://root:1234@localhost:3306/node1')
    console.log('Conectou ao banco')
    global.conexao = con
    return con
}

const todosClientes = async() => {
    const con = await conectar()
    const [linhas] = await con.query('SELECT * FROM people')
    return await linhas
}
module.exports = {todosClientes}