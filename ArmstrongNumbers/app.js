var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        armstrongNumbers(line);
    }
});

function armstrongNumbers(line) {
    var temp = line.trim(),
        n = temp.length,
        number = parseInt(temp),
        digits = temp.split(""),
        summ = 0;

    digits.forEach(function(d) {
        summ += Math.pow(parseInt(d), n);
    });

    console.log(number === summ ? "True" : "False");
}