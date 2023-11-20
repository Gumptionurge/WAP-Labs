    /*
    let promise = new Promise(
    function(resolve,reject) {
    }) ;
    console.log(promise);

    */
//Promise { <pending> }
    /*
    let promise = new Promise(
        ) ;
        console.log(promise);
    */
//ERROR
    /*
    let promise = new Promise(
    function(resolve,reject) {
        resolve();
    }) ;
    console.log(promise);
    */
//Promise{undefined}
    /*
    let promise = new Promise(
    function(resolve,reject) {
        reject();
    }) ;
    console.log(promise);
    */

//Promise { <rejected> undefined } AND ERROR UNCAUGHT EXCEPTION
    /*
    new Promise(
    function(resolve,reject) {
        reject(2);
    }) ;
    */
//UNCAUGHT EXCEPTION
    /*
    new Promise(
    function(resolve,reject) {
        resolve(2);
    }) ;
    */
//NOTHING IS PRINTED OUT
    /*
    new Promise(
    function(reject,resolve) {
        reject(2);
    }).then(console.log);
    */
//PRINT 2
    /*
    new Promise(
    function(reject,resolve) {
        reject(2);
    }).catch(console.log);
    */
//NOTHING IS PRINTED OUT
    /*
    new Promise(
    function(resolve,reject) {
        reject(2);
    }).then(console.log);
    */
//UNCAUGHT EXCPTION- UNHANDLED REJECTION
    /*
    new Promise(
    function(resolve,reject) {
        reject(new Error('Sinking slowly'));
    }).catch((error)=>{
        console.error(error.message);
    }) ;
    */
//Sinking slowly
    /*
    let promise=new Promise(
    function(reject,resolve) {
        reject(2);
    }).then(console.log);

    console.log(promise);
    */
//Promise { <pending> } 
//2
    /*
    let promise=Promise.resolve(2).then(console.log);
    console.log(promise);
    */
//Promise{<pending>}
//2
    /*
    let promise=new Promise(
    function(resolve,reject) {
        resolve(()=>{
            console.log(22);
        });
    }).then(console.log);
    console.log(promise);
    */
//Promise { <pending> }
//[Function (anonymous)]
    /*
    console.log(1);
    let promise=new Promise(
    function(resolve,reject) {
        resolve(setTimeout(()=>{
           console.log(69);
        },1000));
    }).then();
    console.log(promise);
    console.log(2);
    */
//1
//Promise { <pending> }
//2
//69
    /*
    console.log(1);
    let promise=new Promise(
    function(resolve,reject) {
    console.log(2);
    resolve(setTimeout(()=>{
       console.log(69);
    },0));
    }).then(console.log);
    console.log(3);
    console.log(promise);
    console.log(4);
    */
//1 then 2 then 3 then Promise{<pending>} then 4 then THE SETTIMEOUTOBJECT then 69
    /*
    console.log(1);
    let promise=new Promise(
    function(resolve,reject) {
    console.log(2);
    resolve(setTimeout(()=>{
    return 99;
    },0));
    }).then((data)=>{
    console.log(data);
    });
    console.log(3);
    console.log(promise);
    console.log(4);
    */
//1 then 2 then 3 then Promise{<pending>} then 4 then THE SETTIMEOUTOBJECT
    /*
    console.log(1);
    let promise=new Promise(
    function(resolve,reject) {
    console.log(2);
    setTimeout(()=>{
    console.log("In timeout");
    },0)
    resolve(22);
    }).then((data)=>{
    console.log(data*2);
    });
    console.log(3);
    console.log(promise);
    console.log(4);
    */
//1 then 2 then 3 then Promise{<pending>} then 4 then 44 then In timeout
    /*
    let x= new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("Give everything");
        },0);
    });
    console.log(x);
    */
//Promise{<pending>} then Give everything
    /*
    let x= new Promise((res,rej)=>{
        console.log("Print me before finally");
        setTimeout(()=>{
            res(33);
        },0);
    }).then((data)=>console.log(data*3)).finally(console.log("Finally at last"));
    console.log(x);
    */
//"Print me before finally" THEN "Finally at last" THEN Promise{<pending>} THEN   99
    /*
    let x= new Promise((res,rej)=>{
    console.log("Print me before finally");
    setTimeout(()=>{
        rej(new Error(33));
    },0);
    }).catch((data)=>console.log(data.message*3)).finally(console.log("Finally at last"));
    console.log(x);
    */
//SAME AS BEFORE JUST THAT THIS IS ERROR
    /*
    console.log("One");
    let promise = new Promise(function(resolve, reject) {
    const random = Math.random() ;
    console.log('random: ',random) ;
    if (random > 0.5) {
    setTimeout(()=> resolve("done!"),1000) ;
    } else {
    setTimeout(()=> reject(new Error("Whoops!") ), 1000) ;
    }
    });
    promise.then(result => console.log(result) )
    .catch(error=> console.log(error.message) )
    .finally(()=>console.log("Promise ready!"));  
    console.log("Two");
    console.log(promise);
    */
    
//One 0.4 Two Promise{<pending>} Whoops Promise ready(INCASE <0.5)
//NOTE: Finally is executed last when not chained to the promise function

//********************************************************************************************************* */
    /*
    async function a(){
    console.log("a plus");
    return 3;
    }
    async function b(){
    console.log("bee");
    let ret=await a();
    console.log(ret*10);
    }
    b();
    console.log(a)
    console.log(b);
    */
//bee THEN a plus THEN [AsyncFunction:a] then [AsyncFunction:b] then 30

    /*
    async function a(){
    console.log("a plus");
    }
    async function b(){
    console.log("bee");
    await a();
    }
    b();
    console.log(a)
    console.log(b);
    */
//bee THEN a plus THEN [AsyncFunction:a] then [AsyncFunction:b]
    /*
   console.log('start');
    async function f(){
    console.log("say something");
    return 1;
    }
    f();
    f().then(console.log);
    console.log('end');
    */
//start THEN say something THEN say something THEN end THEN 1
    /*
    let x= Promise.resolve(2).then((result)=>{return result*2}).then((result)=>{return result*3})
    console.log(x);
    x.then((res)=>console.log(res));
    */

//CHAINED. THE FIRST ONE IS FREE

/*
    console.log('start');

    async function foo(){
    console.log('inside foo....1');
    return 'Hello'; //return new Promise(resolve => resolve(2))
    // console.log('inside foo....2');
    }
    const result = foo();
    console.log(result);

    result.then(data => console.log(data));

    console.log('end');
    */
//start, inside fo..1, Promise{<hello>}, end, hello
    /*
    async function foo(){
    //throw new Error('Whoops');
    return 3;
    }
    async function bar(){
    console.log('1...');
    try {
     await foo();
    
    } catch(error){
        console.log('inside catch block, ', error.message);
    } finally{
        console.log('inside finally');
    }
    console.log('2....');
    }
    bar();
    console.log('end');
    */
//TRY CATCH AND ERROR
    /*
    console.log('start');
    const promiseObj = new Promise(function(resolve, reject){
        console.log('inside promise ... 1');
        // resolve('Hello'); //asynchronous
        reject('Whoops!');
        console.log('inside promise ... 2')
    });
    console.log("mid-rib");
    promiseObj.then(data => console.log(`resolve******* ${data}`))
        .catch(error => console.log(`error: ${error}`));
    console.log('end');
    */

    /*
    console.log('start');

    new Promise((resolve, reject) => {
        const random = Math.random();
        console.log('Promise start', random);
        if(random > 0.5){
            resolve('success');
        } else {
            reject('Whoops!');
        }
        console.log('Promise end');
    }).then(result => console.log('Inside resolve: ' + result))
        .catch(error => console.log('Inside reject: ' + error))
        .finally(()=>console.log('inside finally.....'));
    
    console.log('end');
    */
    /*
    global.x=5;
     function foo() {

        console.log(x);
        return 25;
    }
    
    console.log(foo());
    */

 

