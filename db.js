// Conectando a base da dados utilizando Mysql2
async function connect() {
    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection;
    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection("mysql://root:@localhost:3306/nosql")
    console.log('conectou no Mysql');
    global.connection = connection;
    return connection;
}
// Fazendo o select em toda tabela usuario 
async function selectCostumers() {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM usuario;');
    return  rows;
}
// Fazendo o insert na tabela usuario
async function insertCostumers(costumer) {
    const conn = await connect();
    const sql = 'INSERT INTO usuario(nome, idade) values (? , ?);';
    const values = [costumer.nome, costumer.idade];
    await conn.query(sql, values)
}
// Alterando um registro na tabela usuario
async function updateCostumer(id, costumer){
    const conn = await connect();
    const update = 'UPDATE usuario SET nome=?, idade=? WHERE id=?';
    const values = [costumer.nome, costumer.idade, id];
    return await conn.query(update, values);
}
// Deletando um registro na tabela usuario
async function deleteCostumer(id) {
    const conn = await connect();
    const sqlDelete = 'DELETE FROM usuario WHERE id=?;';
    return await conn.query(sqlDelete, [id]);
}

// Exportando as funções
module.exports = {selectCostumers, insertCostumers, updateCostumer, deleteCostumer}