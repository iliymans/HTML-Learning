// @iliymans
// Description: Use do..while() & break & continue.

document.write("<p>do..while()</p>");
let num = 10;
do {
  document.write(num);
  num++;
} while (num < 11);
document.write("<hr>" + "<br>");


document.write("<p>continue</p>");
for (let i = 0; i < 15; i++) {
  if (i == 3) {
    continue;
  }
  document.write(i + "<br>");
}
document.write("<hr>" + "<br>");


document.write("<p>break</p>");
for (let i = 0; i < 15; i++) {
  if (i == 10) {
    break;
  }
  document.write(i + "<br>");
}
