var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        ProcessAllWordsInLine(line.split(" "));
    }
});

function ProcessAllWordsInLine(words) {
    var result = [];
    for (var i = 0; i < words.length; i++) {
        result.push(SwapNumbers(words[i].trim()));
    }
    console.log(result.join(" "));
}

function SwapNumbers(word) {
    var letters = word.split("");
    var first = letters.shift();
    var last = letters.pop();
    letters.unshift(last);
    letters.push(first);
    return letters.join("");
}