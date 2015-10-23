var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        longestWord(line);
    }
});

function longestWord(line) {
    var words = line.trim().split(" ");
    var longest = words.sort(function (a, b) { return b.length - a.length; })[0];
    console.log(longest);
}
