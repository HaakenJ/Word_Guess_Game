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

function hardModeSwitch() {
    if (!musicalHangman.hardModeBool) {
        musicalHangman.hardModeBool = true;
        console.log("Hard mode is now on");
    } else {
        musicalHangman.hardModeBool = false;
        console.log("Hard mode is now off");
    }
};


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
        'barouqe',
        'romatic',
        'atonal',
        'hardcore',
        'jazz-fusion',
        'vaporwave',
        'city-pop',
        'afrobeat',
        'italo-disco',
        'soviet-disco',
        'krautrock',
        'bossa-nova',
        'house',
        'ambient',
        'anatolian-rock',
        'psychedelic',
        'surf-rock',
        'jazz-funk',
        'molam',
        'latin-funk',
        'boogie'
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
        'reggae': ['Jo Jo Bennett - Leaving Rome', '<iframe width="300" height="300" src="https://www.youtube.com/embed/7IutZFzbuSw?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        'baroque': ['J.S. Bach - Air on the G String (Suite No.3, BMV 1068)', '<iframe width="300" height="300" src="https://www.youtube.com/embed/pzlw6fUux4o?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        'romantic': ['Pyotr Ilyich Tchaikovsky - Piano Concerto No.1 Op.23 in B Flat Minor','<iframe width="300" height="300" src="https://www.youtube.com/embed/IL4P4OV8LVM?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        'atonal': ['Anton Webern - Five Pieces for Orchestra Op.10', '<iframe width="300" height="300" src="https://www.youtube.com/embed/reqqQ-kBJQ0?start=60&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        'hardcore': ['Fang - The Money Will Roll Right In', '<iframe width="300" height="300" src="https://www.youtube.com/embed/0HAPTzS6jZs?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        'jazz-fusion': ['Masayoshi Takanaka - Sexy Dance', '<iframe width="300" height="300" src="https://www.youtube.com/embed/9cuxrkZeai8?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        'vaporwave': ['Windows96 - Caligula', '<iframe width="300" height="300" src="https://www.youtube.com/embed/o9zZ4Gj75xs?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        'city-pop': ['Tatsuro Yamashita - Sparkle', '<iframe width="300" height="300" src="https://www.youtube.com/embed/ysee78SnEA4?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        'afrobeat': ['Fela Kuti - Water No Get Enemy', '<iframe width="300" height="300" src="https://www.youtube.com/embed/IQBC5URoF0s?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        'italo-disco': ['My Mine - Hypnotic Tango', '<iframe width="300" height="300" src="https://www.youtube.com/embed/gHvA0QFDoVY?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        'soviet-disco': ['Mirdza Zivere - Vienmer But', '<iframe width="300" height="300" src="https://www.youtube.com/embed/F4FGI314SoY&?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        'krautrock': ['Kraftwerk - Autobahn', '<iframe width="300" height="300" src="https://www.youtube.com/embed/vkOZNJYAZ7c?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        'bossa-nova': ['Elis Regina & Tom Jobim - Aguas de Março', '<iframe width="300" height="300" src="https://www.youtube.com/embed/E1tOV7y94DY?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        'house': ['The Juan Maclean - Zone Non Linear', '<iframe width="300" height="300" src="https://www.youtube.com/embed/j6c3FdZkRYs?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        'ambient': ['Hiroshi Yoshimura - Creek', '<iframe width="300" height="300" src="https://www.youtube.com/embed/D7aYjRl_6Zw?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        'anatolian-rock': ['Barış Manço - Ali Yazar Veli Bozar', '<iframe width="300" height="300" src="https://www.youtube.com/embed/UMaRoL-2gIg?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        'Psychedelic': ['Los Dug Dug\'s - Smog', '<iframe width="300" height="300" src="https://www.youtube.com/embed/UixdCG6NYjo?start=27&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        'surf-rock': ['Takeshi Terauchi And Bunnys - Seichô Terauchi Bushi', '<iframe width="300" height="300" src="https://www.youtube.com/embed/UbSJ0HVwpzc?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        'jazz-funk': ['Delvon Lamarr Organ Trio - Move On Up', '<iframe width="300" height="300" src="https://www.youtube.com/embed/jhicDUgXyNg?start=9&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        'molam': ['Waipod Phetsuphan - Ding Ding Dong', '<iframe width="300" height="300" src="https://www.youtube.com/embed/r8JzYC-HCHk?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        'latin-funk': ['Azymuth - Partido Alto', '<iframe width="300" height="300" src="https://www.youtube.com/embed/Hl1X0iD82a4?start=4&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        'boogie': ['Pink Fink - Haunted Boogie', '<iframe width="300" height="300" src="https://www.youtube.com/embed/R_QLyaAMktQ?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>']
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
        displayLettersGuessed.text(this.lettersGuessed);
        playHangman();
    },
    playSong: function () {
        displaySong.text(this.songsAndImages[this.secretWord][0]);
        console.log(this.songsAndImages[this.secretWord][0])
        displayStartingImage.hide();
        $("iframe").remove();
        displayVideo.append(this.songsAndImages[this.secretWord][1]);
    },
}



$(document).ready(playHangman());

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
            displayAction.text("Oh no! You're out of guesses, you lost! " +
                "\n Press any key to play again.");

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