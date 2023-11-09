//100000000 IS PRINTED OUT NO MATTER THE TIME DELAY BECAUSE setTimeout is an ASYNCHRONOUS function
//It is only executed AFTER ALL THE ITERATIONS AND THE CALL BACK FUNCTION HAS BEEN CALLED



let i = 0;

setTimeout(() => console.log(i), 100); // ?

// assume that the time to execute this function is >100ms

for(let j = 0; j < 100000000; j++) {

  i++;

}
