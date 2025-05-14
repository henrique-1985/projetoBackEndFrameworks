const db = require("./db")

const Pontuacao = db.sequelize.define('pontuacao',{
   
    //id:{
        //type:db.Sequelize.INTEGER,
       // primaryKey:true,
        //references:{
            //model:'cadastros',
           // key:'id',
       // },
    //},
    ponto: {
        type:db.Sequelize.STRING
    },
    
});

//Criar a tabela
//Pontuacao.sync({force:true})

module.exports = Pontuacao
//cadastros.hasOne(pontuacao,{
    //foreignKey: "id",
   // sourceKey: "nome",
//});

//pontuacao.belongsTo(cadastros, {
   // foreignKey: "id",
    //targetKey: "nome",
//});
