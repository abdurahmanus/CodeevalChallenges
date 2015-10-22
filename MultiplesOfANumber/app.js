var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        multiplesOfANumber(line);
    }
});

function multiplesOfANumber(line) {
    var temp = line.trim().split(","),
        x = parseInt(temp[0]),
        n = parseInt(temp[1]),
        m = 0;
    while (m < x) {
        m += n;
    }
    console.log(m);
}