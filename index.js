var x = Math.random()*6 + 1;

var randomNumber1 = Math.floor(x);

var randomDiceImage1 = "dice" + randomNumber1 + ".png";

var imageDiceSource1 = "images/" + randomDiceImage1;

document.querySelectorAll("img")[0].setAttribute("src" , imageDiceSource1);


var y = Math.random()*6 + 1; 

var randomNumber2 = Math.floor(y);

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var imageDiceSource2 = "images/" + randomDiceImage2;

document.querySelectorAll("img")[1].setAttribute("src" , imageDiceSource2);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw!!";
}