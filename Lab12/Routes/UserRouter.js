let express =require('express');

let path=require('path');

let router=express.Router();

router.get('/user',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','Views','user.html'));
});


router.post('/user',(req,res,next)=>{
res.send(`${req.body.firstName}, ${req.body.lastName},${req.body.age}`);
});
module.exports=router;

