let musicalHangman = {
    hardModeBool: false,
    possibleWordsEasyMode: ['PLACEHOLDER'],
    possibleWordsHardMode: ['PLACEHOLDER'],
    secretWord: "",
    lettersGuessed: [],
    guessesLeft: 5,
    songsAndImages: {
        PLACEHOLDER: 'PLACEHOLDER'
    },
    // This method will return a random word from easy mode or hard mode.
    getNewWord: function () {
        if (this.hardModeBool === true) {
            let index = Math.floor(Math.random() * this.possibleWordsHardMode.length);
            return this.possibleWordsHardMode[index];
        } else {
            let index = Math.floor(Math.random() * this.possibleWordsEasyMode.length);
            return this.possibleWordsEasyMode[index];
        }
    },
    /* This method takes in a secret word string and returns an array of 
        underscores representing the letters of the secret word.  If a 
        character is not a letter then it is push into the array as is. */
    hideSecretWord: function (secretWord) {
        let hiddenWordArr = [];
        let nonAlphaChars = " !@#$%^&*()_-+={}[]|\\'\";:<>,./?";
        for (i = 0; i < secretWord.length; i++) {
            if nonAlphaChars.includes(secretWord[i]) {
                hiddenWordArr.push(secretWord[i]);
            } else {
                hiddenWordArr.push("_");
            }
        }
        return hiddenWordArr;
    },
    /* This method takes in an array and returns a string with each character
        separated by a whitespace character.  This will only be used to display
        the hidden characters of the secret word. */
    displayHiddenWord: function (hiddenWordArr) {
        return hiddenWordArr.join(" ");
    },
    /* This method checks if a letter has already been guessed and returns true
       if it has, false otherwise. */
    hasLetterBeenGuessed: function (userGuess, lettersGuessed) {
        if (lettersGuessed.includes(userGuess)) {
            return true;
        } else {
            return false;
        }
    },
    /* This method adds a guess to the lettersGuessed array and returns it. */
    updateLettersGuessed: function (userGuess, lettersGuessed) {
        lettersGuessed.push(userGuess);
        return lettersGuessed;
    },
    /* This method returns true or false depending on if the user's guess is
       in the secret word. */
    isGuessInSecretWord: function (userGuess, secretWord) {
        if (secretWord.includes(userGuess)) {
            return true;
        } else {
            return false;
        }
    }


}