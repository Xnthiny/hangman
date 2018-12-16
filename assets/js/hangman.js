// Create an array of possible words
var words = ['function', 'command', 'programming', 'internet', 'server', 'binary', 'automation', 'boolean', 'computer', 'datalog', 'event', 'framework', 'html', 'css', 'javascript', 'react', 'jquery']
var randNum = Math.floor(Math.random() * words.length);
var chosenWord = words[randNum];
var underScore = [];
var rightWords = [];
var wrongWords = [];
var guessLeft = 10;
var decrease = -1;
var delay = 2000;
var domUnderScore = document.getElementById('underscore');
var generateUnderscore = (function () {
    for (var i = 0; i < chosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;;
}
);

$('#guess').text(guessLeft);

$('.btn').click(function () {
    location.reload(true);
})



// Get users guess
document.addEventListener('keypress', function (event) {
    if (guessLeft == 0) {
        this, document.removeEventListener('keypress');
    }
    var keyword = String.fromCharCode(event.keyCode)
    // If users guess is right
    if (underScore.join('') == chosenWord) {
        $('#win').text('You win!')
        setTimeout(function () {
            this.location.reload(true);
        }, delay);
        $('#restart').text('*Restarting*');
        this, document.removeEventListener('keypress');
    }

    if (chosenWord.indexOf(keyword) > -1) {
        var correctIndex = [];
        for (var i = 0; i < chosenWord.length; i++) {
            if (chosenWord[i] === keyword) {
                correctIndex.push(i);
            }
        }
        rightWords.push(keyword);
        rightWords.join(" ")
        console.log(rightWords);
        for (var i = 0; i < correctIndex.length; i++) {
            underScore[correctIndex[i]] = keyword;

        }
        console.log(correctIndex);
        console.log(underScore)

    } else {
        wrongWords.push(keyword);
        guessLeft += decrease;
        $('#guess').text(guessLeft);
        console.log(guessLeft);
        if (guessLeft == 0) {
            $('#reveal').text('The word was: ' + chosenWord + '.');
            $('#lose').fadeIn().text('You lose.');
            setTimeout(function () {
                this.location.reload(true);
            }, delay);
            $('#restart').text('*Restarting*')
        }
    }
    domUnderScore.innerHTML = underScore;

});


domUnderScore.innerHTML = generateUnderscore().join(" ");
console.log(generateUnderscore);

