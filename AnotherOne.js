var constipation={name:'Ariho',
age:30,
horny:function(){
    //console.log(`${constipation.name} is horny because he is ${constipation.age} years old`)
    console.log(this);
    console.log(`${this.name} is horny because he is ${this.age} years old`)
}
}; 
constipation.age=32; 
constipation.horny();
let dios=constipation;
constipation=null;
dios.horny();
console.log('****************************************************************************');
function tryIt(){
console.log(this);
}
tryIt();
let www=tryIt;
let xxx=tryIt;
www();
xxx();
console.log('****************************************************************************');
let namedFunc= function named(){
console.log("This is a named function expression");
};
namedFunc();
console.log('****************************************************************************');
let tebalemwa={
    first:function (){
    function second(){
        console.log(`The owner is ${this.name}`);
    }
    return second;
},
    name:'Ariho'
}

tebalemwa.first();
console.log('****************************************************************************');
"use strict"
let some=function(){
console.log("Hey baby");
console.log(this);
}
// setTimeout(some,2000);
console.log('****************************************************************************');
function brobey(a,b,c,f){
    console.log((a/b)*(f-c));
} 
let bro=brobey.bind(null,5,9,32);
bro(38);
bro(80);
console.log('****************************************************************************');
const user = {
    salute: ""
    ,
    greet: function() {
    this.salute = "Hello";
    console.log(this.salute); //Hello
    const setFrench = function(newSalute) { //inner function
    this.salute = newSalute;
    console.log(this.salute);
    console.log(this);
    };
    setFrench("Bonjour");
    console.log(this.salute); //Bonjour??
    console.log(this);
    console.log(global.salute);
    }
    };
    user.greet();

    console.log("******************************************************************************************************************");
    (function(){
       // "use strict";
        const x = {a:1, b:2, add(){return this.a + this.b}}
        console.log( x.add());  //3
        //debugger;
        const y = {a:1, b:2, add : () => {return this.a + this.b}}
        console.log( y.add());  //NaN
        }())
