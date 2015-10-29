var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        minimumDistance(line);
    }
});

function minimumDistance(line) {
    var numbers = line.trim().split(" ").map(function (n) { return parseInt(n); }),
        addresses = numbers.slice(1),
        min = Number.MAX_VALUE;
    addresses.forEach(function(a) {
        var summ = calcSumOfDistances(a, addresses);
        if (summ < min) min = summ;
    });
    console.log(min);
}

function calcSumOfDistances(adr, addresses) {
    return addresses.reduce(function (sum, current) {
        return sum + Math.abs(adr - current);
    }, 0);
}