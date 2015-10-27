var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        roadTrip(line);
    }
});

function roadTrip(line) {
    var min = 0;
    var result = line.trim().match(/(\d)+/g).map(function(n) {
         return parseInt(n);
    }).sort(function(a, b) {
         return a - b;
    }).map(function (v) {
        var r = v - min;
        min = v;
        return r;
    });
    console.log(result.join(","));
}