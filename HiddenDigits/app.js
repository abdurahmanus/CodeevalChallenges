var fs = require("fs"),
    letters = "abcdefghij",
    charCodeOfA = "a".charCodeAt(0);

fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        HiddenDigits(line);
    }
});

function HiddenDigits(line) {
    var result = [];
    line.trim().split("").forEach(function (letter) {
        var digit = letterToDigit(letter);
        if (!isNaN(digit)) {
            result.push(digit);
        }
    });
    
    console.log(result.length === 0 ? "NONE" : result.join(""));
}

function letterToDigit(letter) {
    var digit = parseInt(letter);
    if (!isNaN(digit)) {
        return digit;
    }
    
    var letterIndex;
    if ((letterIndex = letters.indexOf(letter)) >= 0) {
        return letters.charCodeAt(letterIndex) - charCodeOfA;
    }
    
    return NaN;
}