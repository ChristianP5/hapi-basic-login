const Sequelize = require('sequelize');

const sequelize = new Sequelize('basic_login', 'root', 'Xiaogoesbrr1!', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
});

module.exports.connection = sequelize;
