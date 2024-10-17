const mysql = require('mysql');

const dbconnect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password"
});

dbconnect.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});