var express=require('express');
var bodyparser=require('body-parser');
var cors=require('cors');
var app=express();
var exupload=require('express-fileupload');
var path=require("path");
var mv = require('mv');
app.use(exupload());

app.use(cors());
var routr=require('./routes/route');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static('images'));

routr.route(app);
app.listen(1212,(err)=>{
    if(err) throw err;
    console.log('server is start');
});