const db = require("./db")

const Pontuacao = db.sequelize.define('pontuacao',{
   
    ponto: {
        type:db.Sequelize.STRING
    },
    
})

//Criar a tabela
//Pontuacao.sync({force:true})

module.exports = Pontuacao