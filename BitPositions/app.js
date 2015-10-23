var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        bitPositions(line);
    }
});

function bitPositions(line) {
    var temp = line.trim().split(","),
        binaryVal = parseInt(temp[0]).toString(2),
        p1 = binaryVal.length - parseInt(temp[1]),
        p2 = binaryVal.length - parseInt(temp[2]);
    console.log(binaryVal[p1] === binaryVal[p2]);
}