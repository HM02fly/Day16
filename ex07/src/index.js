const person = require("./nameFunction");
console.log(person.firstName("john"), person.lastName("doe"));
// person.firstName("john")
// person.lastName("doe")

module.exports = person;
