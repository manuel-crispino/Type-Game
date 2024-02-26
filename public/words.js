const words = [
    "acorn",
    "and",
    "as",
    "at",
    "are",
    "all",
    "about",
    "after",
    "another",
    "also",
    "among",
    "away",
    "above",
    "around",
    "Airplane",
    "America",
    "ant",
    "apple",
    "area",
    "aroma",
    "arrest",
    "art",
    "artist",
    "baby",
    "ball",
    "banana",
    "base",
    "baseball",
    "bomb",
    "better",
    "beach",
    "beginner",
    "beginning",
    "boss",
    "behave",
    "be",
    "butterfly",
    "cake",
    "chat",
    "chair",
    "cost",
    "control",
    "console",
    "Canada",
    "champion",
    "candle",
    "carrot",
    "cat",
    "cookie",
    "coming",
    "create",
    "change",
    "challenge",
    "circle",
    "chest",
    "chocolate",
    "coconut",
    "daisy",
    "desk",
    "dog",
    "dot",
    "doctor",
    "dream",
    "donut",
    "desert",
    "destroy",
    "dossier",
    "detected",
    "debug",
    "drum",
    "eagle",
    "egg",
    "elephant",
    "east",
    "easy",
    "every",
    "enjoy",
    "example",
    "experience",
    "early",
    "enough",
    "energy",
    "eager",
    "economy",
    "flavour",
    "father",
    "focus",
    "finger",
    "for",
    "form",
    "foam",
    "fist",
    "female",
    "fork",
    "from",
    "family",
    "friend",
    "food",
    "far",
    "funny",
    "fire",
    "frog",
    "giraffe",
    "goat",
    "grape",
    "hat",
    "host",
    "hostess",
    "honor",
    "hotel",
    "hamburger",
    "hate",
    "have",
    "had",
    "having",
    "hot",
    "hello",
    "harp",
    "hello",
    "house",
    "how",
    "ice",
    "iguana",
    "ink",
    "it's",
    "Italy",
    "icon",
    "is",
    "into",
    "important",
    "interesting",
    "information",
    "jam",
    "jigsaw",
    "jelly",
    "just",
    "job",
    "journey",
    "join",
    "judge",
    "June",
    "Japan",
    "Journal",
    "know",
    "kind",
    "knowledge",
    "king",
    "keep",
    "kid",
    "kiwi",
    "Kuwait",
    "kitchen",
    "key",
    "kite",
    "kiss",
    "kick",
    "lime",
    "label",
    "lost",
    "lady",
    "lake",
    "light",
    "let",
    "long",
    "London",
    "leader",
    "lamp",
    "lemon",
    "lighthouse",
    "man",
    "mango",
    "monkey",
    "moon",
    "mum",
    "monster",
    "most",
    "more",
    "mint",
    "make",
    "mind",
    "mean",
    "name",
    "nothing",
    "none",
    "near",
    "niche",
    "neon",
    "nasty",
    "nest",
    "net",
    "never",
    "news",
    "newspaper",
    "new",
    "next",
    "ninja",
    "north",
    "ocean",
    "orange",
    "ok",
    "pear",
    "peach",
    "penguin",
    "queen",
    "quilt",
    "rabbit",
    "raccoon",
    "rose",
    "snake",
    "squirrel",
    "sun",
    "table",
    "tiger",
    "trip",
    "tulip",
    "the",
    "them",
    "that",
    "those",
    "than",
    "then",
    "taste",
    "test",
    "toast",
    "translate",
    "tram",
    "train",
    "thin",
    "umbrella",
    "unicorn",
    "vase",
    "violin",
    "violet",
    "war",
    "wait",
    "weather",
    "water",
    "wonder",
    "was",
    "warn",
    "warm",
    "wet",
    "watermelon",
    "whale",
    "woman",
    "X-ray",
    "Xylophone",
    "xenophobia",
    "xenon",
    "xerox",
    "yesterday",
    "yes",
    "yacht",
    "yard",
    "yellow",
    "yak",
    "you",
    "yet",
    "young",
    "youth",
    "yacht",
    "zebra"
];
let pressedIndex;
let wordWasWrong = false;
let wordWasCorrect = false;
let spacePressed;
let countDown = document.getElementById('countdown'); //selecting countdown//
let timeRemaining = 60; //time Game//
let countDownStarted = false;
let randomWordsGame = []; //game words generated word//
let resultChecker = []; // this will push correct or wrong words for the final score//
let keystroke = 0;
const randomIndex = 400; //words should generate until this number//
const startBtn = document.getElementById("start-button");
let wordIndex = 0; //is counting for every word that will be highlighted //
let inputUser = document.getElementById('input-game'); //take te input bar//
let lineOfWords = 10;
let wrongLetter = 0;
let timeEnd = false;
let correctWord = 0;
let wrongWord = 0;
let highlightedWord;
let wordNr;
let wordClass;
let gameContainer = document.querySelector('.game-word-div-text');
let lineIndex;
let userInputValue;
let currentWord;
startBtn.addEventListener('click', () => {
    generateWords();

})

function generateWords() { //generating a random game of words//
    while (randomWordsGame.length < randomIndex) {

        let randomWordsGenerator = Math.floor(Math.random() * words.length) //create random words//
        let randomWords = words[randomWordsGenerator]; //words display random generator//
        randomWordsGame.push(randomWords); //push the generated words into the game generator array to display//
    }

    generateSpan();

};

let span;

let lineNrCount = 0;
let lineNrArray = [];
let currentLine;

function generateSpan() {
    gameContainer.innerHTML = " "; //this is to avoid to clean the container//
    let lineNr = null;
    randomWordsGame.forEach((currentWord, index) => {
        highlightedWord = currentWord;
        wordNr = index;
        span = document.createElement('span'); //creating a span for each word//
        span.textContent = currentWord + " "; //adding to each span a word from the randomWordsArray and also add space between words//
        span.setAttribute('word-nr', index); //add to each span the attribute and number of length//
        span
            .classList
            .add('gameWords');

        if (index % 10 === 0 || index === 0) { //creating a line of 10 words //
            lineNr = document.createElement('div');
            lineNr.appendChild(document.createElement('br'));
            lineNrCount++;

            lineNr
                .classList
                .add('lineNr');
            lineNr.setAttribute('line-nr', lineNrCount);
            gameContainer.appendChild(lineNr);
            lineNrArray.push(lineNr);
        }

        lineNr.appendChild(span);

    });

    wordClass = document.querySelectorAll('.gameWords');

    highlightCurrentWord();
};

document
    .getElementById("restart")
    .addEventListener('click', restart) //restart game when button is clicked//

let endGame;

function restart() {
    letterIndex = 0;
    letterEqual = false;
    goingBack = false;
    repeatedLetterString = "";
    repeatedLetter = [];
    checkIfMatch = [];
    wrongLetter = 0;
    wrongInput = false;

    keystroke = 0;
    endGame = true;
    resultDiv
        .classList
        .add('hide');
    gameContainerFather
        .classList
        .remove('hide');
    gameContainer
        .classList
        .remove('hide');
    accuracy = "";
    lineNrArray.length = 0;
    currentLine = null;
    resultShowed = false;
    timeEnd = false;
    resultChecker = [];
    correctWord = 0;
    wrongWord = 0;
    wordIndex = 0;
    randomWordsGame = [];
    countDownStarted = false;
    inputUser.value = "";
    timeRemaining = 60;
    countDown.textContent = timeRemaining;
    generateWords();
    showResult();
}

let wrongInput = false; //check if input is wrong//

function highlightCurrentWord() {
    if (wordIndex >= 0 && wordIndex < randomWordsGame.length) {
        Array.from(wordClass) //Array.from() =create an array from each word of the class //
            .forEach((span, index) => {
            if (index === wordIndex && wordWasCorrect) {//here check previous word correct or wrong //

                const previousSpan = wordClass[index]; 
                previousSpan
                    .classList
                    .add('correct');
                wordWasCorrect = false;

            }
            if (index === wordIndex && wordWasWrong) {//here check previous word correct or wrong //

                const previousSpanWrong = wordClass[index]; 
                previousSpanWrong
                    .classList
                    .add('wrong-word-color');
                wordWasWrong = false;

            }

            if (index === wordIndex) { //all about highlights//
                span
                    .classList
                    .add('highlight')

                if (wrongInput) {
                    span
                        .classList
                        .remove('highlight');
                    span
                        .classList
                        .add('red-background'); // Add red background class if wrong input

                } else if (!wrongInput) {
                    span
                        .classList
                        .remove('red-background');
                    span
                        .classList
                        .add('highlight'); // Remove red background class if input is correct

                }
            } else {
                span
                    .classList
                    .remove('highlight');

            }
        });
        inputUser.focus();

        startType();

    } else {
        stopType()
    }
};

function stopType() {
    alert('words are finished  wait for timer to finish for the result ')

}

inputUser.addEventListener('keydown', spaceBarHandler);
let repeatedLetter = [];
let letterIndex = 0;
let repeatedLetterString;

function spaceBarHandler(event) {
    pressedIndex = 0;

    let currentWord = randomWordsGame[wordIndex];
    let currentLetter = currentWord[letterIndex];
    let userInputLetter = event.key;
    if (event.key === " ") { // when space has been clicked //
        pressedIndex = 0;
        letterIndex = 0;
        letterEqual = false;
        goingBack = false;
        repeatedLetterString = "";
        repeatedLetter = [];
        checkIfMatch = [];
        wrongLetter = 0;
        wrongInput = false;
        checkInput();
        wordIndex++; //add the word to activate the highlight //
        highlightCurrentWord();

        if (wordIndex % 10 === 0) {//every 10 words when user press space the line he writhed disappear //
            lineIndex = Math.floor(wordIndex / 10) - 1; 
            if (lineIndex >= 0 && lineIndex < lineNrArray.length) { 
                currentLine = lineNrArray[lineIndex]; 
                currentLine
                    .classList
                    .add('hide'); 
            }
        }
    }
    if (userInputLetter === 'Backspace' && event.altKey) {
      //in case user cancel with alt and  backspace //
        letterIndex = 0;
        wrongLetter = 0;
        repeatedLetter = [];
        wrongInput = false;
        highlightCurrentWord();
        pressedIndex = 0;

    } else if (userInputLetter === 'Backspace') {
        //all input with backspace //
        if (wrongLetter > 1) {
            wrongLetter--;
            letterIndex--;
           //cancel the wrong word//
        } else {//else if wrong word are finish //
            wrongLetter = 0;
            letterIndex--;

            wrongInput = false;
            highlightCurrentWord();
        }

        wrongInput = false;
    } else if (userInputLetter === 'Shift' || userInputLetter === 'CapsLock' || userInputLetter === 'Enter' || userInputValue === 'Meta') {
      //ignore all this inputs//

    } else {
        let alphabeticWords = /[a-zA-Z0-9;,.\-'*#+`]+/;

        if (alphabeticWords.test(userInputLetter)) {

            if (currentLetter === userInputLetter && wrongLetter === 0) {//when the input match the current letter //

                wrongInput = false;
                repeatedLetter.push(userInputLetter);
                repeatedLetterString = repeatedLetter.join('');
                wrongLetter = 0;

                letterIndex++;

            } else {//if current letter do not match//
                letterIndex++;
                keystroke++;
                wrongLetter++;
                wrongInput = true;

            }
        } else {
           //ignore this input//
        }
        highlightCurrentWord();

    };
};

function startType() {
    inputUser.addEventListener('keydown', (event) => { //if user start typing user start countdown//
        if (event.key.length === 1 && !countDownStarted) {
            countDownStarted = true; //check if the first word has been write//
            startCountDown()

        }

    })
}

function startCountDown() {
    endGame = false;
    countDown.textContent = timeRemaining; //add time remaining into textContent//
    let countDownInterval = setInterval(() => {
        //show time change//
        if (timeRemaining <= 0 || !countDownStarted) {
            timeEnd = true;

            clearInterval(countDownInterval) //stop the function from keep going when 0 is done//

            showResult();

        } else {
            timeRemaining--; //decrease time//
            countDown.textContent = timeRemaining;
        }

    }, 1000)

}

function checkInput() {

    userInputValue = inputUser
        .value
        .trim();

    currentWord = randomWordsGame[wordIndex];

    if (currentWord.length === userInputValue.length) {
        if (userInputValue === currentWord) {
            correctWord++;
            wordWasCorrect = true;

        } else {
            wrongWord++;

            wordWasWrong = true;
        }

    } else if (userInputValue !== currentWord) {
        wrongWord++;
        wordWasWrong = true;
    }
    inputUser.value = "";

    resultChecker.push(userInputValue);
    //reset input user

    highlightCurrentWord();

}

let resultDiv = document.getElementById('game-result');
resultDiv
    .classList
    .add('hide');
let resultShowed;
let wpm
let accuracy;

let userScore = document.createElement('p');
let gameContainerFather = document.getElementById('game-word-div');
function showResult() {

    if (timeRemaining <= 0 && !resultShowed) {
        wpm = correctWord;
        accuracy = (correctWord / (correctWord + wrongWord)) * 100;
        gameContainer
            .classList
            .add('hide');
        gameContainerFather
            .classList
            .add('hide');
        userScore.innerHTML = "Correct words = " + correctWord + ";<br>Wrong words = " + wrongWord + ";<br>Keystrokes = " + keystroke + ";<br>WPM = " + wpm + ";<br>Accuracy = " + accuracy.toFixed(2) + "%;";
        resultDiv.appendChild(userScore);
        resultShowed = true;
        resultDiv
            .classList
            .remove('hide');
    } else {
        userScore.innerHTML = "";
        console.log('hide result');
        resultShowed = false;

    }

}
