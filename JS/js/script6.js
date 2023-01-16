// #6
let time = prompt("What time is it?");
if(time>=5 && time<=11){
    alert("Good morning");
}
else if(time>11 && time<=17){
    alert("Good afternoon");
}
else if(time>17 && time<21){
    alert("Good evening");
}
else if(time>=21 && time<=24){
    alert("Good night");
}
else if(time>=1 && time<5){
    alert("Why you are awake?!!!");
}
else{
    alert("WRONG!!!!!!!")
}