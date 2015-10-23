var fs = require("fs");
fs.readFileSync("input.txt").toString().split("\n").forEach(function (line) {
    if (line !== "") {
        capitalizeWords(line);
    }
});

function capitalizeWords(line) {
    var result = line.trim().split(" ").map(function (w) {
        if (w.length === 1) {
            return w[0].toUpperCase();
        } else {
            return w[0].toUpperCase() + w.substr(1);
        }
    }).join(" ");
    console.log(result);
}