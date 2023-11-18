let express=require('express');
let route=express.Router();

let controller=require('../Controllers/BookController');
route.get('/getAllBooks',controller.getAllBooks);

route.get('/getAllBooks/getBookById/:bid',controller.getBookById);

route.get('/getAllBooks/addBook',controller.addBook);

route.get('/getAllBooks/deleteBook/:bid', controller.deleteBook);

route.get('/getAllBooks/updateBooks/:bid',controller.updateBooks);


module.exports=route;