var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        niceAngles(line);
    }
});

function niceAngles(line) {
    var temp = parseFloat(line.trim()),
        d = parseInt(temp),
        m = Math.floor((temp - d) * 60),
        s = Math.floor((temp - d - m / 60) * 3600);
    console.log(d + "." + format(m) + "'" + format(s) + "\"");
}

function format(d) {
    return (d < 10 ? "0" : "") + d;
}