const gameDisplay = document.querySelectorAll('#game-word-div, #input-div');
const startingButton = document.getElementById("start-button");
const textDiv = document.querySelector('#text-game-div')

startingButton.addEventListener("click", () => {
    gameDisplay.forEach(element => {
        element.classList.remove("hide");
    });
    textDiv.classList.add('hide')
   document.getElementById('game-word-div').scrollIntoView({ behavior: 'smooth' });
});
const randomWords = [
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
    "zebra",
];

// Array to hold the words for the game
let words = [...randomWords];

// Variables to track correct and incorrect word counts
let correctWords = 0;
let incorrectWords = 0;

// Timer variable initialization
let timer = null;

// Function to get a random word from the words array
function getRandomWord() {
    if (words.length === 0) 
        return '';
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

// Function to update the displayed word
function updateGameWordDisplay(word) {
    const wordSpan = document.getElementById('game-words');
    wordSpan.textContent = '';

    for (let i = 0; i < word.length; i++) {
        const span = document.createElement('span');
        span.textContent = word[i];
        wordSpan.appendChild(span);
    }
}

// Function to display the game result
function displayGameResult() {
    const resultDiv = document.getElementById('game-result');
    const accuracy = ((correctWords / (correctWords + incorrectWords)) * 100).toFixed(2);

    resultDiv.innerHTML = `
    <div class="result-card">
      <h2>${correctWords} Words per minute </h2>
      <p>Correct words: ${correctWords}</p>
      <p>Incorrect words: ${incorrectWords}</p>
      <p>Accuracy: ${accuracy}%</p>
    </div>
  `;
}

// Function to reset the game and result to its initial state
function resetGameAndResult() {
    resetGame();
    const resultDiv = document.getElementById('game-result');
    resultDiv.innerHTML = ''; // Clear the game result
}

// Function to start the countdown timer for 60 seconds
function startCountdown() {
    let countdown = 60;
    document
        .getElementById('countdown')
        .textContent = countdown;

    // Decrements countdown every second until it reaches 0, then ends the game
    timer = setInterval(() => {
        countdown--;
        document
            .getElementById('countdown')
            .textContent = countdown;
        if (countdown <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000); // Updates countdown every 1000 milliseconds (1 second)
}

// Function to reset the game to its initial state
function resetGame() {
    clearInterval(timer);
    words = [...randomWords];
    correctWords = 0;
    incorrectWords = 0;
    
    $('#h2-game-input').text('TYPE TO START PLAY')
    document
        .getElementById('countdown')
        .textContent = '60';
    document
        .getElementById('input-game')
        .value = '';
    document
        .getElementById('input-game')
        .disabled = false;
    updateGameWordDisplay(getRandomWord());
}

// Function to end the game by disabling the input field and showing results
function endGame() {
    document
        .getElementById('input-game')
        .disabled = true;
    displayGameResult(); // Display game results using the new function
}

// Event listener triggered when the window is loaded
window.addEventListener('load', () => {
    updateGameWordDisplay(getRandomWord()); // Updates the displayed word on window load
    const inputGame = document.getElementById('input-game');
    let countdownStarted = false;

    // Event listener for user input in the game
    inputGame.addEventListener('input', function (e) {
        if (!countdownStarted) {
           
            $('#h2-game-input').text('Press the space bar after typing a word to move to the next word')
            startCountdown(); // Starts the countdown when user begins typing
            countdownStarted = true;
        }

        const typedWord = e
            .target
            .value
            .trim(); // Retrieves the typed word
        const currentWord = document
            .getElementById('game-words')
            .textContent
            .trim(); // Retrieves the current displayed word
        const wordSpans = document.querySelectorAll('#game-words span'); // Retrieves all span elements within game-words

        // Loop through the characters of the current word and compare with typed characters
        for (let i = 0; i < currentWord.length; i++) {
            if (i < typedWord.length) {
                if (typedWord[i] === currentWord[i]) {
                    wordSpans[i]
                        .classList
                        .add('correct'); // Adds 'correct' class to span for correct characters
                    wordSpans[i]
                        .classList
                        .remove('error'); // Removes 'error' class if present
                } else {
                    wordSpans[i]
                        .classList
                        .remove('correct'); // Removes 'correct' class if present
                    wordSpans[i]
                        .classList
                        .add('error'); // Adds 'error' class to span for incorrect characters
                }
            } else {
                wordSpans[i]
                    .classList
                    .remove('correct', 'error'); // Clears classes for remaining characters
            }
        }

        // Proceeds to the next word on space, composition text, or Enter key press
        if (e.data === ' ' || e.inputType === 'insertCompositionText' || e.code === 'Enter') {
            e.preventDefault(); // Prevents default behavior for space, composition text, or Enter key input

            if (typedWord === currentWord) {
                correctWords++; // Increments correct word count if typed word matches the displayed word
            } else {
                incorrectWords++; // Increments incorrect word count if typed word does not match
            }
            updateGameWordDisplay(getRandomWord()); // Updates the displayed word for the next round
            inputGame.value = ''; // Clears the input field after typing a word
        }
    });

    // Event listener for the game restart button
    document
        .getElementById('restart')
        .addEventListener('click', () => {
            resetGameAndResult();
            countdownStarted = false; // Resets countdown state
        });
});