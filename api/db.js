const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3333,
  user: "root",
  password: "retkeily123",
  database: "retkeily_info"
});

connection.connect(function(err) {
  if (err) throw err;
});

module.exports = connection;
