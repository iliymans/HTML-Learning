// @iliymans
//  Description : It gives you the name of the day and if it's the weekend gives you a message.
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let weekDay = new Date().getDay();
if (weekDay == 5 || weekDay == 6) {
  document.querySelector("#time").innerHTML = "Have a nice weekend";
} else {
  document.querySelector("#time").innerHTML = "Today is  " + days[weekDay];
}
