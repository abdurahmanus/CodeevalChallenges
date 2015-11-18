var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        trailingString(line);
    }
});

function trailingString(line) {
    var temp = line.trim().split(",");
    console.log(endsWith(temp[0], temp[1]) ? 1 : 0);
}

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}