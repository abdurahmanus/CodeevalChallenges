var fs = require("fs"),
    summ = 0;
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        summ += parseInt(line.trim());
    }
});
console.log(summ);