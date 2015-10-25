var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        penultimateWord(line);
    }
});

function penultimateWord(line) {
    var words = line.trim().split(" ");
    console.log(words[words.length - 2]);
}