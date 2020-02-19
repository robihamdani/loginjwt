const sequelize = require("sequelize");

const db = new sequelize("nodelogin", "root", "", {
  dialect: "mysql"
});

db.sync({});

module.exports = db;
