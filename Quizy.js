// let ub = {
//     firstName: "John",
//     sayHi() {
//     console.log(`Hello, ${this.firstName}!`);
//     }
//     };
//     console.log("normal");
//     ub.sayHi(); 
//     console.log("setTimeOut Normal Abnormality");
//     setTimeout(ub.sayHi,1000); 
//     console.log("Hide it closure");  
//     setTimeout(function(){ ub.sayHi()},1000); 
//     console.log("bind it");
//      let xOne=ub.sayHi.bind(ub);
//      setTimeout(xOne,1000);
//      console.log("call");
//      setTimeout(function(){ub.sayHi.call(ub);},1000);
//      console.log("apply");
//      setTimeout(function(){ub.sayHi.apply(ub);},1000);



    //  const user = {
    //     salute: ""
    //     ,
    //     greet: function() {
    //     this.salute = "Hello";
    //     console.log(this.salute); //Hello
    //     const setFrench = function(newSalute) { //inner function
    //     this.salute = newSalute;
    //     }.bind(user);
    //     setFrench("Bonjour");
    //     console.log(this.salute); //Bonjour??
    //     }
    //     };
    //     user.greet();

    // const user = {
    //     salute: ""
    //     ,
    //     greet: function() {
    //     this.salute = "Hello";
    //     console.log(this.salute); //Hello
    //     const setFrench = function(newSalute) { //inner function
    //     this.salute = newSalute;
    //     };
    //     setFrench.call(this,"Bonjour");
    //     console.log(this.salute); //Bonjour??
    //     }
    //     };
    //     user.greet();

    // const user = {
    //     salute: ""
    //     ,
    //     greet: function() {
    //     this.salute = "Hello";
    //     console.log(this.salute); //Hello
    //     const setFrench = function(newSalute) { //inner function
    //     this.salute = newSalute;
    //     };
    //     setFrench.apply(this,["Bonjour"]);
    //     console.log(this.salute); //Bonjour??
    //     }
    //     };
    //     user.greet();
//     let group = {
//         title: "Our Group",
//         students: ["John", "Pete", "Alice"],
//         showList: function() {
//         this.students.forEach((student) =>{
//             let func=function(st){
//         console.log(this.title + ": " + st);
//             };
//             func.call(this,student);
//         });
//         }
//         };
//         group.showList();

       
// const x = { a: 1, b: 2, add() { return this.a + this.b } }
// console.log(x.add()); //3
// const y = { a: 1, b: 2, add: () => { console.log(this) } }
// console.log(y.add());

// function foo(x) {
//     let m;
//     console.log(x, y);
//     if (x > 5) {
//     var y = 5;
//     m = x + y;
//     } else {
//     let z = 10;
//     m = z;
//     }
//     x = m;
//     console.log(x, y);
//     }
//     var x = 10;
//     foo(3);
//     console.log(x);
/*
let animal={eat:true}
let rabbit={jump:"can jump high"}
console.log(rabbit.jump);
rabbit.__proto__=animal;
console.log(rabbit.jump);
console.log(rabbit.eat);
*/
let animal={eat:true}
const rabbit={jump:"can jump high"}
console.log(rabbit.jump);
rabbit=Object.create(animal);
console.log(rabbit.jump);
console.log(rabbit.eat);
