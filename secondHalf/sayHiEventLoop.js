// const fs = require('fs');
// console.log('first');
// fs.readFile('sayHi.txt', (data) => console.log(data));
// console.log('third');
//******************************************************************** */
// const fs = require('fs');
// console.log('first');
// fs.readFile('sayHi.txt', (err,data) => console.log(data));
// console.log('third');
//******************************************************************** */
// const fs=require('fs');
// fs.readFile('sayHi.txt',(err,data)=>{console.log(data.toString())});

//******************************************************************88 */
// console.log("start");
// setTimeout(()=>{console.log("In the time out")},0);
// for(let i=0;i<30;i++){
//     process.nextTick(()=>{console.log("suzan");});
// }

// console.log("end");
//********************************************************************/
// console.log("start");
// const prom=new Promise((resolve,reject)=>{console.log("Inside promise");resolve("Worked");reject("failed")});
// prom.then((data)=>console.log(data));
// process.nextTick(()=>{console.log("Ticklish")});
// console.log("end");
//******************************************************************/
// console.log('start');
// const fs=require('fs');
// fs.readFile('sayHi.txt',(err,data)=>{console.log(data.toString())});
// setTimeout(()=>{console.log("In timer")},0);
// console.log('end');
// setImmediate(()=>{console.log("In immediate")});
//****************************************************************/
// console.log('start');
// const fs=require('fs');
// fs.readFile('sayHi.txt',(err,data)=>{
//     console.log(data.toString());
//     setImmediate(()=>{console.log("In immediate.....hahahaha")});});
// setTimeout(()=>{console.log("In timer")},0);
// console.log('end');

//************************************************************************************************************************/
//*************************************************************************************************************************/
//************************************************************************************************************************8/


// const fs = require('fs');


// fs.readFile('hello.txt', () => {

//     console.log('readFile....');

// });

// setTimeout(() => console.log('timeout'), 0);

// setImmediate(() => console.log('Immediate'));

// const {getFullname} = require('./pattern3');

// getFullname();

// const result = (function(exports, module){

//     exports = module.exports;

//     exports.firstname = 'John';

//     module.exports.lastname = 'Smith';

//     exports = {

//         getFullName: function(){

//             console.log('John Smith')

//         }

//     }

//     return module.exports;

// }).apply(null, [null, {exports: {}}]);

// console.log(result);


// console.log('start');
// const result = new Promise((resolve, reject) => {
//   console.log(1);
//   setTimeout(() => reject('Whoops!'), 1000);
// })
//   .then(res => {
//     console.log(res); // Log the resolved value
//     return res;        // Pass the value to the next chain
//   })
//   .catch(error => {
//     console.error(error); // Log the caught error
//     return 'Error Happens';
//   })
//   .finally(() => console.log('finally block executed'));
// console.log(result); // Output: Promise { <pending> }
// console.log('end');


// let dr =new Promise((res,rej)=>{
//   res('fuck off')
// });

// dr.then(
//   console.log);

new Promise((rej,res)=>{
  let rand =Math.random();
  console.log("start",rand);
  if(rand>0.5){
    res("Success");
  }else{
    rej("Epic fail");
  }

}).then((data)=>{console.log(data, ' Big time success')}).catch(error=>console.log(error,' Big time error'));



