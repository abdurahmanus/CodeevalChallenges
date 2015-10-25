var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        calculateDistance(line);
    }
});

function calculateDistance(line) {
    var temp = line.trim().replace(/[\(\)]/g, "").split(" ").map(function (n) { return parseInt(n); });
    console.log(Math.sqrt(Math.pow(Math.abs(temp[2] - temp[0]), 2) + Math.pow(Math.abs(temp[3] - temp[1]), 2)));
}