var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        comparePoints(line);
    }
});

function comparePoints(line) {
    var temp = line.trim().split(" "),
        o = parseInt(temp[0]),
        p = parseInt(temp[1]),
        q = parseInt(temp[2]),
        r = parseInt(temp[3]);
    console.log(direction(o, p, q, r));
}

function direction(o, p, q, r) {
    var v = verticalDirection(p, r),
        h = horizontalDirection(o, q);
    if (v === h && v === "") return "here";
    else return v + h;
}

function horizontalDirection(o, q) {
    if (q < o) return "W";
    else if (q === o) return "";
    else return "E";
}

function verticalDirection(p, r) {
    if (r < p) return "S";
    else if (r === p) return "";
    else return "N";
}