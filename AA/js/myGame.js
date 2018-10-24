var randomNumber = Math.floor((Math.random() * 101));
var guessField = document.querySelector('.guessField');

var guessSubmit = document.querySelector('.guessSubmit');
var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessCount = 1;
var resetButton;
guessField.focus();

function checkGuess() {
    var userGuess = Number(guessField.value);

    if (guessCount === 1) {
        guesses.textContent = '上次猜的数'
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = '恭喜你！猜对了！';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    }
    else if (guessCount === 10) {
        lastResult.textContent = '!!!GAME OVER!!!';
        lowOrHi.textContent = '';
        setGameOver();
    }
    else {
        lastResult.textContent = '你猜错了！';
        lastResult.style.backgroundColor = 'red';

        if (userGuess < randomNumber) {
            lowOrHi.textContent = '刚才你猜低了!';
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = '刚才你猜高了!';
        }

    }
    guessCount++;

    guessField.focus();
    guesses.style.backgroundColor = "yellow";
}

guessSubmit.addEventListener('click', checkGuess);

// var resetButtonP=document.querySelector("div.resultParas p:last-child");
// console.log(resetButtonP);
// resetButtonP.style.display="block";
function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;

    resetButton=document.createElement('button');

    resetButton.textContent='开始新游戏';

    document.body.appendChild(resetButton);

    resetButton.addEventListener('click',resetGame);
}


// checkGuess();

