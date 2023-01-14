// #1
// let name = "Iliya";
// let familyName = "Mansouri";
// let age = 16;
// let profilePicture = false;
// alert(name + " " + familyName + " " + age + " " + "Profile Picture :" + profilePicture);

// #2
// let userName = prompt("What's your name?");
// let userAge = prompt("How old are you?");
// alert("Welcome " + userName + " You are " + userAge +" years old");

// #3
// let number1 = 85;
// number1 +=1;
// alert(number1);

// #4
// let userAge = prompt("How old are you?");
// if(userAge>=18){
//     alert("You have access to site");
// }
// else{
//     alert("You can't enter to site");
// }

// #5
// let adminAge = prompt("How old are you?");
// let adminName = prompt("What's your name?");
// if(adminAge==16 && adminName=="iliya"){
//     alert("Welcome admin");
// }
// else{
//     alert("Welcome user");
// }

// #6
// let time = prompt("What time is it?");
// if(time>=5 && time<=11){
//     alert("Good morning");
// }
// else if(time>11 && time<=17){
//     alert("Good afternoon");
// }
// else if(time>17 && time<21){
//     alert("Good evening");
// }
// else if(time>=21 && time<=24){
//     alert("Good night");
// }
// else if(time>=1 && time<5){
//     alert("Why you are awake?!!!");
// }
// else{
//     alert("WRONG!!!!!!!")
// }

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
