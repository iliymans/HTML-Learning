// @iliymans
// Description: Working with Objects.
let person1 = {
  // key : value
  firstName: "Iliya",
  lastName: "Mansouri",
  age: 16,
  isStudent: true,
};
// Add new property.
person1.hairColor = "Black";

// Update value.
person1.age = 17;

// Delete property.
delete person1.isStudent;

// Check for existence property
alert("isStudent" in person1);
