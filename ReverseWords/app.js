var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        ReverseWords(line);
    }
});

function ReverseWords(sentence) {
    console.log(sentence.split(" ").reverse().join(" "));
}
