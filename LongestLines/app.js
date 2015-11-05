var fs = require("fs"),
    temp = [],
    numberOfOutput;

fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        temp.push(line.trim());
    }
});

numberOfOutput = parseInt(temp[0]);
temp.slice(1).sort(function(a, b) {
    return b.length - a.length;
}).slice(0, numberOfOutput).forEach(function(t) {
    console.log(t);
});