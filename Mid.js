// const b=Symbol('dick');

// console.log(typeof b);

// let c= Array.from('Ariho');
// console.log(c);

// let d=[];d.length=3;d.push(1);d.push(2);d.push(3);
// console.log(d);
// d[0]=-2;d[1]=-1;d[2]=0;d[3]=69;
// console.log(d);
// let e= [...d];
// console.log(e);
// let f=Array.of(d);
// console.log(f);


// console.log('5ttt'*6)
// console.log(parseInt("5ttt")*6)
// console.log("5ha"<6);//NaN compared to anything will always be false
// console.log(6>"5ha")
// console.log(parseInt("5ha")<6);
// console.log("5"<6);
// console.log("5.0" == 5);
// console.log("5.0" === 5);

// if("MyDick Big"){
//     console.log("My dick is HUUUGE");
// }
// console.log(!!"Good in bed");//Falsey values 0,0.0,null,NaN,undefined,""//empty string,false

// console.log(`
// blah
// blah
// blah
// `);

// console.log(1+"1");
// console.log(1-"1");

// let h={"I am a whore":1,yes:true};
// console.log(h['I am a whore'], h.yes);
// h['2']="two";//impossible to h.'2'=

// function one(){
//     console.log("This is function one");
// }
// let two = function(a){
//     console.log("Function two has: "+a)
// }
// one();
// two(2);

// const factorial = function fac(n) {
//      return n < 2 ? 1 : n * fac(n - 1)

//      //3*2*1
// };

// console.log(factorial(5)); //5*4*3*2*1

// let arr=[1,2,3,4,5,6,7];
// console.log(arr.at(0));
// console.log(arr.at(-3));//third from behind

// let arr2=['a','z','d','x','j','e'];
// arr2.sort();
// console.log(arr2);
// arr2.reverse();
// console.log(arr2);


// // const aaa = [
// //     "Hydrogen",
// //     "Helium",
// //     "Lithium",
// //     "Beryllium"
// //     ];

// //     let xxx=aaa.filter((s)=>s.includes("ium"));
// //     console.log(xxx);
// //     console.log(aaa);
// //     console.log(aaa.filter(function(s) {
// //         return s.length > 7 }))
// //     console.log(typeof aaa.findIndex((s)=>s.includes('Be')));
// //     console.log(typeof aaa.find((s)=>s.includes('Be')));

// var a = [
//     "Hydrogen",
//     "Helium",
//     "Lithium",
//     "Beryllium"
//     ];
//     var a2 = a.map(function(s) { return s.length });
//     console.log("a2: " + a2);
//     var a3 = a.map(s => s.length);
//     console.log("a3: " + a3);

//     function calc(multiplier, base, ...numbers) {
//         var temp = numbers.reduce((accum, num) => accum + num, base);
//         return multiplier * temp;
//         }
//         var total = calc(2, 6, 10, 9, 8);
//         console.log("total: " + total);

//         let xString="String";
//         let yArray=Array.from(xString);
//         console.log(yArray.includes("n"));
//         console.log(xString.includes("n"));

        // const students = [
        //     { name: 'Quincy', grades: [99, 88], courses: ['cs301', 'cs303'] },
        //     { name: 'Jason', grades: [29, 38], courses: ['cs201', 'cs203'] },
        //     { name: 'Alexis', grades: [79, 78], courses: ['cs105', 'cs211'] },
        //     { name: 'Sam', grades: [91, 82], courses: ['cs445', 'cs303'] },
        //     { name: 'Katie', grades: [66, 77], courses: ['cs303', 'cs477'] }
        //     ];

        //     let quix=students.filter((stu)=>stu.courses.includes('cs303')).reduce(function(accu,elem,index,array){
                
        //         let average= elem.grades.reduce((acc,ele,inde,arr)=>acc+ele/arr.length,0)
                
        //         accu[elem.name]=average;
        //         return accu;
        //     },{})
        //     console.log(quix);

//         function greeting(greet){
//             let sayWhat = greet();
//             sayWhat();
//         }

//         function sayFuckYou(){
//             console.log("Fuck you");
//             return function(){
//                 console.log("Fuck you very much");
//             }
//         }

//         greeting(sayFuckYou);


//         function zee(){
//             console.log(arguments);
//             console.log(arguments.length);
//         }

//         zee(2,3);
// let oner={'a':'eh','b':'bee'}
// let minuteMaid={...oner,'c':'see'}
// console.log(minuteMaid);

// const digee={
//     a:"",
//     b:function(){
//         this.a='hello'
//         console.log(this.a);
//         let self=this;
//         function two(c){
//             self.a=c;
//         }
//         two("Fuck you");
//         console.log(this.a)
//     }
// }
// digee.b();

// const user = {
//     salute:"",
//     greet: function() {
    
//     this.salute="Hello";
//     console.log(this.salute); //Hello
//     const setFrench = (newSalute) =>{ //inner function
//     this.salute = newSalute;
//     };
//     setFrench("Bonjour");
//     console.log(this.salute); //Bonjour
//     }
//     };
//     user.greet();

    // const user = {
    //     salute:"",
    //     greet: function() {
        
    //     this.salute="Hello";
    //     console.log(this.salute); //Hello
    //     const setFrench = function(newSalute){ //inner function
    //     this.salute = newSalute;
    //     }.bind(this);
    //     setFrench("Bonjour");
    //     console.log(this.salute); //Bonjour
    //     }
    //     };
    //     user.greet();


    // const user = {
    //     salute:"",
    //     greet: function() {
        
    //     this.salute="Hello";
    //     console.log(this.salute); //Hello
    //     const setFrench = function(newSalute){ //inner function
    //     this.salute = newSalute;
    //     };
    //     setFrench.call(this,"Bonjour");
    //     console.log(this.salute); //Bonjour
    //     }
    //     };
    //     user.greet();

    // const user = {
    //     salute:"",
    //     greet: function() {
        
    //     this.salute="Hello";
    //     console.log(this.salute); //Hello
    //     const setFrench = (newSalute) =>{ //inner function
    //     this.salute = newSalute;
    //     };
    //     setFrench.apply(this,["Bonjour"]);
    //     console.log(this.salute); //Bonjour
    //     }
    //     };
    //     user.greet();

 
    //the value of this is changed by the self.....

    // let abra={a:1,b:2}
    // let brah=abra;
    // brah.a=3;
    // console.log(abra);

    // let group = {
    // title: "Our Group",
    // students: ["John", "Pete", "Alice"],
    // showList: function () {
        
    //      this.students.forEach((stud)=>{
    //             let zee =function(student) {
    //             console.log(this.title + ": " + student);
    //                   };
    //                   zee.apply(this,[stud]);
    //      });
    //        }
    //     };
    //     group.showList();


    // const students = [
    //     { name: 'Quincy', grades: [99, 88], courses: ['cs301', 'cs303'] },
    //     { name: 'Jason', grades: [29, 38], courses: ['cs201', 'cs203'] },
    //     { name: 'Alexis', grades: [79, 78], courses: ['cs105', 'cs211'] },
    //     { name: 'Sam', grades: [91, 82], courses: ['cs445', 'cs303'] },
    //     { name: 'Katie', grades: [66, 77], courses: ['cs303', 'cs477'] }
    //     ];

    //     let newObj=students.filter((obj)=>obj.courses.includes('cs303')).reduce((a,b,c,d)=>{
    //        let sum = b.grades.reduce((x,y,z,j)=>{
    //                     return x+y;
    //        } );
    //        let average=sum/(b.grades.length);
    //        a[b.name]=average;
    //        return a;
    //     },{}

    //    );

    //    console.log(newObj);
    // let aa=1;
    // function bee(a){
    //     console.log(a);
    //     let d=1;
    //     return function(z){
    //         console.log(z+aa+a+d);
    //     };
    // }

    // let zee=bee(12);
    // zee(26);

    //globa-aa, go to bee(12) 12 printed,

    // let obj1={a:1,b:2}; let obj2=Object.create(obj1);
    // obj1=Object.create(obj2);

    //obj1.__proto__=obj2;
    // console.log(obj1);

    // let obj3={a:1,b:2,c:3,d:4};
    // let arr1=[5,6,7,8,9];
    // for(let i in obj3){
    //     console.log(obj3[i]);
    // }
    // let natural='Natural';
    // for(let i of natural){
    //     console.log(i);
    // }

    // function User(name) {
    //     this.name = name;
    //     this.isAdmin = false;
    //     }
    //     let user = new User("Jack");
    //     console.log(user.name); // Jack
    //     console.log(user.isAdmin);
    //     console.log(User.isAdmin);//undefined
    //     User.isAdmin="Falsey";
    //     console.log(User.isAdmin);
    //     console.log(user.isAdmin);

//     const number=[1,5,18,2,77,108];
//     number.filter((x)=>x%2!=0).forEach((x)=>console.log(x));

// function sum(a){
//     return a.filter((x)=>x>20);
// }

// console.log(sum(number));

// let getNewArray = function(a){ 
//     return a.filter((x)=>x.length>=5&&x.includes('a'));
// };

// console.log(getNewArray(['Hello','Wonderful','Happy','People','Have a great day']));

// const group={title:'WAp',
// students:['jj','yoyo','tomtom'],
// showStudents(){
//     this.students.forEach(function(stu){
//         console.log(`${this.title},${stu}`);
//     }.bind(this));
// }}

// group.showStudents();

// function f() {
// }

// function g() {
//     return f;
// }

// let x = 1;
// function foo(y) {
//     return function (z) {
//         return x + y + z;
//     }
// }

// let res = foo(10)(20);
// console.log(res);

// function f(m, n, l){
    
//     if(l){
//         m();
//     } else {
//         n();
//     }
// }

// f(()=> console.log('Hi'),
//     function(){
//         console.log('Hello');
//     }, ()=>{});

// function askPassword(ok, fail){
//     const password = "rockstar";
//     if(password === "rockstar"){
//         ok();
//     } else {
//         fail();
//     }
// }

// const user = {
//     name: 'John',
//     loginOk: function(){
//         console.log(`${this.name} logs in!`);
//     },
//     loginFail: function(){
//         console.log(`${this.name} Failed..........`);
//     }
// }

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
// askPassword(() => user.loginOk.call(user), () =>user.loginFail.call(user));
// askPassword(() => user.loginOk.apply(user), () =>user.loginFail.apply(user));
// askPassword(() => user.loginOk(user), () =>user.loginFail(user));
// 1. let res1 = user.loginOk.call(user);
// 2. let res2 = user.loginFail.callser);
// 3. askPassword(res1, res2);

// let f="fuck off";
// let d=[...f];
// console.log(d);
// console.log(typeof f,typeof d);


function b(){
    zee=7;
}
console.log(global.zee);