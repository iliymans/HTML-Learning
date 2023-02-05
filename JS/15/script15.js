let myDiv = document.querySelector("#mydiv");
function func() {
  if (myDiv.className == "div2") {
    myDiv.className = "div1";
  } else {
    myDiv.className = "div2";
  }
}
