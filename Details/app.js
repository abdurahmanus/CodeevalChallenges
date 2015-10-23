var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        details(line);
    }
});

function details(line) {
    var rows = line.trim().split(",");
    var distances = rows.map(function (r) {
        var xRight = r.lastIndexOf("X"),
            yLeft = r.indexOf("Y");
        return yLeft - xRight - 1;
    });
    var min = Math.min.apply(Math, distances);
    console.log(min);
}