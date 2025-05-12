const Sequelize = require("sequelize")

const sequelize = new Sequelize('postapp', 'User', '123456', {
    host: 'localhost',
    dialect: 'mysql' //mariadb, postgres...outros
});

module.exports={
	Sequelize: Sequelize,
	sequelize: sequelize
}