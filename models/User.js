const Sequelize = require("sequelize");
const db = require("../config/db");

const User = db.define("user", {
  email: { type: Sequelize.STRING },
  password: { type: Sequelize.STRING }
});

User.sync({});

module.exports = User;
