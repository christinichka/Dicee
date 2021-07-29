let randomNumber1 = Math.floor(Math.random() *6) + 1;
// console.log(randomNumber1);

let randomNumber2 = Math.floor(Math.random() *6) + 1;

let randomDice = "dice" + randomNumber1 + ".png";

let randomImgSrc = "images/" + randomDice;

let randomImgSrc2 = "images/dice" + randomNumber2 + ".png";

let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImgSrc);

let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImgSrc2);

// function changeTitleText() {
    if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").innerHTML = "Draw!";
    } else if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    } else {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    }
// }