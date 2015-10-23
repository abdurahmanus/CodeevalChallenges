var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        swapCase(line);
    }
});

function swapCase(line) {
    var result = "";
    for (var i = 0, count = line.length; i < count; i++) {
        if (line[i] === line[i].toLowerCase()) {
            result += line[i].toUpperCase();
        } else if (line[i] === line[i].toUpperCase()) {
            result += line[i].toLowerCase();
        } else {
            result += line[i];
        }
    }
    console.log(result);
}
