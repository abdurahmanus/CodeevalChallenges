var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        stepwiseWord(line);
    }
});

function stepwiseWord(line) {
    var words = line.trim().split(" "),
        longest = words[0];
    for (var i = 0, count = words.length; i < count; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    printWord(longest);
}

function printWord(word) {
    var result = [];
    for (var i = 0, count = word.length; i < count; i++) {
        result.push(Array(i + 1).join("*") + word[i]);
    }
    console.log(result.join(" "));
}