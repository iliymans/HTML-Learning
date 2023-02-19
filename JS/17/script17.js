function divMaker() {
  let Mydiv = document.createElement("div");
  document.querySelector("#container").appendChild(Mydiv);
  Mydiv.innerHTML = prompt("What Text do you want see in div?");
  Mydiv.style.color = prompt("What color is text?");
  Mydiv.style.fontSize = prompt("How much is font-size?");
  Mydiv.style.backgroundColor = prompt("What color is background?");
  Mydiv.style.padding = prompt("How much is padding?");
  Mydiv.style.textAlign = prompt("What's text align?");
  Mydiv.style.margin = prompt("How much is margin?");
  Mydiv.style.border = prompt("How much border do you want?")
}
