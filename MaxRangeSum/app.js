var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        maxRangeSum(line);
    }
});

function maxRangeSum(line) {
    var temp = line.trim().split(";"),
        daysCount = parseInt(temp[0]),
        values = temp[1].split(" ").map(function (v) { return parseInt(v) }),
        maxGain = Number.NEGATIVE_INFINITY, curGain;
    for (var i = 0, count = values.length - daysCount; i <= count; i++) {
        curGain = calcSum(values.slice(i, i + daysCount));
        if (curGain > maxGain) {
            maxGain = curGain;
        }
    }
    console.log(maxGain > 0 ? maxGain : 0);
}

function calcSum(values) {
    var summ = 0;
    for (var i = 0; i < values.length; i++) {
        summ += values[i];
    }
    return summ;
}
