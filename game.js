// isWinningGuess takes the player's guess as an argument and will return true if the guess is equal to the winning number. It will return false if the guess is not equal to the winning number.
function isWinningGuess(playersGuess, winningNumber) {
    return playersGuess === winningNumber;
}

// isPastGuess takes the player's guess and an array of all the guesses that the player has guessed before. If the array of past guesses includes the current guess, the function will return true, otherwise it will return false.
function isPastGuess(playersGuess, pastGuesses) {
    if (pastGuesses.includes(playersGuess)) {
        return true;
    } else return false;
}

// addWrongGuessToPastGuesses adds an incorrect guess to the array of pastGuesses and displays that guess on the screen.
function addWrongGuessToPastGuesses(playersGuess, pastGuesses) {
    pastGuesses.push(playersGuess);
    document.querySelector(`#guess-list li:nth-child(${ pastGuesses.length})`).textContent = playersGuess;
}

// isGameOver take the array pastGuesses as an argument and returns true if pastGuesses contains 5 or more integers. This means that the user has guessed incorrectly 5 times.
function isGameOver(pastGuesses) {
    if (pastGuesses.length >= 5) return true;
    else return false;
}

// howClose takes an integer playersGuess and an integer winningNumber and returns a string that describes how close the playersGuess was to the winningNumber.
function howClose(playersGuess, winningNumber) {
    const diff = Math.abs(playersGuess - winningNumber);
    if (diff < 10) return 'You\'re burning up!';
    else if (diff < 25) return 'You\'re lukewarm.';
    else if (diff < 50) return 'You\'re a bit chilly.';
    else return 'You\'re ice cold!';
}

// updateText takes a string as the argument and updates the 'subtitle' element on the page to display the given text.
function updateText(text) {
  document.getElementById('subtitle').textContent = text;
}

// youWin calls the updateText function, and passes in a string that shows the player that they won!
function youWin() {
    updateText('Congratulations, you won! Refresh the page to play again!')
}

// youLose calls the updateText function, and passes in a string that shows the player that they lost and will need to refresh the page to play again.
function youLose() {
    updateText('GAME OVER. Refresh the page to play again!');
}

// checkGuess is what YOU will write! checkGuess is called each time the user clicks the 'submit' button.
// checkGuess takes the playersGuess, winningNumber, and array of pastGuesses as arguments
// using these three values, use the above functions to write the behavior of the game. Reference the workshop docs for hints!
function checkGuess(playersGuess, winningNumber, pastGuesses) {

    // YOUR CODE HERE

}

function playGame() {
    // Generate a winningNumber randomly
    const winningNumber = Math.ceil(Math.random() * 100);
    // we start with no past, wrong guesses
    const pastGuesses = [];

    // We are grabbing the button from our html
    const button = document.querySelector('button');

    // We are listening for when the use clicks on our button.
    // When they click, we will check in the input field to see if they have guessed a number. Then we will run the function `checkGuess`, and give it the player's guess, the winning number, and the empty array of guesses!
    button.addEventListener('click', function() {

        const playersGuess = +document.querySelector('input').value;
        document.querySelector('input').value = 0;
        checkGuess(playersGuess, winningNumber, pastGuesses)
    })

}

// start up the game!
playGame();
