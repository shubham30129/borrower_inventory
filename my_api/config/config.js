var mysql=require('mysql');
var db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'inventory'
});
db.connect((err)=>{
    if(err) throw err;
    console.log('database is start');
});

module.exports=db;