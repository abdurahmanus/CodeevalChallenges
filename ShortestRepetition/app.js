var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        shortestRepetition(line);
    }
});

function shortestRepetition(line) {
    var temp = line.trim(),
        result = 0;
    for (var i = 1, count = temp.length / 2; i <= count; i++) {
        if (temp.substr(0, i) === temp.substr(i, i)) {
            result = i;
            break;
        }
    }
    console.log(result > 0 ? result : temp.length);
}