var randomNumber1;
var x = Math.random();
randomNumber1 = Math.round(x*5)+1;
var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");
var h11 = document.querySelector("h1");
img1.setAttribute("src", "./images/dice" + randomNumber1 + ".png");
x = Math.random();
var randomNumber2 = Math.round(x*5)+1;
img2.setAttribute("src", "./images/dice" + randomNumber2 + ".png");
 if(randomNumber1 > randomNumber2){
    h11.innerText = "Player 1 Wins!🚩";

 }
 else if(randomNumber1 < randomNumber2){
    h11.innerText = "Player 2 Wins!🚩";
 }
 else{
    h11.innerText = "Draw!";
 }