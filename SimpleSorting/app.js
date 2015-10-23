var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        simpleSorting(line);
    }
});

function simpleSorting(line) {
    var numbers = line.trim().split(" ").map(function (n) { return parseFloat(n); });
    console.log(numbers.sort(function (a, b) { return a - b; }).map(function (n) { return n.toFixed(3); }).join(" "));
}