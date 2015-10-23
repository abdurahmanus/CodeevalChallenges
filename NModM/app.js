var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        nModM(line);
    }
});

function nModM(line) {
    var temp = line.trim().split(","),
        n = parseInt(temp[0]),
        m = parseInt(temp[1]),
        v = 0;
    
    while (v <= n - m) {
        v += m;
    }
    console.log(n - v);
}