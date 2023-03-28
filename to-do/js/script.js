// @iliymans

let text = document.querySelector("#input");
let number = 0;
function todo() {
  if (text.value == "") {
    alert("type something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = text.value;
    document.querySelector("ul").appendChild(li);
    text.value = "";
    number++;
    console.log(number);
    document.querySelector("span").innerHTML = "total :" + number;
  }
}
