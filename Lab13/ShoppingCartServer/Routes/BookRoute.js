let express=require('express');
let route=express.Router();

let controller=require('../Controllers/BookController');

route.get('/',controller.getAllBooks);

route.get('/getBookById/:bid',controller.getBookById);

route.post('/addBook',controller.addBook);

route.delete('/deleteBook/:bid', controller.deleteBook);

route.put('/updateBooks/:bid',controller.updateBooks);


module.exports=route;