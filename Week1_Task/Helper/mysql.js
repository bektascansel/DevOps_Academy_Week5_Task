const mysql = require("mysql2");

const connection=mysql.createPool({
    connectionLimit:100,
    host:"lab-test.chkyok24wwfk.eu-west-1.rds.amazonaws.com",
    user:"admin",
    password:"4ulWuOBWDfTfAgPp4QHl",
    database:"example_app"
});



module.exports=connection;