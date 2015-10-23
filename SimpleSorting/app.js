var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        simpleSorting(line);
    }
});

function simpleSorting(line) {
    console.log(line.trim().split(" ").sort(function(a, b) { return parseFloat(a) - parseFloat(b) }).join(" "));
}