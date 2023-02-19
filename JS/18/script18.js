let myDiv = document.querySelector("#myDiv");
function addStyle() {
  myDiv.setAttribute("class", "style");
}
function removeStyle() {
  myDiv.removeAttribute("class");
}
function setAttribute1() {
  let attribute = prompt("what attribute?");
  let value = prompt("What value?");
  myDiv.setAttribute(attribute, value);
}
function getAttribute1() {
  let attribute = prompt("what attribute?");
  alert(myDiv.getAttribute(attribute));
}
function hasAttribute1() {
  let attribute = prompt("what attribute?");
  if (myDiv.hasAttribute(attribute)) {
    alert("Yes , it has");
  } else {
    alert("No , it has'nt");
  }
}
