const Sequelize = require("sequelize")

const sequelize = new Sequelize('postapp', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql' //mariadb, postgres...outros
});

module.exports={
	Sequelize: Sequelize,
	sequelize: sequelize
}