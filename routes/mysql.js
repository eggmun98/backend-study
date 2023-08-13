const express = require("express");
const router = express.Router();
const mysql = require("mysql");

require("dotenv").config();

router.get("/", (req, res, next) => {
  const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "nodedb",
  });

  connection.connect((err) => {
    if (err) {
      res.render("mysql", { connect: "연결실패", err: err });
      console.error(err);
      throw err;
    } else {
      res.render("mysql", { connect: "연결성공", err: "없음" });
    }
    connection.end();
  });
});

module.exports = router;
