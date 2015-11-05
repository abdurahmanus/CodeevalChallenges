var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        stringsAndArrows(line);
    }
});

function stringsAndArrows(line) {
    var temp = line.trim(),
        total = 0;
    for (var i = 0, count = temp.length - 4; i < count; i++) {
        var s = temp.substr(i, 5);
        if (s === ">>-->" || s === "<--<<") {
            total++;
        }
    }
    console.log(total);
}
