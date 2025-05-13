const db = require("./db")

const Pontuacao = db.sequelize.define('pontuacao',{
    quiz: {
        type:db.Sequelize.STRING
    },
    pontuacao: {
        type:db.Sequelize.DOUBLE
    },
    
})

//Criar a tabela
//Pontuacao.sync({force:true})

module.exports = Pontuacao