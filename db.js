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

const insereClientes = async(clientes) => {
    const con = await conectar()
    const sql = 'INSERT INTO people (name, age) VALUES (?,?)'
    const valores = [clientes.name, clientes.age]
    await con.query(sql,valores)
}

const atualizaClientes = async(id, clientes) => {
    const con = await conectar()
    const sql = 'UPDATE people SET name=?, age=? WHERE id=?'
    const valores = [clientes.name, clientes.age,id]
    await con.query(sql,valores)
}

const deletarClientes = async(id) => {
    const con = await conectar()
    const sql = 'DELETE FROM people WHERE id=?'
    const valores = [id]
    await con.query(sql,valores)
}

module.exports = {todosClientes, insereClientes, atualizaClientes, deletarClientes}