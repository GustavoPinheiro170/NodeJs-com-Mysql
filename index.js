(async () => {
    const db = require('./db');
    console.log('SELECT * FROM usuario;');

    //  Fazendo o select
    const usuarios = await db.selectCostumers();
    console.log(usuarios);

    // Inserindo usuario
    const insert = await db.insertCostumers({nome: 'José', idade:26});
    console.log(insert);

    // Alterando usuario ( passar o ID como primeiro parametro)
    const update = await db.updateCostumer(7,{nome:'Gustavo', idade: 24});
    console.log(update);

    // Deletando usuario pelo ID
    const deleteUser = await db.deleteCostumer(7);
    console.log(update);
})();