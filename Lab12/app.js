let express=require('express');
let path=require('path');
let routeUser=require('./Routes/UserRouter');
let routeProduct=require('./Routes/ProductRouter');
let app=express();

app.use(express.static('Views'));

app.use(express.urlencoded());

app.use(routeProduct);

app.use(routeUser);


app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'Views','404.gif'));
});

app.use((err, req, res, next) => {
    res.status(500).send('Internal Server Error!');
});

app.use()
app.listen(3000,()=>{console.log("Listening on 3000")});