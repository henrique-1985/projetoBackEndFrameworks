const db = require("./db")


const Cadastro = db.sequelize.define('cadastros',{

   // id:{
        //type:db.Sequelize.INTEGER.UNSIGNED,
        //autoIncrement:true,
      //  primaryKey:true

    //},
    nome: {
        type:db.Sequelize.STRING
    },
    email: {
        type:db.Sequelize.STRING
    },
    fone:{
        type:db.Sequelize.STRING
    },
    senha:{
        type:db.Sequelize.STRING
    },
    
});

//Criar a tabela

//Tranformar de volta pra comentário depois de criar a tabela!(evita duplicatas)
Cadastro.sync({force:true})

module.exports = Cadastro