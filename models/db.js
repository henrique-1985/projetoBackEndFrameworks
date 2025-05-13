const Sequelize = require("sequelize")

const sequelize = new Sequelize('postapp', 'UsuarioGeral', '123456', {
    host: 'localhost',
    dialect: 'mysql' //mariadb, postgres...outros
});
//Conferir se a conexão foi realizada
sequelize.authenticate().then(function () {
    console.log('Conexão realizada como sucesso');
}).catch(function (err) {
    console.log('Erro ao realizar com a conexão com DB: ' + err);
});
module.exports={
	Sequelize: Sequelize,
	sequelize: sequelize
}