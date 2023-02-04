function sayHello() {
  let userName = prompt("What's your name??");
  document.getElementById("text").innerHTML = "Welcome " + userName;
  let pTag = document.createElement("p");
  pTag.innerHTML = "P tag created by JS";
  document.querySelector("body").appendChild(pTag);
}