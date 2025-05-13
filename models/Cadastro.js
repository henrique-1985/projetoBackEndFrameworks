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

//Tranformar de volta pra comentário depois de criar a tabela!(evita duplicatas)
//Cadastro.sync({force:true})

module.exports = Cadastro