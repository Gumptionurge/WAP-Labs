let bookLibrary=[{"bookId":1,"title":"Node.js","author":{
    "authorId": 303,
    "firstname": "Edward",
    "lastname": "Jack"
}}, {"bookId":2,"title":"Angular",    "author": {
    "authorId":308,
    "firstname": "John",
    "lastname":"Smith"
    }}];
let counter=bookLibrary.length;


        //QESUTION 1 GET http://localhost:3000/books/{bookId} – this API returns a single book based on book id


/*
let express = require('express');
let app=express();
app.get('/books/:bid',(req,res)=>{
    let id = req.params.bid;
    let bookFound =bookLibrary.find((book)=>{
       return book.bookId==id;
    if(bookFound){
        res.status(200).json(bookFound);
    }else{
        res.status(404).json("Book not found")
    }
    })
});
app.listen(3000)
*/


        /*
        POST http://localhost:3000/books - this API saves a single book into database. The
        book id automatically generated on the server side by increment 1 each time.
        Example
        */


/*
let express=require('express');
let app =express();
let bodyParser= require('body-parser');
app.use(bodyParser.json());

app.post('/books',(req,res)=>{
    let newBook= req.body;
    if(newBook){
        counter++;
        newBook['bookId']=counter;
        bookLibrary.push(newBook);
        res.status(201).json(`Book Successfully added,JSON.stringify(newBook)`);

    }else{
        res.status(500).json("Youre trying to add an invalid book, conplete all fields");
    }

    });
*/


        /*
        GET http://localhost:3000/books?firstname={firstname} – this API returns courses
        which their author’s firstname contains passed query string, case insensitive.
        */
    
let express = require('express');
let app=(express);
app.set("case sensitive routing",false);

app.get('/books',(req,res)=>{
let fname=req.query.firstname;
if(fname){
let booksWithfname= bookLibrary.filter((book)=>{
        book.author.firstname.toLowerCase().includes(fname.toLowerCase());
    })
    if(booksWithfname>0){
        res.status(200).json(`Book(s) Found, JSON.stringify(booksWithfname)`);
    }else{
        res.status(400).send('Book not found');
    }
}else{
    res.status(400).send('Invalid first Name');
}

})

