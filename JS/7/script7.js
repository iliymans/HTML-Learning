// #7
let time = prompt("What time is it?");
switch (true) {
  case time >= 5 && time <= 11:
    alert("Good morning");
    break;

  case time > 11 && time <= 17:
    alert("Good afternoon");
    break;

  case time > 17 && time < 21:
    alert("Good evening");
    break;

  case time >= 21 && time <= 24:
    alert("Good night");
    break;

  case time >= 1 && time < 5:
    alert("Why you are awake?!!!");
    break;

  default:
    alert("WRONG!!!!!!!");
}
