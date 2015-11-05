var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        numberOfOnes(line);
    }
});

function numberOfOnes(line) {
    var bits = parseInt(line.trim()).toString(2),
        matchResult = bits.match(/1/g);
    console.log(matchResult ? matchResult.length : 0);
}
