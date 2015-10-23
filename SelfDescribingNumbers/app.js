var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        console.log(selfDescribingNumbers(line));
    }
});

function selfDescribingNumbers(line) {
    var number = line.trim();
    for (var i = 0, count = number.length; i < count; i++) {
        if (checkDigit(number, i.toString(), parseInt(number[i])) === false) {
            return 0;
        }
    }
    return 1;
}

function checkDigit(number, digit, count) {
    var matchResult = number.match(new RegExp(digit, "g")),
        matchCount = matchResult ? matchResult.length : 0;
    
    return count === matchCount;
}