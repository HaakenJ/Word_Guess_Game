let musicalHangman = {
    hardModeBool: false,
    possibleWordsEasyMode: ['PLACEHOLDER'],
    possibleWordsHardMode: ['PLACEHOLDER'],
    secretWord: "",
    lettersGuessed: [],
    hiddenWordArr: [],
    wrongGuesses: [],
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
    /* This method updates hiddenWordArr to have an underscore for every letter
        in the secret word.  It pushes non-alphabetic characters as they are. */
    hideSecretWord: function () {
        let nonAlphaChars = " !@#$%^&*()_-+={}[]|\\'\";:<>,./?";
        for (i = 0; i < this.secretWord.length; i++) {
            if nonAlphaChars.includes(this.secretWord[i]) {
                this.hiddenWordArr.push(this.secretWord[i]);
            } else {
                this.hiddenWordArr.push("_");
            }
        }
    },
    /* This method takes in an array and returns a string with each character
        separated by a whitespace character.  This will be used to display
        the hidden characters of the secret word and the letters guessed 
        so far. */
    displayArrays: function (array) {
        return array.join(" ");
    },
    /* This method will be used to update the hidden word array to include
        any new letters that have been guessed. */
    updateHiddenWord: function (userGuess) {
        let searchIndex = 0,
            foundIndexes = [];
        /* This loop will search the secret word for letters that match the
            user's guess and return the index of the found element.  Looping
            incrementing the searchIndex number will continue the search from 
            the index of the last found element, continuing until no more 
            matches are found. */

        while (this.secretWord.indexOf(userGuess, searchIndex) != -1) {
            foundIndexes.push(this.secretWord.indexOf(userGuess, searchIndex));
            searchIndex += 1;
        }
        /* This will eliminate duplicate values that can result from the above
            loop.  Creating a new Set from the foundIndexes automatically
            eliminates duplicates because sets cannot have them.  Array.from() 
            will create an array from the resulting set so that I can continue 
            using arrays. */
        foundIndexes = Array.from(new Set(foundIndexes));
        /* This will loop through the indexes in foundIndexes and
            replace the item at each index in hiddenWordArr with the user's guess. */
        for (i = 0; i < foundIndexes.length; i++) {
            this.hiddenWordArr = this.hiddenWordArr.splice(foundIndexes[i], 1, userGuess);
        }
    },
    /* This method checks if a letter has already been guessed and returns true
       if it has, false otherwise. */
    hasLetterBeenGuessed: function (userGuess) {
        if (this.lettersGuessed.includes(userGuess)) {
            return true;
        } else {
            return false;
        }
    },
    /* This method adds a guess to the lettersGuessed array. */
    updateLettersGuessed: function (userGuess) {
        this.lettersGuessed.push(userGuess);
    },
    /* This method returns true or false depending on if the user's guess is
       in the secret word. */
    isGuessInSecretWord: function (userGuess) {
        if (this.secretWord.includes(userGuess)) {
            return true;
        } else {
            return false;
        }
    },
    // Update the wrong guesses array with the wrong guess.
    updateWrongGuesses: function (userGuess) {
        this.wrongGuesses.push(userGuess);
    },
    loseAGuess: function() {
        this.guessesLeft -= 1;
    }


}