/* TODO:
    Create html
        - Add a switch to change this.hardModeBool
        - Add proper functions in the proper places
        - Add div's in proper places with id's so that their html can be 
        changed depending on the current game status.
    Find images and songs for all words.
    Create background image.
    Find musical font.
    Design page with bootstrap or css.
*/

const displayHiddenWord = $("#hidden-word"),
    displayAction = $("#action-notification"),
    displayNumOfWins = $("#num-of-wins"),
    displayNumOfGuesses = $("#num-of-guesses"),
    displayLettersGuessed = $("#letters-guessed"),
    displayResult = $("#result"),
    displaySong = $("#current-song"),
    displayPreviousWord = $("#previous-word"),
    displayVideo = $("#video"),
    displayStartingImage = $("#starting-image");






let musicalHangman = {
    hardModeBool: false,
    possibleWordsEasyMode: [
        'blues',
        'jazz',
        'pop',
        'classical',
        'country',
        'bluegrass',
        'funk',
        'soul',
        'electronic',
        'hip-hop',
        'reggae'
    ],
    possibleWordsHardMode: [
        'Barouqe',
        'Romatic',
        'Gregorian Chant',
        'Atonal',
        'Crust-Punk',
        'Hardcore',
        'Math Rock',
        'Jazz-fusion',
        'synthwave',
        'vaporwave',
        'City-pop',
        'Afro-beat',
        'Italo Disco',
        'Soviet Disco',
        'Avant-Garde',
        'Krautrock',
        'Experimental',
        'Noise',
        'Drone',
        'Bossa Nova',
        'Samba',
        'House',
        'Dubstep',
        'Ambient',
        'Anatolian Rock',
        'Psychedelic',
        'Minimalist',
        'Surf Rock',
        'Jazz-funk',
        'Molam',
        'Spoken Word',
        'Latin-Funk',
        'Prog-Rock',
        'Cyber-Boogie'
    ],
    secretWord: "",
    lettersGuessed: [],
    hiddenWordArr: [],
    wrongGuesses: [],
    guessesLeft: 5,
    winTotal: 0,
    songsAndImages: {
        'blues': ['R.L. Burnside - See My Jumper Hanging On The Line', '<iframe width="300" height="300" src="https://www.youtube.com/embed/K_DOnKJ232M?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        'jazz': ['Wes Montgomery - Bumpin\' on Sunset', '<iframe width="300" height="300" src="https://www.youtube.com/embed/dqn3PF_DcSg?start=1007?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        'pop': ['Jain - Makeba', '<iframe width="300" height="300" src="https://www.youtube.com/embed/59Q_lhgGANc?start=1007?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        'classical': ['Francisco Tarrega - Recuerdos del la Alhambra - Julian Bream Performing', '<iframe width="300" height="300" src="https://www.youtube.com/embed/PqfkMgVaOeY?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        'country': ['Hank Williams - I\'m So Lonely I Could Cry', '<iframe width="300" height="300" src="https://www.youtube.com/embed/4WXYjm74WFI?start=3?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        'bluegrass': ['The Stanley Brothers - Mountain Dew', '<iframe width="300" height="300" src="https://www.youtube.com/embed/ug8p5pVsj9U?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        'funk': ['Gil Scott Heron - Angel Dust', '<iframe width="300" height="300" src="https://www.youtube.com/embed/hWitRABYVBk?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        'soul': ['Johnnie Frierson - Have You Been Good To Yourself', '<iframe width="300" height="300" src="https://www.youtube.com/embed/sgo4KegZp3k?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        'electronic': ['New Order - Blue Monday', '<iframe width="300" height="300" src="https://www.youtube.com/embed/FYH8DsU2WCk?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        'hip-hop': ['The Ghetto Children - Equilibrium', '<iframe width="300" height="300" src="https://www.youtube.com/embed/D0f8hpi9WEI?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        'reggae': ['Jo Jo Bennett - Leaving Rome', '<iframe width="300" height="300" src="https://www.youtube.com/embed/7IutZFzbuSw?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>']
    },

    // This method will return a random word from easy mode or hard mode.
    getNewWord: function () {
        if (this.hardModeBool === true) {
            let index = Math.floor(Math.random() * this.possibleWordsHardMode.length);
            this.secretWord = this.possibleWordsHardMode[index];
        } else {
            let index = Math.floor(Math.random() * this.possibleWordsEasyMode.length);
            this.secretWord = this.possibleWordsEasyMode[index];
        }
    },
    /* This method will be one of the two end conditions.  It will check if the
        secret word has been completely guessed. */
    isWordGuessed: function () {
        let secretLetters = [],
            nonAlphaChars = " !@#$%^&*()_-+={}[]|\\'\";:<>,./?";
        for (i = 0; i < this.secretWord.length; i++) {
            if (this.lettersGuessed.includes(this.secretWord[i])) {
                secretLetters.push(this.secretWord[i]);
            } else if (nonAlphaChars.includes(this.secretWord[i])) {
                secretLetters.push(this.secretWord[i]);
            } else {
                continue;
            }
        }
        if (secretLetters.length === this.secretWord.length) {
            return true;
        } else {
            return false;
        }
    },

    /* This method updates hiddenWordArr to have an underscore for every letter
        in the secret word.  It pushes non-alphabetic characters as they are. */
    hideSecretWord: function () {
        let nonAlphaChars = " !@#$%^&*()_-+={}[]|\\'\";:<>,./?";
        for (i = 0; i < this.secretWord.length; i++) {
            if (nonAlphaChars.includes(this.secretWord[i])) {
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
    displayArray: function (array) {
        return array.join(" ");
    },
    /* This method will be used to update the hidden word array to include
        any new letters that have been guessed. */
    updateHiddenWord: function (userGuess) {
        let searchIndex = 0,
            foundIndexes = [];

        /* This loop will search the secret word for letters that match the
        user's guess and return the index of the found element.  
        Incrementing the searchIndex number will continue the search from 
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
            using the array. */
        foundIndexes = Array.from(new Set(foundIndexes));

        /* This will loop through the indexes in foundIndexes and
            replace the item at each index in hiddenWordArr with the user's guess. */
        for (i = 0; i < foundIndexes.length; i++) {
            this.hiddenWordArr.splice(foundIndexes[i], 1, userGuess);
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
    loseAGuess: function () {
        this.guessesLeft -= 1;
    },
    // Resets properties in the game to start over.
    restartGame: function () {
        displayPreviousWord.text("The word was:  " + this.secretWord);
        this.playSong();
        this.secretWord = "";
        this.lettersGuessed = [];
        this.hiddenWordArr = [];
        this.wrongGuesses = [];
        this.guessesLeft = 5;
        displayNumOfGuesses.text(this.guessesLeft);
        playHangman();
    },
    playSong: function () {
        displaySong.text(this.songsAndImages[this.secretWord][0]);
        console.log(this.songsAndImages[this.secretWord][0])
        displayStartingImage.hide();
        $("iframe").remove();
        displayVideo.append(this.songsAndImages[this.secretWord][1]);
    }
}



$(document).ready(playHangman());

function playHangman() {

    // Assign a random word to secretWord.
    musicalHangman.getNewWord();
    // Reset the hidden word array.
    musicalHangman.hiddenWordArr = [];
    console.log('The secret word is: ' + musicalHangman.secretWord);

    // Create an array of underscores for the letters.
    musicalHangman.hideSecretWord();
    console.log(musicalHangman.hiddenWordArr.join(" "));
    displayResult.text("The secret word is:  ");
    displayHiddenWord.text(musicalHangman.hiddenWordArr.join(" "));

    displayAction.text("Press a key to pick your first letter!");
    displayNumOfWins.text(musicalHangman.winTotal);
    displayNumOfGuesses.text(musicalHangman.guessesLeft);
    displayLettersGuessed.text((musicalHangman.lettersGuessed).toUpperCase);

};
    


    /* This function will start once the user presses a key to start the game. */
$(document).on("keydown", function (event) {
    let userGuess = event.key;
    displayNumOfWins.text(musicalHangman.winTotal);
    displayNumOfGuesses.text(musicalHangman.guessesLeft);
    displayLettersGuessed.text(musicalHangman.lettersGuessed);
    displayAction.text("You chose the letter " + userGuess);
    displayLettersGuessed.text(musicalHangman.lettersGuessed.join(" "));

    console.log('Your guess is: ' + userGuess);

    // Check if the letter has already been guessed.
    if (musicalHangman.hasLetterBeenGuessed(userGuess)) {
        // Notify the user that the letter has already been guessed
        displayAction.text('This letter has been guessed. Please try another letter.');
        displayLettersGuessed.text(musicalHangman.lettersGuessed.join(" "));
        return;
    } else {
        musicalHangman.updateLettersGuessed(userGuess);
        displayLettersGuessed.text(musicalHangman.lettersGuessed.join(" "));
    }

    // Check if the guess is in the secret word.
    if (musicalHangman.isGuessInSecretWord(userGuess)) {
        /* use a function here that gets a random number to give one of
            a few responses that are stored in an array. */
        displayAction.text("That's right!")
        musicalHangman.updateHiddenWord(userGuess);
        displayHiddenWord.text(musicalHangman.hiddenWordArr.join(" "))
    } else {
        musicalHangman.loseAGuess();
        if (musicalHangman.guessesLeft === 0) {
            /* Tell the user they lost, display the correct word, play
                the corresponding song, display image, restart game. */
            displayAction.text("Oh no! You're out of guesses, you lost! " 
            + "\n Press any key to play again.");

            displayResult.text("The secret word was " + musicalHangman.secretWord);

            
            musicalHangman.restartGame();

            } else {
                displayAction.text("Uh oh wrong choice, you lose a guess.");
                displayNumOfGuesses.text(musicalHangman.guessesLeft);
                musicalHangman.updateWrongGuesses(userGuess);
                console.log('Your wrong guesses are: ' + musicalHangman.wrongGuesses);
            }
        } 
    if (musicalHangman.isWordGuessed()) {
        /* Tell the user they won, display the correct word, play
            the corresponding song, display image, restart game. */
        displayAction.text("That's the last letter, you win!")
        musicalHangman.winTotal++
        displayNumOfWins.text(musicalHangman.winTotal);
        displayResult.text(musicalHangman.secretWord);

        musicalHangman.restartGame();

        console.log('Word has been guessed, restarting game.');
    }

});