var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        beautifulStrings(line);
    }
});

function beautifulStrings(line) {
    var temp = new Array(26),
        str = line.trim(),
        letter, 
        aCode = "a".charCodeAt(0),
        index, summ = 0, k = 26;
    for (var i = 0, count = str.length; i < count; i++) {
        if (str[i] !== (letter = str[i].toLowerCase()) || str[i] !== str[i].toUpperCase()) {
            index = letter.charCodeAt(0) - aCode;
            if (temp[index] !== undefined) {
                temp[index]++;
            } else {
                temp[index] = 1;
            }
        }
    }
    temp.sort(function (a, b) { return b - a; });
    for (var j = 0; j < temp.length; j++) {
        if (temp[j] !== undefined) {
            summ += temp[j] * k--;
        }
    }
    console.log(summ);
}

