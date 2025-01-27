let randomNumber1 = Math.floor((Math.random() * 6) + 1);
let randomNumber2 = Math.floor((Math.random() * 6) + 1);

while (randomNumber1 === randomNumber2) {
    randomNumber1 = Math.floor((Math.random() * 6) + 1);
    randomNumber2 = Math.floor((Math.random() * 6) + 1);
}

let src1 = `./images/dice${randomNumber1}.png`;
let src2 = `./images/dice${randomNumber2}.png`;
document.querySelector(".img1").setAttribute("src", src1);
document.querySelector(".img2").setAttribute("src", src2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "&#128681 Player 1 Won!";
}
else {
    document.querySelector("h1").innerHTML = "Player 2 Won! &#128681";
}

