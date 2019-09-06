let musicalHangman = {
    hardModeBool: false,
    possibleWordsEasyMode: ['PLACEHOLDER'],
    possibleWordsHardMode: ['PLACEHOLDER'],
    secretWord: "",
    lettersGuessed: [],
    hiddenWordArr: [],
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
        character is not a letter then it is pushed into the array as is. */
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
    /* This method will be used to update the hidden word array to include
        any new letters that have been guessed. */
    updateHiddenWord: function (userGuess, secretWord, hiddenWordArr) {
        let searchIndex = 0,
            foundIndexes = [];
        /* This loop will search the secret word for letters that match the
            user's guess and return the index of the found element.  Looping
            incrementing the searchIndex number will continue the search from 
            the index of the last found element, continuing until no more 
            matches are found. */

        while (secretWord.indexOf(userGuess, searchIndex) != -1) {
            foundIndexes.push(secretWord.indexOf(userGuess, searchIndex));
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
            hiddenWordArr = hiddenWordArr.splice(foundIndexes[i], 1, userGuess);
        }
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