var con=require('../../config/config');
// Add new Category
exports.addCategory=(req,res)=>{
    var category = req.body.category;
    var userId = req.body.userID;

    qry = "insert into category(category_name,user_id,status) values('"+ category +"','"+ userId +"','yes')";
    con.query(qry,(error)=>{
        if(error){
            res.status(406).send(error);
        }
        else {
            res.status(200).send({'msg':'Add Sucessfully'});
        }

    });
};

exports.display=(req,res)=>{
    qry = "select * from category where status='yes'";
    con.query(qry,(error,result)=>{
        if(error){}
        else{
            res.send(result);
        }
    });
};

exports.edit=(req,res)=>{
    var id=req.params.id;
    qry = "select * from category where id='"+ id +"' and status='yes'";
    console.log(qry);
    con.query(qry,(error,result)=>{
        if(error){}
        else{
            res.send(result);
        }
    });
};

exports.updateCategory=(req,res)=>{
    var category = req.body.category;
    var catId = req.body.catID;

    qry = "update category set category_name='"+ category +"' where id='"+ catId +"'";
    con.query(qry,(error)=>{
        if(error){
            res.status(406).send(error);
        }
        else {
            res.status(200).send({'msg':'Update Sucessfully'});
        }

    });
};

exports.deleteCategory=(req,res)=>{
    var  id=req.params.id;
    qry="delete from category where id='"+ id +"'";
    console.log(qry);
    con.query(qry,(error)=>{
        if(error){
            res.status(404).send({'msg' : 'Record Not Found'+error });
        }
        else{
            res.status(200).send({'msg':'Dalete Successfully'});
        }
    });
}