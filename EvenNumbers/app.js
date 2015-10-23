var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        evenNumbers(line);
    }
});

function evenNumbers(line) {
    console.log(parseInt(line.trim(), 10) % 2 === 0 ? "1" : "0");
}
