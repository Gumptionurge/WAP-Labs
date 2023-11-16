const person = require('./cachedPerson');
console.log(person.getName());
person.firstName='Hello';
person.lastName='World';
console.log(person.getFullName());
require('./cache');