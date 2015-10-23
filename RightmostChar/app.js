var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        rightmostChar(line);
    }
});

function rightmostChar(line) {
    var temp = line.trim().split(","),
        s = temp[0],
        c = temp[1];
    console.log(s.lastIndexOf(c));
}