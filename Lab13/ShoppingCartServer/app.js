const express = require('express');

const bookRouter = require('./Routes/BookRoute');

const app = express();

app.use(express.json());

app.use(bookRouter);


app.use((err, req, res, next)=>{
    res.status(500).send(`Server Error ${err.message}`);
})

app.listen(3000, () => {
    console.log('listen on 3000');
})