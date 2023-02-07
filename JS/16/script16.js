let myDivClasses = document.querySelector("#test").classList;
function myFunc() {
  myDivClasses.add("Hello", "Hi");
  myDivClasses.remove("text");
  myDivClasses.replace("div", "testDiv");
  myDivClasses.toggle("MansOfACobra")
  if (myDivClasses.contains("Hello")) {
    console.log("YES");
  } else {
    console.log("NO");
  }
  console.log(myDivClasses);
}

// element.classList -> return list of tag classes
// element.classList.add() -> add one or more class to tag
// element.classList.remove() -> remove one or more class to tag
// element.classList.replace() -> replace one class with another one
// element.classList.contains() -> check is class available or not
// element.classList.toggle() -> toggle between class name