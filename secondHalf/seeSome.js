const fs = require('fs');
console.log('first');
fs.readFile('hello.txt', (err, data) => console.log(data.toString()));
console.log('third');