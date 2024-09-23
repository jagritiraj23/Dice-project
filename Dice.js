function playSound(id) {
    const audio = document.getElementById(id);
    if (audio) {
        audio.play();
    }
}

function rollTheDice() {
    playSound('rollSound'); 
    let diceNum1 = document.querySelector(".img1");
    let diceNum2 = document.querySelector(".img2");

    diceNum1.setAttribute("src", "diceroll.gif");
    diceNum2.setAttribute("src", "diceroll.gif");

    let result = document.querySelector('h1');
    result.textContent = "";

setTimeout(() => {

    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;


    diceNum1.setAttribute('src', 'dice' + randomNumber1 + '.webp');
    diceNum2.setAttribute('src', 'dice' + randomNumber2 + '.webp');


    if (randomNumber1 === randomNumber2) {
        result.textContent = "It's a Draw!";
    } else if (randomNumber1 > randomNumber2) {
        result.textContent = "player 1 wins";
    } else {
        result.textContent = "player 2 wins";
    }
}, 50); 
}