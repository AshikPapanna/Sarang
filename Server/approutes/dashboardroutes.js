var dashboardrouter=require('express').Router();

dashboardrouter.get('/',function(req,res){
    console.log(req.headers);  
      if(!req.user){
        res.send("error");
        
    }
    res.send(req.user);
})

module.exports=dashboardrouter;