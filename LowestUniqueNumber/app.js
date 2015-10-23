var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        lowestUniqueNumber(line);
    }
});

function lowestUniqueNumber(line) {
    var freq = [0, 0, 0, 0, 0, 0, 0, 0, 0],
        uniqueIndex = -1,
        numbers = line.trim().split(" ").map(function (n) {
            var number = parseInt(n);
            freq[number - 1]++;
            return number;
        });
    
    for (var i = 0; i < 9; i++) {
        if (freq[i] === 1) {
            uniqueIndex = i;
            break;
        }
    }
    
    if (uniqueIndex === -1) {
        console.log(0);
    } else {
        console.log(numbers.indexOf(uniqueIndex + 1) + 1);
    }
}