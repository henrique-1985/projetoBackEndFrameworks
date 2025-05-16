const db = require("./db")

const Pontuacao = db.sequelize.define('pontuacao',{
   
    userId:{
        type:db.Sequelize.INTEGER,
        references:{
            model:'cadastros',
            key:'userId',
        },
    },
    ponto: {
        type:db.Sequelize.STRING
    },
    
});

//Criar a tabela
//Pontuacao.sync({force:true})



module.exports = Pontuacao
