var dic = [                 // rank
    { "1": "I", "5": "V" }, // 0
    { "1": "X", "5": "L" }, // 1
    { "1": "C", "5": "D" }, // 2
    { "1": "M" }            // 3
];

var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        romanNumerals(line);
    }
});

function romanNumerals(line) {
    var digits = line.trim().split("").map(function(d) { return parseInt(d); }),
        result = [];
    for (var i = 0, count = digits.length; i < count; i++) {
        result.push(toRoman(digits[i], count - i - 1));
    }
    console.log(result.join(""));
}

function toRoman(digit, rank) {
    if (digit < 0 || digit > 9) {
        throw error("incorrect argument digit!");
    } else if (digit === 0) {
        return "";
    } else if (digit < 4) {
        return Array(digit + 1).join(dic[rank]["1"]);
    } else if (digit === 4) {
        return dic[rank]["1"] + dic[rank]["5"];
    } else if (digit === 5) {
        return dic[rank]["5"];
    } else if (digit < 9) {
        return dic[rank]["5"] + Array(digit - 5 + 1).join(dic[rank]["1"]);
    } else if (digit === 9) {
        return dic[rank]["1"] + dic[rank + 1]["1"];
    }
    return "";
}