exports.firstName='Smith';
exports.lastName='John';
exports=function(){
    console.log(firstName+" "+lastName);
}
exports.getFirstName=function(){console.log('John');}
// module.exports={
//     fName:'Jack',lName:'Reacher'
// }
module.exports.getLastName=function(){
    console.log('Smith');
}
