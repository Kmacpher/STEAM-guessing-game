```javascript

function checkGuess(playersGuess, winningNumber, pastGuesses) {

    if (isWinningGuess(playersGuess, winningNumber)) {
        youWin();
    } else {
        if (isPastGuess(playersGuess, pastGuesses)) {
            updateText('You have guessed that number already! Guess a different number.');
        } else {
            addWrongGuessToPastGuesses(playersGuess, pastGuesses);
            if(isGameOver(pastGuesses)) {
                youLose();
            } else {
                const text = howClose(playersGuess, winningNumber);
                updateText(text);
            }
        }
    }
}

```
