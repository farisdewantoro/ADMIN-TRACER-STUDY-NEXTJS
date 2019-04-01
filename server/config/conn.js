const mysql = require('mysql');
const util = require('util');
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
con.query = util.promisify(con.query);
module.exports = con;