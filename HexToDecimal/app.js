var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        hexToDecimal(line);
    }
});

function hexToDecimal(line) {
    var val = parseInt(line.trim(), 16);
    console.log(val);
}