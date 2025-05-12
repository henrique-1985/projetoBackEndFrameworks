const db = require("./db")

const Cadastro = db.sequelize.define('cadastros',{
    nome: {
        type:db.Sequelize.STRING
    },
    email: {
        type:db.Sequelize.STRING
    },
    
})

//Criar a tabela
Cadastro.sync({force:true})

module.exports = Cadastro