var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        stringsAndArrows(line);
    }
});

function stringsAndArrows(line) {
    
}
