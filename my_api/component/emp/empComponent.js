var con=require('../../config/config');
var exupload=require('express-fileupload');
var path=require("path");
var mv = require('mv');
exports.addEmp=(req,res)=>{
    var fname=req.body.fname;
    var lname=req.body.lname;
    var img=req.files.img;
    console.log(fname,lname,img);
    var uploadfile=path.join( "images/"+img.name);
    console.log(fname,lname,img.name,uploadfile);
    img.mv(uploadfile,(err)=>{
        if(err){
            console.log(err);
        }
        else
        {
            console.log("success");
        }
    });
       res.send('recive');
};