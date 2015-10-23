var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        compressedSequence(line);
    }
});

function compressedSequence(line) {
    var numbers = line.trim().split(" "),
        prev = NaN,
        numCount = 0,
        result = [];
    for (var i = 0, count = numbers.length; i < count; i++) {
        if (!isNaN(prev) && prev !== numbers[i]) {
            result.push(numCount + " " + prev);
            numCount = 0;
        }
        numCount++;
        prev = numbers[i];
    }
    result.push(numCount + " " + prev);
    console.log(result.join(" "));
}