var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        sumOfIntegers(line);
    }
});

function sumOfIntegers(line) {
    var arr = line.trim().split(",").map(function(i) { return parseInt(i); }),
        temp = [],
        count = arr.length;
    for (var i = 0; i < count; i++) {
        for (var j = count; j > i; j--) {
            temp.push(summOf(arr.slice(i, j)));
        }
    }
    console.log(Math.max.apply(this, temp));
}

function summOf(values) {
    return values.reduce(function (sum, current) {
        return sum + current;
    }, 0);
}