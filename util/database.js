const Sequelize = require("sequelize");
const env = require("dotenv").config;
const dbPassword = env().parsed.DB_PASSWORD;

const sequelize = new Sequelize("node-complete", "root", dbPassword, {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
