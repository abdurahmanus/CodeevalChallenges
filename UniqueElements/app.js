var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        uniqueElements(line);
    }
});

function uniqueElements(line) {
    var numbers = line.trim().split(","),
        uniqueNumbers = [],
        prev = "";
    for (var i = 0; i < numbers.length; i++) {
        if (prev !== numbers[i]) {
            uniqueNumbers.push(numbers[i]);
        }
        prev = numbers[i];
    }
    console.log(uniqueNumbers.join(","));
}