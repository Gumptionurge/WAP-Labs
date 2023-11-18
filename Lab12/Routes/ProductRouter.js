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

/*
const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/add', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
});

router.post('/save', (req, res) => {
    res.send(`${req.body.title}, ${req.body.price}`);
});

router.delete('/delete', (req, res) => {
    res.send(`${req.body.title}, ${req.body.price}`);
});


router.put('/edit', (req, res) => {
    res.send(`${req.body.title}, ${req.body.price}`);
});

module.exports = router;
*/