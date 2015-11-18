var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        decimalToBinary(line);
    }
});

function decimalToBinary(line) {
    console.log(parseInt(line.trim()).toString(2));
}