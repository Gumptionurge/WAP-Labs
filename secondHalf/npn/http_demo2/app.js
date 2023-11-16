const http=require("http");
const fs=require('fs');
const server= http.createServer();
server.on('request',(req,res)=>{
const file = fs.readFileSync('index.html','utf-8');
res.end(file);
}).listen(3000,()=>console.log("listening on 3000"));
