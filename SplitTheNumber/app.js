var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        splitTheNumber(line);
    }
});

function splitTheNumber(line) {
    var temp = line.trim().split(" "),
        opIndex = temp[1].indexOf("+");
    if (opIndex !== -1) {
        console.log(Number(temp[0].substr(0, opIndex)) + Number(temp[0].substr(opIndex)));
    } else {
        opIndex = temp[1].indexOf("-");
        console.log(Number(temp[0].substr(0, opIndex)) - Number(temp[0].substr(opIndex)));
    }
}