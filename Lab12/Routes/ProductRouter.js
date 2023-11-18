let express =require('express');
let router=express.Router();
let path=require('path');

router.get('/product',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','Views','product.html'));
});


router.post('/product',(req,res,next)=>{
res.send(`${req.body.productname}, ${req.body.quantity},${req.body.price}`);
});
module.exports=router;

