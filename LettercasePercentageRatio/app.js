var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        lettercasePercentageRatio(line.trim());
    }
});

function lettercasePercentageRatio(line) {
    var lowercaseCount = 0,
        count,
        i;
    for (i = 0, count = line.length; i < count; i++) {
        if (line[i].toLowerCase() === line[i]) {
            lowercaseCount++;
        }
    }
    var lowercasePercentage = (lowercaseCount * 100 / count).toFixed(2);
    console.log("lowercase: " + lowercasePercentage + " uppercase: " + (100 - (lowercaseCount * 100 / count)).toFixed(2));
}