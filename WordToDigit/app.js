var digits = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
};

var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        wordToDigit(line);
    }
});

function wordToDigit(line) {
    var result = line.trim().split(";").map(function (w) { return digits[w]; });
    console.log(result.join(""));
}