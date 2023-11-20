let express= require('express');
let bookMod=require('../Models/Book');


exports.getAllBooks=function(req,res,next){
    res.json(bookMod.getAllBooks());
}

exports.getBookById=function(req,res,next){
    res.json(bookMod.getBookById(req.params.bid));
}


exports.addBook= (req,res,next)=>{
    let{title,ISBN, publishDate,author}=req.body;
    new Book(null,title,ISBN, publishDate,author).addBook();
    res.status(201).json("Book added");
}
exports.deleteBook= (req,res,next)=>{
   bookMod.deleteBook(req.params.id);
   res.status(200).end();
}

exports.updateBooks= (req,res,next)=>{
    let{title,ISBN, publishDate,author}=req.body;
    let bk =new Book(title,ISBN.publishDate,author);
    bk.id=req.params.id;
    bk.updateBooks(bk.id);
    res.status(201).json(bk);
}