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

const getAllUser = async () => {
  const [result] = await dbConnection.query('SELECT * FROM users');
  return result;
};

const verifyUser = async (username, password) => {
  const [result] = await dbConnection.query(
    `SELECT * FROM users WHERE
        username='${username}' AND
        password='${password}'`,
  );
  return result.length === 1;
};

module.exports.createUser = createUser;
module.exports.getAllUser = getAllUser;
module.exports.verifyUser = verifyUser;
