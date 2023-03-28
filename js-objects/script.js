// @iliymans
// Description: Working with Objects.
let person1 = {
  // key : value
  firstName: "Iliya",
  lastName: "Mansouri",
  age: 16,
  isStudent: true,
  greet: function () {// Method
    console.log("Hello I'm " + this.firstName + " " + this.age + "YO");
  },
};

// Add new property.
person1.hairColor = "Black";

// Update value.
person1.age = 17;

// Delete property.
delete person1.isStudent;

// Check for existence property
console.log("isStudent" in person1);

// for..in
for (let x in person1) {
  if (x == "greet") {
    continue;
  }
  document.write(x + " :" + person1[x] + "<br>");
}

// Method
person1.greet();

// Arrays Object
let team = [
  { id: 1, firstName: "Ali", lastName: "Hoseini" },
  { id: 2, firstName: "Sadra", lastName: "Bagheri" },
  { id: 3, firstName: "Arad", lastName: "Taghizade" },
  { id: 4, firstName: "Bardia", lastName: "Rasoli" },
  { id: 5, firstName: "Arman", lastName: "Zare" },
];