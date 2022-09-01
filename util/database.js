const mysql = require("mysql2");
const env = require("dotenv").config;
const dbPassword = env().parsed.DB_PASSWORD;

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-complete",
  password: dbPassword,
});

module.exports = pool.promise();
