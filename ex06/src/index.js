const firstName = (firstName) => {
  return firstName.toUpperCase();
};

const lastName = (lastName) => {
  return lastName.toLowerCase();
};
console.log(firstName("haris"));
console.log(lastName("MULAHMETOVIC"));

exports.firstName = firstName;
exports.lastName = lastName;

module.exports = firstName;
