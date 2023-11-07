
let arr=[];
arr[0]="Ariho";
arr[1]=10;
console.log(arr);
console.log("nan"/3);
var x="String"
if(typeof x=='string'){
    console.log('Gotcha bitch');
}
let string1='engato';
const string2='kilo';
let string3 = `I have ten ${string2}s of dick`;
console.log(string3);
write();
function write(){
let globa=6969696969696969696969966969696n;
console.log(globa);
}
//multiword keys: use "quo tes". Accessing multiword property, obj."quo tes" WONT WORK. USE []
let obj = new Object();
obj.virtue="truth";
obj.postn=9;
obj['two words']=2;
delete obj.virtue;
console.log(obj);
console.log("**************************************");
let animal = {
    eats: true
    };
    // create a new object with animal as a prototype
let rabbit ={
    ears: 'long'
    };
//rabbit = Object.create(animal);
rabbit._proto_=animal;
console.log(rabbit.eats);
console.log(rabbit.ears);
console.log("**************************************");
let bobj1={one:1};
let bobj0=Object.create(bobj1);
bobj0.zero=0;
console.log(bobj0.one);
console.log(bobj0.zero);
console.log("**************************************");
console.log(some);
var some=10;
console.log(some);
console.log("**************************************");
function ref(num1){
    return 1+1+num1;
}
let referee=ref;
console.log(referee(2));
function ref2(num1){
    console.log(1+1+num1);
}
referee=ref2;
setTimeout(referee,5000,5);
console.log("asynchronous fucker");
