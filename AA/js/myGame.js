var randomNumber=Math.floor((Math.random()*101));
var guessField=document.querySelector('.guessField');

var guessSubmit=document.querySelector('.guessSubmit');
var guesses=document.querySelector('.guesses');
var lastResult=document.querySelector('.lastResult');
var lowOrHi=document.querySelector('.lowOrHi');

var guessCoutn=1;
var resetButtom;
guessField.focus();

function checkGuess()
{
    guesses.textContent += guessField.value+" ";
    guesses.style.backgroundColor="yellow";

}

guessSubmit.addEventListener('click',checkGuess);

// checkGuess();

