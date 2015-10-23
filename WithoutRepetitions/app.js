var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        withoutRepetitions(line);
    }
});

function withoutRepetitions(line) {
    var result = line.trim().replace(/(.)\1+/g, function (str, match) {
        return match[0];
    });
    console.log(result);
}