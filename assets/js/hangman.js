// Create an array of possible words
var words = ['function', 'command', 'programming', 'internet', 'server', ' binary']
var randNum = Math.floor(Math.random() * words.length);
var chosenWord = words[randNum];
var underScore = [];
var rightWords = [];
var wrongWords = [];
var guessLeft = 10;
var decrease = -1;
var delay = 4000;
var domUnderScore = document.getElementById('underscore');
// Create underscores based on length of word

// Dom manipulation

var generateUnderscore = (function () {
    for (var i = 0; i < chosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;;
}
);

$('#guess').text(guessLeft);

// Get users guess
document.addEventListener('keypress', function (event) {
    var keyword = String.fromCharCode(event.keyCode)
    // If users guess is right
    if (underScore.join('') == chosenWord) {
        $('#win').text('You win!')
        setTimeout(function(){
            this.location.reload(true);
        }, delay);
        $('#restart').text('*Restarting*');
        document.removeEventListener('keypress');
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
        if (guessLeft === 0) {
            $('#lose').text('You lose.')
            setTimeout(function(){
                this.location.reload(true);
            }, delay);
            $('#restart').text('*Restarting*')
            document.removeEventListener('keypress');
            // this.location.reload(true);
        }
    }
    domUnderScore.innerHTML = underScore;

});


domUnderScore.innerHTML = generateUnderscore().join(" ");
console.log(generateUnderscore);


$('.btn').click(function () {
    location.reload(true);
})

