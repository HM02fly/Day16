class Person {
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
  }

  getPerson() {
    let personInfo = `Name: ${this.name}, email: ${this.email}, age: ${this.age}`;
    return personInfo;
  }
}
let person = new Person("Hamo", "hamo@gmail.com", 26);
console.log(person.getPerson());

exports.Person = Person;
module.exports = Person;
