let express= require('express');
let bookMod=require('../Models/Book');


exports.getAllBooks=function(req,res,next){
    res.json(bookMod.getAllBooks);
}

exports.getBookById=function(req,res,next){
    res.json(bookMod.getBookById);
}
exports.addBook= (req,res,next)=>{
    res.json(bookMod.addBook);
}
exports.deleteBook= (req,res,next)=>{
    res.json(bookMod.deleteBook);
}

exports.updateBooks= (req,res,next)=>{
    res.json(bookMod.updateBooks);
}