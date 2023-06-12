// hangman.js
const prompt=require("prompt-sync")({sigint:true});
class HangmanGame {
    constructor(secretWord) {

        this.secretWord = secretWord.toLowerCase();
        this.guessedLetters = new Set();
        this.remainingAttempts = 6;
    }

    start() {
        const hiddenWord = "_".repeat(this.secretWord.length);
        console.log(`Secret word: ${hiddenWord}`);
    }

    guess(letter) {
        const lowercaseLetter = letter.toLowerCase();
        if (this.secretWord.includes(lowercaseLetter)) {
            this.guessedLetters.add(lowercaseLetter);
            console.log(`Correct guess: ${letter}`);
        } else {
            this.remainingAttempts--;
            console.log(`Incorrect guess: ${letter}`);
        }
    }

    displayWord() {
        let displayedWord = '';
        for (const char of this.secretWord) {
            if (this.guessedLetters.has(char)) {
                displayedWord += char;
            } else {
                displayedWord += '_';
            }
        }
        console.log(`Word: ${displayedWord}`);
    }


}

module.exports = HangmanGame;
