let redValue = document.querySelector("#red");
let greenValue = document.querySelector("#green");
let blueValue = document.querySelector("#blue");
let randomBtn = document.querySelector("#random");
let body = document.querySelector("body");
redValue.addEventListener("input", function () {
  body.style.backgroundColor = `rgb(${redValue.value} , ${greenValue.value} , ${blueValue.value})`;
});
greenValue.addEventListener("input", function () {
  body.style.backgroundColor = `rgb(${redValue.value} , ${greenValue.value} , ${blueValue.value})`;
});
blueValue.addEventListener("input", function () {
  body.style.backgroundColor = `rgb(${redValue.value} , ${greenValue.value} , ${blueValue.value})`;
});
