var font = [
    "-**----*--***--***---*---****--**--****--**---**--",
    "*--*--**-----*----*-*--*-*----*-------*-*--*-*--*-",
    "*--*---*---**---**--****-***--***----*---**---***-",
    "*--*---*--*-------*----*----*-*--*--*---*--*----*-",
    "-**---***-****-***-----*-***---**---*----**---**--",
    "--------------------------------------------------"
];

var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        bigDigits(line);
    }
});

function bigDigits(line) {
    var digits = line.trim().replace(/\D/g, "").split("").map(function(d) { return parseInt(d); });
    printNumber(digits);
}

function printNumber(digits) {
    for (var l = 0; l < 6; l++) {
        printLine(l, digits);
    }
}

function printLine(l, digits) {
    var result = "";
    for (var i = 0, count = digits.length; i < count; i++) {
        result += font[l].substr(digits[i] * 5, 5);
    }
    console.log(result);
}