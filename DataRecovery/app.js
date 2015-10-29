var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        dataRecovery(line);
    }
});

function dataRecovery(line) {
    var temp = line.trim().split(";"),
        words = temp[0].split(" "),
        numbers = temp[1].split(" ").map(function(n) { return parseInt(n); }),
        result = Array.apply(null, Array(words.length));
    numbers.forEach(function(n, i) {
        result[n - 1] = words[i];
    });
    result[result.indexOf(undefined)] = words[words.length - 1];
    console.log(result.join(" "));
}