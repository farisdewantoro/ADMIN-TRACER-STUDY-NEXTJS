const mysql = require('mysql');

var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'tracerstudy',
    multipleStatements: true
});

con.connect((err) =>{
    if(err) throw err;
    else console.log('MySql connected')
});

module.exports = con;