var fs = require("fs");
fs.readFileSync("input.txt").toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.log(line.toLowerCase());
    }
});