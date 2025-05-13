const db = require("./db")

const Pontuacao = db.sequelize.define('pontuacao',{
   
    ponto: {
        type:db.Sequelize.INTEGER
    },
    
})

//Criar a tabela
//Pontuacao.sync({force:true})

module.exports = Pontuacao