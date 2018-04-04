var emp=require('../component/emp/empComponent');
var login=require('../component/login/loginComponenet');
var category=require('../component/category/categoryComponent');
var bodyparser=require('body-parser');
exports.route=(app)=>{
    app.post('/api/emp',emp.addEmp);

    // Login //
    app.post('/api/login',login.login);

    // Category //
    app.post('/api/category',category.addCategory);
    app.get('/api/category',category.display);
    app.get('/api/category/:id',category.edit);
    app.put('/api/category',category.updateCategory);
    app.delete('/api/category/:id',category.deleteCategory);
};