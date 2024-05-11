const { DataTypes, STRING } = require('sequelize');
const Connection = require('../dbconfig/dbconn');

const dbConnection = Connection.connection;

const Users = dbConnection.define(
  'users',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

const createUser = (username, password) => {
  Users.create({
    username, password,
  });
};

const getAllUser = () => {
  const [result] = dbConnection.query('SELECT * FROM users');
  return result;
};

module.exports.createUser = createUser;
module.exports.getAllUser = getAllUser;
