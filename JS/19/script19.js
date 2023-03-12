// #19:Array Methods
let cars = ["BMW", "Benz", "Ford", "Bugatti"];
let colors = ["Blue" , "Red" , "Green" , "Purple"]
let result;

// length() : length of an array
result = cars.length;

//  push() : add one or more items to end of the array
cars.push("Camaro", "GMC");

// pop() : Remove last item of an array
cars.pop();

// slice()
result = cars.slice(0, 2);

//  sort()
result = cars.sort();

// join() : convert an array to string
result = cars.join(" ");

result = [].concat(colors , cars);
console.log(result);
