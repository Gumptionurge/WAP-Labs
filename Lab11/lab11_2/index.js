const http=require('http');
const fs=require('fs');
const server=http.createServer();
server.on('request',(req,res)=>{
let x=fs.createReadStream('./dew.jpg');
x.pipe(res);
}).listen(5000,()=>{console.log('Listening on 5000')})



/**TAKE FOREVER TO LOAD
 * so we use createReadStream
 */
// const http=require('http');
// const server=http.createServer();
// server.on('require',(req,res)=>{
//     res.writeHead(200,{'content-type':'image/'});
//     res.end('./dew.jpg');
// }).listen(5000,()=>{console.log('Listening on 5000')})
