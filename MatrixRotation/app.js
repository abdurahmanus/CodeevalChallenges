var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        matrixRotation(line);
    }
});

function matrixRotation(line) {
    var elements = line.trim().split(" "),
        size = Math.sqrt(elements.length),
        result = [];
    for (var i = elements.length - size; i < elements.length; i++) {
        for (var j = 0; j < size; j++) {
            result.push(elements[i - j * size]);
        }
    }
    console.log(result.join(" "));
}

