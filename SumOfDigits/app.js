var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        sumOfDigits(line);
    }
});

function sumOfDigits(line) {
    var summ = 0;
    line.trim().split("").forEach(function (d) {
        summ += parseInt(d);
    });
    console.log(summ);
}