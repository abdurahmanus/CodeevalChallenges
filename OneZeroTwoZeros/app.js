var fs  = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        oneZeroTwoZeros(line);
    }
});

function oneZeroTwoZeros(line) {
    var temp = line.trim().split(" "),
        numZeros = parseInt(temp[0]),
        upperBound = parseInt(temp[1]),
        count = 0;
    for (var i = 1; i <= upperBound; i++) {
        if (countZeros(i.toString(2)) === numZeros) {
            count++;
        }
    }
    console.log(count);
}

function countZeros(binaryString) {
    var matchResult = binaryString.match(/0/g);
    return matchResult ? matchResult.length : 0;
}