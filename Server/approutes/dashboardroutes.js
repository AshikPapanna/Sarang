var dashboardrouter=require('express').Router();

dashboardrouter.get('/',function(req,res){
    res.send(req.user);
})

module.exports=dashboardrouter;