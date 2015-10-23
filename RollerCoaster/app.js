var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        rollerCoaster(line.trim());
    }
});

function rollerCoaster(line) {
    var toUpper = true, result = "";
    for (var i = 0; i < line.length; i++) {
        if (isLetter(line[i])) {
            result += toUpper ? line[i].toUpperCase() : line[i].toLowerCase();
            toUpper = !toUpper;
        } else {
            result += line[i];
        }
    }
    console.log(result);
}

function isLetter(l) {
    return /[a-zA-Z]/.test(l);
}