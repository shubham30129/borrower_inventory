var con=require('../../config/config');
exports.login=(req,res)=>{
    var email=req.body.email;
    var pwd=req.body.pwd;
    console.log(email,pwd);
    var qry = "select * from user where email='"+ email +"'";
    con.query(qry,(error,result)=>{
        if(error) res.status(500).send(error);
        if(result.length){
            if(result[0].password === pwd) {
                delete result[0].password;
                return res.send(result[0]);
            }
            else{
                res.status(401).send({'Message':'Invalid Email and password combination'});
            }

        }
        else {
            res.status(404).send({msg : 'User Not Found'} );
        }
    });
    //  res.send('recive');
};